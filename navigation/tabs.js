import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/Home/HomeStack';
import SettingsStack from '../screens/Settings/SettingsStack';
import Foods from '../screens/Foods';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, StyleSheet} from 'react-native';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#055DF8',
        },
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <FontAwesome5
                name="home"
                color={focused ? '#333' : '#FFFF'}
                size={20}
              />
              <Text style={{color: focused ? '#333' : '#FFFF', marginTop: 2}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Foods"
        component={Foods}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <Ionicons
                name="restaurant"
                color={focused ? '#333' : '#FFFF'}
                size={20}
              />
              <Text style={{color: focused ? '#333' : '#FFFF', marginTop: 2}}>
                Foods
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <MaterialCommunityIcons
                name="account"
                color={focused ? '#333' : '#FFFF'}
                size={22}
              />
              <Text style={{color: focused ? '#333' : '#FFFF', marginTop: 2}}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
