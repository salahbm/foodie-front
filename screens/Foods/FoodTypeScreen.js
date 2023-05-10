import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useContext, useRef} from 'react';
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
import Entypo from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');
import {COLORS} from '../../constants/theme';
import {map} from '../../assests';
const FoodTypeScreen = ({navigation}) => {
  const route = useRoute();
  const group = route.params?.group;
  const type1 = route.params?.type1;
  const RenderRestaurants = () => {
    return (
      <>
        <FlatList
          data={group[type1].map(restaurant => ({
            key: restaurant.id,
            ...restaurant,
          }))}
          numColumns={2}
          contentContainerStyle={{
            alignSelf: 'center',
            marginTop: 10,
          }}
          renderItem={({item: {id, name}}) => (
            <View key={id}>
              <TouchableOpacity
                style={styles.typeContainer}
                onPress={() =>
                  navigation.navigate('HomeStack', {
                    screen: 'RestaurantScreen',
                    params: {
                      restaurant: {id, name},
                    },
                  })
                }>
                <Image source={map} style={styles.img} />
                <Text style={styles.text} key={id}>
                  {name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </>
    );
  };
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 24,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flex: 0.5}}>
          <Entypo name="chevron-left" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.header}>{type1}</Text>
      </View>

      <RenderRestaurants />
    </SafeAreaView>
  );
};

export default FoodTypeScreen;
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
    paddingHorizontal: 20,
    alignItems: 'center',
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
