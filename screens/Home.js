import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  Platform,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Loading from '../components/Loading';
import {map} from '../assests';
import {apiURL} from '../constants/apiURL';
import axios from 'axios';
const {width, height} = Dimensions.get('window');
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const dummy = [
    {
      id: '1',
      name: 'Maratang',
      type: 'Chinese',
    },
    {
      id: '2',
      name: 'MomsTouch',
      type: 'FastFood',
    },
    {
      id: '3',
      name: 'Udong',
      type: 'Jaoanese',
    },
    {
      id: '4',
      name: 'Kimpab',
      type: 'Korean',
    },
  ];

  useEffect(() => {
    function getData() {
      setLoading(true);
      setRestaurants(dummy);
    }
    getData();
    setLoading(false);
  }, []);

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => setData(response.data))
      .catch(error => {
        console.error('Error fetching data from server:', error);
      });
  }, []);

  if (loading) {
    <Loading />;
  }

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? (height >= 700 ? 40 : 0) : 0,
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

      <FlatList
        style={{flex: 1, width: '100%'}}
        data={data}
        renderItem={RestaurantListItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        vertical={true}
      />
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

      <TouchableOpacity
        id={item.id}
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={styles.restaurant}>{item.name} </Text>
        <Text style={styles.foodtype}>{item.type} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
    marginTop: Platform.OS === 'ios' ? 10 : 20,
    marginLeft: 20,
  },
  header2: {
    fontSize: 20,
    fontWeight: 700,
    color: '#333',
    marginTop: 20,
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
