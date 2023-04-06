import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {map} from '../assests';
import {collection, onSnapshot} from 'firebase/firestore';
import {foodieDB} from '../src/config/firebase';
const {width, height} = Dimensions.get('window');
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [laoding, setLoading] = useState(false);
  try {
    useEffect(() => {
      setLoading(true);
      const restaurantQuery = collection(foodieDB, 'restaurant');
      onSnapshot(restaurantQuery, snapshot => {
        let restaurantList = [];
        snapshot.docs.map(doc =>
          restaurantList.push({...doc.data(), id: doc.id}),
        );
        setRestaurants(restaurantList);
        setLoading(false);
      });
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? (height >= 700 ? 40 : 20) : 10,
          backgroundColor: '#055DF8',
        }}
      />

      <View
        style={{
          justifyContent: 'center',

          flex: 0.9,
        }}>
        <Text style={styles.header}> Welcome Salah !</Text>
        <Image
          source={map}
          style={{
            width: width * 0.9,
            borderRadius: 15,
            maxHeight: height >= 700 ? 280 : 240,
            alignSelf: 'center',
          }}
        />
      </View>
      <Text style={styles.header2}>Top Restaurants In This Area</Text>

      {/* <ScrollView
        style={{flex: 1, width: '100%'}}
        showsVerticalScrollIndicator={false}> */}
      <FlatList
        data={restaurants}
        renderItem={RestaurantListItem}
        keyExtractor={item => item.id}
      />
      {/* </ScrollView> */}
    </View>
  );
};
const RestaurantListItem = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 10,
      }}>
      <Image source={map} style={{width: 80, height: 80, borderRadius: 15}} />
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={styles.restaurant}>{item.restaurantName} </Text>
        <Text style={styles.foodtype}>{item.foodtype} </Text>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
    marginTop: 10,
    marginLeft: 20,
  },
  header2: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
    marginVertical: 10,
    marginLeft: 20,
  },
  restaurant: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
  },
  foodtype: {
    fontSize: 15,
    fontWeight: 700,
    color: '#333',
  },
});
