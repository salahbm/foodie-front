import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const DeleteRestaurantScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState({
    name: '',
    businessNum: '',
  });

  const handleChange = (name, value) => {
    setRestaurants({...restaurants, [name]: value});
  };

  const deleteRestaurant = async () => {
    try {
      await axios.delete('http://127.0.0.1:8082/data', {data: restaurants});
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

        <Text style={styles.textHeader}>Delete Restaurant</Text>
      </View>

      <Text style={styles.text}>Restaurant Name:</Text>
      <TextInput
        placeholder={'Name'}
        value={restaurants.name}
        onChangeText={value => handleChange('name', value)}
        style={styles.input}
      />

      <Text style={styles.text}>Business Number:</Text>

      <TextInput
        placeholder="Enter Business Number"
        value={restaurants.businessNum}
        onChangeText={value => handleChange('businessNum', value)}
        style={styles.input}
      />
      <Text style={styles.text}>Phone Number:</Text>

      <TextInput
        placeholder="Enter Phone Number"
        keyboardType="numeric"
        value={restaurants.businessNum}
        onChangeText={value => handleChange('businessNum', value)}
        style={styles.input}
      />
      <Text style={styles.note}>
        Note! Deleting the restaurant information will cause permanently removal
        all data about current restaurant.
      </Text>

      <Button
        style={{
          marginTop: 40,
          width: width * 0.5,
          alignSelf: 'center',
          backgroundColor: '#f03316',
          bottom: 30,
          position: 'absolute',
        }}
        icon="delete"
        mode="contained"
        onPress={deleteRestaurant}>
        Delete Restaurant
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
    textAlign: 'left',
    marginVertical: 20,
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 5,
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
    backgroundColor: '#ebb2a9',
    borderRadius: 10,
  },
  note: {
    textAlign: 'left',
    marginVertical: 20,
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default DeleteRestaurantScreen;
