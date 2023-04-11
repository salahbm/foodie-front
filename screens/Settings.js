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
const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
  {id: '6', title: 'Item 6'},
  {id: '7', title: 'Item 7'},
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Settings = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <View
        style={{
          height: Platform.OS === 'ios' ? (height >= 700 ? 35 : 10) : 0,
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
          btnName={'Delete Existing Restaurant'}
          onPress={() => navigation.navigate('DeleteRestaurantScreen')}
        />
        <MoreScreenBtn
          btnName={'Update Restaurant Data'}
          onPress={() => navigation.navigate('DeleteRestaurantScreen')}
        />
        <MoreScreenBtn btnName={'FAQ'} />
        <MoreScreenBtn btnName={'Help Center'} />
        <MoreScreenBtn btnName={'Terms and Conditions'} />
        <MoreScreenBtn btnName={'Withdraw My Account'} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
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
