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
const Settings = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? 50 : 10,
          backgroundColor: '#055DF8',
        }}
      />
      <Text>DKU Home</Text>
    </View>
  );
};

export default Settings;
