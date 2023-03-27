import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import Tabs from './navigation/tabs';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store/store';
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Tabs />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
