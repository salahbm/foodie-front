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
import {Button} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo';

const AddRestaurantScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState({
    name: '',
    type: '',
    businessNum: '',
    photo1: null,
    photo2: null,
    photo3: null,
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
  console.log(restaurants);
  const saveRestaurant = async () => {
    try {
      await axios.post('http://127.0.0.1:8082/data', restaurants);
    } catch (err) {
      console.log('Error sending to Backend: ' + err);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flex: 0.5}}>
          <Entypo name="chevron-left" size={30} color="#333" />
        </TouchableOpacity>

        <Text style={styles.textHeader}>Add Restaurant:</Text>
      </View>
      <Text style={styles.text}>Restaurant Name:</Text>
      <TextInput
        placeholder={'Enter Restaurant Name'}
        style={styles.input}
        placeholderTextColor={'#4545'}
        value={restaurants.name}
        onChangeText={value => handleChange('name', value)}
      />

      <Text style={styles.text}>Food Type:</Text>

      <TextInput
        placeholder="Enter Restaurant Type"
        placeholderTextColor={'#4545'}
        style={styles.input}
        value={restaurants.type}
        onChangeText={value => handleChange('type', value)}
      />
      <Text style={styles.text}>Business Number:</Text>

      <TextInput
        placeholder="Enter Restaurant Business Number"
        placeholderTextColor={'#4545'}
        value={restaurants.businessNum}
        onChangeText={value => handleChange('businessNum', value)}
        style={styles.input}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height: 300, marginTop: 20}}>
        <View style={{}}>
          {restaurants.photo1 && (
            <Image
              source={{uri: restaurants.photo1}}
              style={{width: 150, height: 150, marginBottom: 10}}
              resizeMode="cover"
            />
          )}
          <Button
            icon="camera"
            mode="contained"
            onPress={() => handleChoosePic(1)}>
            Pic 1
          </Button>
        </View>
        <View style={{marginLeft: 10}}>
          {restaurants.photo2 && (
            <Image
              resizeMode="cover"
              source={{uri: restaurants.photo2}}
              style={{width: 150, height: 150, marginBottom: 10}}
            />
          )}
          <Button
            icon="camera"
            mode="contained"
            onPress={() => handleChoosePic(2)}>
            Pic 2
          </Button>
        </View>
        <View style={{marginLeft: 10}}>
          {restaurants.photo3 && (
            <Image
              resizeMode="cover"
              source={{uri: restaurants.photo3}}
              style={{
                width: 150,
                height: 150,
                marginBottom: 10,
              }}
            />
          )}
          <Button
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
          bottom: 30,
          backgroundColor: 'green',
        }}
        icon="food"
        mode="contained"
        onPress={saveRestaurant}>
        Save Restaurant
      </Button>
    </View>
  );
};
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0f2',
    marginTop: Platform.OS === 'ios' ? (height >= 700 ? 35 : 10) : 0,
    paddingHorizontal: 20,
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
});

export default AddRestaurantScreen;
