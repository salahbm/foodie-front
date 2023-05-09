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

const {width, height} = Dimensions.get('window');

const FoodTypeScreen = ({nativgation}) => {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Food</Text>
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
