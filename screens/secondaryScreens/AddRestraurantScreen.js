import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
const AddRestaurantScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState({
    name: '',
    type: '',
  });

  const handleChange = (name, value) => {
    setRestaurants({...restaurants, [name]: value});
  };

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
      <Text style={styles.text}>Restaurant Name:</Text>
      <TextInput
        label={'Name'}
        value={restaurants.name}
        onChangeText={value => handleChange('name', value)}
      />

      <Text style={styles.text}>Food Type:</Text>

      <TextInput
        label="Type"
        value={restaurants.type}
        onChangeText={value => handleChange('type', value)}
      />

      <Button
        style={{marginTop: 40, width: 200, alignSelf: 'center'}}
        icon="food"
        mode="contained"
        onPress={saveRestaurant}>
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

export default AddRestaurantScreen;
