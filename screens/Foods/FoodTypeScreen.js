import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useContext, useRef} from 'react';
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
import Entypo from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');

const FoodTypeScreen = ({navigation}) => {
  const route = useRoute();
  const group = route.params?.group;
  const type1 = route.params?.type1;
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flex: 0.5}}>
          <Entypo name="chevron-left" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.header}>{type1}</Text>
      </View>
      {group[type1].map(restaurant => (
        <TouchableOpacity
          key={restaurant.id}
          onPress={() =>
            navigation.navigate('HomeStack', {
              screen: 'RestaurantScreen',
              params: {
                restaurant: restaurant,
              },
            })
          }>
          <Image source={restaurant.image} style={styles.img} />
          <Text key={restaurant.id}>{restaurant.name}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default FoodTypeScreen;
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: '#055DF8',
    fontWeight: 700,
    alignSelf: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
});
