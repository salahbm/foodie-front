import React from 'react';
import {Provider} from 'react-redux';
import Tabs from './navigation/tabs';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store/store';
import {Provider as PaperProvider} from 'react-native-paper';
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          <Tabs />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
