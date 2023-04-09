import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../Settings';
import AddRestaurantScreen from './AddRestraurantScreen';
import DeleteRestaurantScreen from './DeleteRestaurantScreen';
const Stack = createNativeStackNavigator();
const SettingsStack = ({navigation}) => {
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
