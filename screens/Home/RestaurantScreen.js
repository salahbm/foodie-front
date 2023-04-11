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
import Entypo from 'react-native-vector-icons/Entypo';
import {useRoute} from '@react-navigation/native';
import {map} from '../../assests';
const RestaurantScreen = ({navigation}) => {
  const route = useRoute();
  const restaurant = route.params.restaurant;
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flex: 0.5}}>
          <Entypo name="chevron-left" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>{restaurant.name}</Text>
      </View>
      <View style={styles.restaurantInfo}>
        <Image source={map} style={styles.courusel} resizeMode="cover" />
      </View>
    </View>
  );
};

export default RestaurantScreen;
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0f2',
    marginTop: Platform.OS === 'ios' ? (height >= 700 ? 35 : 10) : 0,
    paddingHorizontal: 20,
  },
  textHeader: {
    textAlign: 'center',

    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  restaurantInfo: {
    flex: 0.4,
  },
  courusel: {
    maxHeight: 200,
    width: width * 0.9,
    borderRadius: 10,
  },
});
