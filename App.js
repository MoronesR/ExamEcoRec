import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { Provider } from 'react-redux';
import store  from './redux/store'
import Index from './src';

const App = () => {
  return (
    <Provider store={store}>
        <Index/>
    </Provider>
  );
};



export default App;
