import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
const Loading = () => {
  return (
    <View style={{flex: 1, marginTop: 50, alignItems: 'center'}}>
      <ActivityIndicator size={'large'} color={'blue'} />
      <Text style={{marginTop: 20}}>Loading</Text>
    </View>
  );
};

export default Loading;
