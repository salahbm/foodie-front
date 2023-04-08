import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
const Loading = () => {
  return (
    <View style={{flex: 1, top: 300}}>
      <ActivityIndicator size={'large'} color={'blue'}></ActivityIndicator>
      <Text>234545923y49782</Text>
    </View>
  );
};

export default Loading;
