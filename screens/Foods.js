import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {addition, subtraction} from '../store/action';
const {width, height} = Dimensions.get('window');
import {ContexData} from '../constants/useContext';
import {chinese} from '../assests';
const Foods = ({navigation}) => {
  const {data} = useContext(ContexData);
  useEffect(() => {
    // Fetch the data from your database
    // Set the data state variable using setRestaurants
  }, []);

  const groupedRestaurants = data.reduce((acc, restaurant) => {
    if (!acc[restaurant.type1]) {
      acc[restaurant.type1] = [];
    }
    acc[restaurant.type1].push(restaurant);
    return acc;
  }, {});
  return (
    <SafeAreaView>
      <Text style={styles.header}>Categories</Text>

      <TypeGrid
        groupedRestaurants={groupedRestaurants}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
const TypeGrid = ({groupedRestaurants, navigation}) => {
  return (
    <>
      {Object.keys(groupedRestaurants).map(type1 => (
        <View key={type1}>
          <TouchableOpacity
            key={type1}
            onPress={() =>
              navigation.navigate('FoodTypeScreen', {
                group: groupedRestaurants,
                type1: type1,
              })
            }>
            <Image source={chinese} style={styles.img} />
            <Text>{type1}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default Foods;
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: '#055DF8',
    fontWeight: 700,
    alignSelf: 'center',
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
});
