import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
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
          // borderTopRightRadius: 20,
          // borderTopLeftRadius: 20,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
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
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <MaterialCommunityIcons
                name="account"
                color={focused ? '#333' : '#FFFF'}
                size={22}
              />
              <Text style={{color: focused ? '#333' : '#FFFF', marginTop: 2}}>
                Account
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
