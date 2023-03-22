import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {map} from '../assests';
const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 50,
          backgroundColor: '#055DF8',
        }}
      />

      <Text style={styles.header}> Welcome Salah !</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={map}
          resizeMode="cover"
          style={{width: width * 0.9, borderRadius: 20, maxHeight: 330}}
        />
      </View>
      <Text style={styles.header}>Top Restaurants In This Area</Text>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <RestaurantListItem />
        <RestaurantListItem />
        <RestaurantListItem />
        <RestaurantListItem />
        <RestaurantListItem />
      </ScrollView>
    </View>
  );
};
const RestaurantListItem = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
      }}>
      <Image source={map} style={{width: 100, height: 100, borderRadius: 99}} />
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={styles.restaurant}> Restaurant Name</Text>
        <Text style={styles.foodtype}> Food Type </Text>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
    marginTop: 10,
    marginLeft: 20,
  },
  restaurant: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
    // textAlign: 'right',
  },
  foodtype: {
    fontSize: 15,
    fontWeight: 700,
    color: '#333',
  },
});
