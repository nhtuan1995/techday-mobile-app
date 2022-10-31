import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import MainNavigation from '../Navigation/MainNavigation';
import { setNavigator } from '../Services/NavigationService';

function RootContainer(props) {

  return (
    <NavigationContainer
      ref={ref => {
        setNavigator(ref);
      }}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#fff',
        },
      }}
    >
      <MainNavigation />
    </NavigationContainer>
  );
};

export default RootContainer;