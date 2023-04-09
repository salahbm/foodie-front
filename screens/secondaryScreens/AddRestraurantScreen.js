import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
const AddRestaurantScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState({
    name: '',
    type: '',
  });

  const handleChange = (name, value) => {
    setRestaurants({...restaurants, [name]: value});
  };

  const saveRestaurant = () => {
    // Do something with the updated restaurants state object here
    navigation.goBack();
  };
  console.log(restaurants);
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

      <Button title="Save" onPress={saveRestaurant} />
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
