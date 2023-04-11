import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useRoute} from '@react-navigation/native';
import {map} from '../../assests';
const RestaurantScreen = ({navigation}) => {
  const route = useRoute();
  const restaurant = route.params.restaurant;

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flex: 0.5}}>
          <Entypo name="chevron-left" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>{restaurant.name}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={map} style={styles.courusel} resizeMode="cover" />
        <RestaurantInfo />
      </ScrollView>
    </View>
  );
};

const RestaurantInfo = () => {
  return (
    <View style={{width: width * 0.9}}>
      <View style={styles.row}>
        <Text style={styles.text}>Address:</Text>
        <Text style={styles.text1} ellipsizeMode="middle" numberOfLines={1}>
          Suji-gu, Bongcheon-dong, Dankook University 23-1
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Phone:</Text>
        <Text style={styles.text1}>21847718</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Owner:</Text>
        <Text style={styles.text1}>Kim Soyoung</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderBottomColor: '#918f87',
          marginVertical: 10,
        }}
      />
      <Text style={styles.ownerNote}>
        {
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in '
        }
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderBottomColor: '#918f87',
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default RestaurantScreen;
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0f2',
    marginTop: Platform.OS === 'ios' ? (height >= 700 ? 35 : 20) : 0,
    paddingHorizontal: 20,
  },
  textHeader: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },

  courusel: {
    maxHeight: 200,
    width: width * 0.9,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
  text1: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'right',
    width: 200,
  },
  ownerNote: {
    fontWeight: '400',
    fontSize: 15,
  },
});
