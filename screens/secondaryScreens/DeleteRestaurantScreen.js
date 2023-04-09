import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
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
      <Text style={styles.text}>Delete Restaurant:</Text>

      <Text style={styles.text}>Restaurant Name:</Text>
      <TextInput
        label={'Name'}
        value={restaurants.name}
        onChangeText={value => handleChange('name', value)}
      />

      <Text style={styles.text}>Business Number:</Text>

      <TextInput
        label="Business Number"
        value={restaurants.businessNum}
        onChangeText={value => handleChange('businessNum', value)}
      />

      <Button
        style={{marginTop: 40, width: 200, alignSelf: 'center'}}
        icon="food"
        mode="contained"
        onPress={deleteRestaurant}>
        Press me
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: '600',
  },
});

export default DeleteRestaurantScreen;
