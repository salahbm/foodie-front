import React, {useState} from 'react';

import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  View,
  FlatList,
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
      <Button
        title="account"
        onPress={() => navigation.navigate('AddRestaurantScreen')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
  },
});

export default Settings;
