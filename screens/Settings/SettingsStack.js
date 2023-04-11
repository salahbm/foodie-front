import {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Settings from '../Settings';
import AddRestaurantScreen from './AddRestraurantScreen';
import DeleteRestaurantScreen from './DeleteRestaurantScreen';
const Stack = createNativeStackNavigator();
const SettingsStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const tabHiddenRoutes = ['AddRestaurantScreen', 'DeleteRestaurantScreen'];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {display: 'flex', backgroundColor: '#055DF8'},
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerMode: 'none', headerShown: false}}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="AddRestaurantScreen"
        component={AddRestaurantScreen}
      />
      <Stack.Screen
        name="DeleteRestaurantScreen"
        component={DeleteRestaurantScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
