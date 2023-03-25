import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {map} from '../assests';
const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <View style={{flex: 1}}>
      {Platform.OS === 'ios' && (
        <View
          style={{
            height: 50,
            backgroundColor: '#055DF8',
          }}
        />
      )}

      <View
        style={{
          justifyContent: 'center',

          flex: 0.9,
        }}>
        <Text style={styles.header}> Welcome Salah !</Text>
        <Image
          source={map}
          style={{
            width: width * 0.9,
            borderRadius: 15,
            maxHeight: 270,
            alignSelf: 'center',
          }}
        />
      </View>
      <Text style={styles.header}>Top Restaurants In This Area</Text>

      <ScrollView style={{flex: 1, width: '100%'}}>
        <RestaurantListItem />
        <RestaurantListItem />
        <RestaurantListItem />
        <RestaurantListItem />
        <RestaurantListItem />
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
        marginBottom: 10,
      }}>
      <Image source={map} style={{width: 80, height: 80, borderRadius: 15}} />
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
  },
  foodtype: {
    fontSize: 15,
    fontWeight: 700,
    color: '#333',
  },
});
