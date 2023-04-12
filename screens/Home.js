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
import {COLORS} from '../constants/theme';
import {ContexData} from '../constants/useContext';
const {width, height} = Dimensions.get('window');
const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => <Item title={item.title} />;

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

  return (
    <View style={{flex: 1, backgroundColor: '#ebf0f2'}}>
      <View
        style={{
          height: Platform.OS === 'ios' ? (height >= 800 ? 50 : 10) : 0,
          backgroundColor: '#055DF8',
        }}
      />

      <View
        style={{
          justifyContent: 'center',

          flex: 0.4,
          marginVertical: 20,
        }}>
        <Text style={styles.header}> Welcome {'Username'} !</Text>
        <Image
          source={map}
          style={{
            width: width * 0.9,
            borderRadius: 10,
            maxHeight: height >= 700 ? 280 : 240,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 0.6,
          marginHorizontal: 20,
          marginTop: Platform.OS === 'android' ? (height >= 700 ? 20 : 0) : 0,
        }}>
        <Text style={styles.header2}>Top Restaurants In This Area</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          style={{width: '100%', paddingVertical: 10}}
        />
        {loading && <Loading />}
        <FlatList
          style={{width: '100%', paddingTop: 5}}
          data={data}
          renderItem={({item}) => (
            <RestaurantListItem navigation={navigation} item={item} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          vertical={true}
        />
      </View>
    </View>
  );
};
const RestaurantListItem = ({item, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
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
        onPress={() =>
          navigation.navigate('RestaurantScreen', {restaurant: item})
        }
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={styles.restaurant}>{item.name} </Text>
        <Text style={styles.foodtype}>{item.type1} </Text>
      </TouchableOpacity>
    </View>
  );
};

const DATA = [
  {id: '1', title: 'Korean'},
  {id: '2', title: 'Western'},
  {id: '3', title: 'Chinese'},
  {id: '4', title: 'Japanese'},
  {id: '5', title: 'Salad'},
  {id: '6', title: 'Seafood'},
  {id: '7', title: 'Juice'},
  {id: '8', title: 'Desert'},
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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
    fontWeight: '700',
    color: '#333',
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
  item: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginHorizontal: 5,
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
});
