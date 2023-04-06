import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const AddRestaurantScreen = ({navigation}) => {
  const [restaurantName, setRestaurantName] = useState('');
  const [foodTime, setFoodTime] = useState('');
  const [menuItem, setMenuItem] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const saveRestaurant = () => {
    // Save restaurant data to database
    // Navigate to second screen

    navigation.goBack();
  };

  return (
    <View>
      <Text>Restaurant Name:</Text>
      <TextInput value={restaurantName} onChangeText={setRestaurantName} />

      <Text>Food Time:</Text>
      <TextInput value={foodTime} onChangeText={setFoodTime} />

      <Text>Menu Item:</Text>
      <TextInput value={menuItem} onChangeText={setMenuItem} />

      <Text>Item Price:</Text>
      <TextInput value={itemPrice} onChangeText={setItemPrice} />

      <Button title="Save" onPress={saveRestaurant} />
    </View>
  );
};

export default AddRestaurantScreen;
