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
import {Provider, Modal, Portal, Button} from 'react-native-paper';
const RestaurantScreen = ({navigation}) => {
  const route = useRoute();
  const restaurant = route.params.restaurant;
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <Provider>
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
          <RestaurantInfo restaurant={restaurant} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              backgroundColor: '#669ffa',
              borderRadius: 10,
              marginTop: 20,
            }}>
            <Text style={styles.text}>Business Hours :</Text>

            <Button textColor="#FFFF" onPress={showModal}>
              Display
            </Button>
          </View>
          <BusinessHoursModal
            hideModal={hideModal}
            visible={visible}
            restaurant={restaurant}
          />
        </ScrollView>
      </View>
    </Provider>
  );
};

const RestaurantInfo = ({restaurant}) => {
  return (
    <View style={{width: width * 0.9}}>
      <View style={styles.row}>
        <Text style={styles.text}>Address:</Text>
        <Text
          style={[styles.text1, {width: 300}]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {restaurant.address}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Phone:</Text>
        <Text style={styles.text1}>{restaurant.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Business Number:</Text>
        <Text style={styles.text1}>{restaurant.businessNum}</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderBottomColor: '#918f87',
          marginVertical: 10,
        }}
      />
      <Text style={styles.ownerNote}>
        {restaurant.note ? restaurant.note : 'No Notes Yet'}
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

const HoursRow = ({day, openTime, closeTime}) => {
  return (
    <View style={styles.rowHours}>
      <Text style={styles.text}>{day}</Text>
      <View style={styles.row}>
        <Text style={[styles.text, {color: '#4cd936'}]}>{openTime}</Text>
        <Text style={[styles.text, {color: '#fa7366', flex: 0.5}]}>
          {closeTime}
        </Text>
      </View>
    </View>
  );
};

const BusinessHoursModal = ({restaurant, visible, hideModal}) => {
  const containerStyle = {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#FFFF',
    height: height / 3,
    borderRadius: 10,
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <HoursRow day="Day" openTime={'Open'} closeTime={'Finish'} />
        <HoursRow
          day="Monday"
          openTime={restaurant.monday_start}
          closeTime={restaurant.monday_end}
        />
        <HoursRow
          day="Tuesday"
          openTime={restaurant.tuesday_start}
          closeTime={restaurant.tuesday_end}
        />
        <HoursRow
          day="Wednesday"
          openTime={restaurant.wednesday_start}
          closeTime={restaurant.wednesday_end}
        />
        <HoursRow
          day="Thursday"
          openTime={restaurant.thursday_start}
          closeTime={restaurant.thursday_end}
        />
        <HoursRow
          day="Friday"
          openTime={restaurant.friday_start}
          closeTime={restaurant.friday_end}
        />
        <HoursRow
          day="Saturday"
          openTime={restaurant.saturday_start}
          closeTime={restaurant.saturday_end}
        />
        <HoursRow
          day="Sunday"
          openTime={restaurant.sunday_start}
          closeTime={restaurant.sunday_end}
        />
      </Modal>
    </Portal>
  );
};
export default RestaurantScreen;
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf0f2',
    marginTop: Platform.OS === 'ios' ? (height >= 700 ? 45 : 20) : 0,
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
  rowHours: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
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
    textAlign: 'center',
  },
});
