import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const Foods = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 50,
          backgroundColor: '#055DF8',
        }}
      />
      <Text> Foodie</Text>
    </View>
  );
};

export default Foods;
