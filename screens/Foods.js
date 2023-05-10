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
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {ContexData} from '../constants/useContext';
import {chinese, asian, western, korean} from '../assests';
import {COLORS} from '../constants/theme';
const Foods = ({navigation}) => {
  const {data} = useContext(ContexData);
  const foodPhotos = {chinese, asian, western, korean};
  const groupedRestaurants = data.reduce((acc, restaurant) => {
    if (!acc[restaurant.type1]) {
      acc[restaurant.type1] = [];
    }
    acc[restaurant.type1].push(restaurant);
    return acc;
  }, {});
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.header}>Categories</Text>
      <TypeGrid
        groupedRestaurants={groupedRestaurants}
        navigation={navigation}
        foodPhotos={foodPhotos}
      />
    </SafeAreaView>
  );
};
const TypeGrid = ({groupedRestaurants, navigation, foodPhotos}) => {
  return (
    <>
      <FlatList
        data={Object.keys(groupedRestaurants)}
        numColumns={2}
        renderItem={({item}) => (
          <View key={item} style={styles.typeContainer}>
            <TouchableOpacity
              key={item}
              style={{alignItems: 'center'}}
              onPress={() =>
                navigation.navigate('FoodTypeScreen', {
                  group: groupedRestaurants,
                  type1: item,
                })
              }>
              <Image
                resizeMode="cover"
                source={foodPhotos[item.toLowerCase()]}
                style={styles.img}
              />

              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </>
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
  img: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },

  typeContainer: {
    margin: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    paddingVertical: 4,
    letterSpacing: 0.5,
  },
});
