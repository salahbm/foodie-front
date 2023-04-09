import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
          height: Platform.OS === 'ios' ? (height >= 700 ? 40 : 20) : 10,
          backgroundColor: '#055DF8',
        }}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Button
          icon="plus"
          mode="contained-tonal"
          onPress={() => navigation.navigate('AddRestaurantScreen')}
          style={styles.btn}>
          Add Restaurant
        </Button>
        <Button
          icon="delete"
          mode="contained-tonal"
          onPress={() => navigation.navigate('DeleteRestaurantScreen')}
          style={styles.btn1}>
          Delete Restaurant
        </Button>
      </View>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
