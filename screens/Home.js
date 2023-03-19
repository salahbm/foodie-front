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
} from 'react-native';
import {map} from '../assests';
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
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Image source={map} resizeMode="contain" style={{width: '90%'}} />
      </View>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <Image
            source={map}
            style={{width: 100, height: 100, borderRadius: 99}}
          />
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            <Text style={styles.restaurant}> Restaurant Name</Text>
            <Text style={styles.foodtype}> Food Type </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
    marginTop: 20,
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
