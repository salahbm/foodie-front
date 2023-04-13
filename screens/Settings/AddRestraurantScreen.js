import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {Button, Modal, Portal, Provider} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo';

const AddRestaurantScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [restaurants, setRestaurants] = useState({
    name: '',
    type1: '',
    type2: '',
    businessNum: '',
    phone: '',
    address: '',
    photo1: null,
    photo2: null,
    photo3: null,
    note: '',
    Sunday: {start: '08:00', end: '21:00'},
    Monday: {start: '08:00', end: '21:00'},
    Tuesday: {start: '08:00', end: '21:00'},
    Wednesday: {start: '08:00', end: '21:00'},
    Thursday: {start: '08:00', end: '21:00'},
    Friday: {start: '08:00', end: '21:00'},
    Saturday: {start: '08:00', end: '21:00'},
  });

  const handleChoosePic = photoNum => {
    const options = {
      nodata: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
      if (response.assets && response.assets.length > 0) {
        const photoURI = response.assets[0].uri;
        setRestaurants(prevState => {
          return {
            ...prevState,
            [`photo${photoNum}`]: photoURI,
          };
        });
      }
    });
  };

  const handleChange = (name, value) => {
    setRestaurants({...restaurants, [name]: value});
  };

  const saveRestaurant = async () => {
    try {
      await axios.post('http://127.0.0.1:8082/data', restaurants);
    } catch (err) {
      console.log('Error sending to Backend: ' + err);
    }
    navigation.navigate('Settings');
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={{flex: 0.5}}>
            <Entypo name="chevron-left" size={30} color="#333" />
          </TouchableOpacity>

          <Text style={styles.textHeader}>Add Restaurant:</Text>
        </View>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>Restaurant Name:</Text>
          <TextInput
            placeholder={'Enter Restaurant Name'}
            style={styles.input}
            placeholderTextColor={'#4545'}
            value={restaurants.name}
            onChangeText={value => handleChange('name', value)}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.text}>Food Type 1: </Text>
              <TextInput
                placeholder="Enter Restaurant Type"
                placeholderTextColor={'#4545'}
                style={styles.inputtype}
                value={restaurants.type1}
                onChangeText={value => handleChange('type1', value)}
              />
            </View>
            <View>
              <Text style={styles.text}>Food Type 2:</Text>
              <TextInput
                placeholder="Enter Restaurant Type"
                placeholderTextColor={'#4545'}
                style={styles.inputtype}
                value={restaurants.type2}
                onChangeText={value => handleChange('type2', value)}
              />
            </View>
          </View>

          <Text style={styles.text}>Business Number:</Text>

          <TextInput
            placeholder="Enter Restaurant Business Number"
            placeholderTextColor={'#4545'}
            value={restaurants.businessNum}
            onChangeText={value => handleChange('businessNum', value)}
            style={styles.input}
          />
          <Text style={styles.text}>Phone Number:</Text>

          <TextInput
            placeholder="Enter Phone Number"
            placeholderTextColor={'#4545'}
            value={restaurants.phone}
            onChangeText={value => handleChange('phone', value)}
            style={styles.input}
          />
          <Text style={styles.text}>Address :</Text>

          <TextInput
            placeholder="Address"
            placeholderTextColor={'#4545'}
            value={restaurants.address}
            onChangeText={value => handleChange('address', value)}
            style={styles.input}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              backgroundColor: '#a9ebba',
              borderRadius: 10,
              marginTop: 20,
            }}>
            <Text style={styles.text}>Business Hours :</Text>

            <Button icon={'clock'} onPress={showModal}>
              Select
            </Button>
          </View>
          <BusinessHoursModal
            hideModal={hideModal}
            showModal={showModal}
            visible={visible}
            restaurants={restaurants}
            setRestaurants={setRestaurants}
          />
          <Text style={styles.text}>Note :</Text>

          <TextInput
            placeholder="You can enter note for customers to see what is new in the restaurant(it can be updated anytime"
            placeholderTextColor={'#4545'}
            value={restaurants.note}
            multiline={true}
            onChangeText={value => handleChange('note', value)}
            style={[styles.input, {height: 150}]}
          />

          <ScrollView
            style={{marginTop: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View>
              {restaurants.photo1 && (
                <Image
                  source={{uri: restaurants.photo1}}
                  style={styles.img}
                  resizeMode="cover"
                />
              )}
              <Button
                style={{margin: 15}}
                icon="camera"
                mode="contained"
                onPress={() => handleChoosePic(1)}>
                Pic 1
              </Button>
            </View>
            <View>
              {restaurants.photo2 && (
                <Image
                  resizeMode="cover"
                  source={{uri: restaurants.photo2}}
                  style={styles.img}
                />
              )}
              <Button
                style={{margin: 15}}
                icon="camera"
                mode="contained"
                onPress={() => handleChoosePic(2)}>
                Pic 2
              </Button>
            </View>
            <View>
              {restaurants.photo3 && (
                <Image
                  resizeMode="cover"
                  source={{uri: restaurants.photo3}}
                  style={styles.img}
                />
              )}
              <Button
                style={{margin: 15}}
                icon="camera"
                mode="contained"
                onPress={() => handleChoosePic(3)}>
                Pic 3
              </Button>
            </View>
          </ScrollView>

          <Button
            style={{
              width: 200,
              alignSelf: 'center',
              backgroundColor: 'green',
              marginBottom: 30,
              marginTop: 10,
            }}
            icon="food"
            mode="contained"
            onPress={saveRestaurant}>
            Save Restaurant
          </Button>
        </ScrollView>
      </View>
    </Provider>
  );
};

const BusinessHoursModal = ({
  hideModal,
  visible,
  restaurants,
  setRestaurants,
}) => {
  //Business hours
  const containerStyle = {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#FFFF',
    height: height / 2,
    borderRadius: 10,
  };
  const DAYS_OF_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const handleHoursChange = (day, field, value) => {
    setRestaurants(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [field]: value,
      },
    }));
  };

  const renderPickerItems = () => {
    const items = [];

    for (let i = 0; i <= 23; i++) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      items.push(
        <Picker.Item key={hour} label={`${hour}:00`} value={`${hour}:00`} />,
      );
      items.push(
        <Picker.Item
          key={`${hour}:30`}
          label={`${hour}:30`}
          value={`${hour}:30`}
        />,
      );
    }

    return items;
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        {DAYS_OF_WEEK.map(day => (
          <View key={day} style={styles.row}>
            <Text style={styles.label}>{day}</Text>
            <View style={styles.pickerContainer}>
              <Picker
                itemStyle={{color: 'green', height: 50}}
                style={styles.picker}
                selectedValue={restaurants[day].start}
                onValueChange={value => handleHoursChange(day, 'start', value)}>
                {renderPickerItems()}
              </Picker>
              <Text style={styles.separator}>-</Text>
              <Picker
                itemStyle={{color: 'red', height: 50}}
                style={styles.picker}
                selectedValue={restaurants[day].end}
                onValueChange={value => handleHoursChange(day, 'end', value)}>
                {renderPickerItems()}
              </Picker>
            </View>
          </View>
        ))}
      </Modal>
    </Portal>
  );
};
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf0f2',
    marginTop: Platform.OS === 'ios' ? (height >= 700 ? 45 : 10) : 0,
    paddingHorizontal: 20,
    height: height,
  },
  text: {
    textAlign: 'center',

    marginVertical: 10,
    fontSize: 15,
    fontWeight: '600',
  },
  textHeader: {
    textAlign: 'center',

    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    width: width * 0.9,
    alignSelf: 'center',
    padding: 10,
    height: 40,
    backgroundColor: '#a9ebba',
    borderRadius: 10,
  },
  inputtype: {
    width: width * 0.4,
    padding: 10,
    height: 40,
    backgroundColor: '#a9ebba',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    flex: 0.35,
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  separator: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  img: {width: 100, height: 100, margin: 15},
});

export default AddRestaurantScreen;
