import React, {useState} from 'react';
import {Text, Button} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {COLORS} from '../constants/theme';

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: Platform.OS === 'ios' ? (height >= 800 ? 50 : 10) : 0,
          backgroundColor: '#055DF8',
        }}
      />

      <Text variant="headlineSmall" style={{fontWeight: '700', padding: 20}}>
        Your Account Information
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <MoreScreenBtn
          btnName={'Add New Restaurant'}
          onPress={() => navigation.navigate('AddRestaurantScreen')}
        />

        <MoreScreenBtn
          btnName={'Update Restaurant Data'}
          onPress={() => navigation.navigate('DeleteRestaurantScreen')}
        />
        <MoreScreenBtn btnName={'FAQ'} />
        <MoreScreenBtn btnName={'Help Center'} />
        <MoreScreenBtn btnName={'Terms and Conditions'} />
        <MoreScreenBtn
          btnName={'Delete Existing Restaurant'}
          onPress={() => navigation.navigate('DeleteRestaurantScreen')}
        />
        <MoreScreenBtn btnName={'Withdraw My Account'} />
      </View>
    </View>
  );
};

const MoreScreenBtn = ({onPress, btnName}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <View
        style={{
          width: width * 0.9,
          height: 56,

          backgroundColor: '#FFFF',
          borderRadius: 16,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 16,
              color: '#313131',
              marginLeft: 19,
            }}>
            {btnName}
          </Text>

          <Entypo name="chevron-right" size={20} color="#CBCCD4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0f2',
  },
  item: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    height: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  btn: {
    width: 200,
    backgroundColor: 'green',
  },
  btn1: {
    width: 200,
    backgroundColor: 'red',
  },
});

export default Settings;
