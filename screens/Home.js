import React, {useContext, useEffect, useState} from 'react';
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
  SafeAreaView,
} from 'react-native';
import Loading from '../components/Loading';
import {map} from '../assests';
import {apiURL} from '../constants/apiURL';
import axios from 'axios';
import {COLORS} from '../constants/theme';
import {ContexData} from '../constants/useContext';
const {width, height} = Dimensions.get('window');
const Home = ({navigation}) => {
  const {data, loading} = useContext(ContexData);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ebf0f2'}}>
      <View
        style={{
          justifyContent: 'center',
          flex: 0.45,
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
          flex: 0.55,
          marginHorizontal: 20,
          marginTop: Platform.OS === 'android' ? (height >= 700 ? 20 : 0) : 0,
        }}>
        <Text style={styles.header2}>Top Restaurants In This Area</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => <FlatCategories item={item} />}
          keyExtractor={item => item.id}
          extraData={selectedId}
          style={{width: '100%', marginBottom: 10, marginTop: 5}}
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
    </SafeAreaView>
  );
};
const RestaurantListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      id={item.id}
      onPress={() =>
        navigation.navigate('RestaurantScreen', {restaurant: item})
      }
      style={styles.resContainer}>
      <Image
        source={map}
        resizeMode="cover"
        style={{width: 100, height: 100, borderRadius: 15}}
      />

      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={styles.restaurant}>{item.name} </Text>
        <View style={styles.row}>
          <Text style={styles.foodtype}>
            {item.type1}
            {'    '}{' '}
          </Text>
          <Text style={styles.foodtype}>{item.type2} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FlatCategories = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.type1}</Text>
    </TouchableOpacity>
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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',

    borderRadius: 5,
    marginHorizontal: 6,
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#FFFF',
  },
  title: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '700',
    lineHeight: 18,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
