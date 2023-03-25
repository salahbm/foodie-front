import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  View,
} from 'react-native';
const Foods = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? 50 : 10,
          backgroundColor: '#055DF8',
        }}
      />
      <Text> Foodie</Text>
    </View>
  );
};

export default Foods;
