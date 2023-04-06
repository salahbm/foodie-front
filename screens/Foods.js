import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';
import {addition, subtraction} from '../store/action';
const Foods = () => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? 50 : 10,
          backgroundColor: '#055DF8',
        }}
      />
      <TouchableOpacity onPress={() => dispatch(addition())}>
        <Text> add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(subtraction())}>
        <Text> subtrack</Text>
      </TouchableOpacity>
      <Text> {data}</Text>
    </View>
  );
};

export default Foods;
