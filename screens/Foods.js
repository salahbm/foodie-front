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
  Dimensions,
} from 'react-native';
import {addition, subtraction} from '../store/action';
const {width, height} = Dimensions.get('window');

const Foods = () => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: '#ebf0f2'}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? (height >= 800 ? 50 : 10) : 0,
          backgroundColor: '#055DF8',
        }}
      />
      <Text style={styles.header}>Categories</Text>

      {/* <TouchableOpacity onPress={() => dispatch(addition())}>
        <Text> add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(subtraction())}>
        <Text> subtrack</Text>
      </TouchableOpacity>
      <Text> {data}</Text> */}
    </View>
  );
};

export default Foods;
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: '#055DF8',
    fontWeight: 700,
    alignSelf: 'center',
  },
});
