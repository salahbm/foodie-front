import {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Foods from '../Foods';
import FoodTypeScreen from './FoodTypeScreen';

const Stack = createNativeStackNavigator();
const FoodsSubStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const tabHiddenRoutes = ['FoodTypeScreen'];

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
      <Stack.Screen name="Foods" component={Foods} />
      <Stack.Screen name="FoodTypeScreen" component={FoodTypeScreen} />
    </Stack.Navigator>
  );
};

export default FoodsSubStack;
