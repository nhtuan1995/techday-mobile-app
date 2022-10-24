import React from 'react';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';

import RootContainer from './RootContainer';

function App() {
  return (
    <NativeBaseProvider>
      <RootContainer />
    </NativeBaseProvider>
  )
}

export default App;
