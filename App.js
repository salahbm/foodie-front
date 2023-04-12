import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import Tabs from './navigation/tabs';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store/store';
import {Provider as PaperProvider} from 'react-native-paper';
import {ContexData} from './constants/useContext';
import axios from 'axios';
import {apiURL} from './constants/apiURL';
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    function getDatas() {
      axios
        .get(apiURL)
        .then(response => setData(response.data))
        .catch(error => {
          console.error('Error fetching data from server:', error);
        });
    }
    getDatas();
  }, []);
  console.log(data);
  return (
    <NavigationContainer>
      <ContexData.Provider value={data}>
        <Provider store={store}>
          <PaperProvider>
            <Tabs />
          </PaperProvider>
        </Provider>
      </ContexData.Provider>
    </NavigationContainer>
  );
};

export default App;
