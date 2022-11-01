import React from 'react';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import RootContainer from './RootContainer';

import { Provider } from 'react-redux'
// import { store } from 'redux/store'
import {store} from '../redux/store'

function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </NativeBaseProvider>
  )
}

export default App;
