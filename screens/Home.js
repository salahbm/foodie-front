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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function getData() {
      setLoading(true);
      axios
        .get(apiURL)
        .then(response => setData(response.data))
        .catch(error => {
          console.error('Error fetching data from server:', error);
        });
    }
    getData();
    setLoading(false);
  }, []);

  if (loading) {
    <Loading />;
  }

  return (
    <View style={{flex: 1, backgroundColor: '#ebf0f2'}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? (height >= 700 ? 35 : 10) : 0,
          backgroundColor: '#055DF8',
        }}
      />

      <View
        style={{
          justifyContent: 'center',

          flex: 0.75,
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
        style={{flex: 1, width: '100%', paddingTop: 5}}
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
        backgroundColor: '#FFFF',
      }}>
      <Image
        source={map}
        resizeMode="cover"
        style={{width: 100, height: 100, borderRadius: 15}}
      />

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
    marginTop: Platform.OS === 'ios' ? 5 : 20,
    marginLeft: 20,
    marginBottom: 10,
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
