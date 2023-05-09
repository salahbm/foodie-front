import {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Home from '../Home';
import RestaurantScreen from './RestaurantScreen';
const Stack = createNativeStackNavigator();
const HomeStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const tabHiddenRoutes = ['RestaurantScreen'];

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
