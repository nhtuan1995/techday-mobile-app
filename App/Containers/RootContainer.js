import React, { useRef } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import MainNavigation from '../Navigation/MainNavigation';

function RootContainer(props) {
  const _navigator = useRef();

  return (
    <NavigationContainer
      ref={_navigator}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          // background: 'transparent',
        },
      }}
    >
      <MainNavigation />
    </NavigationContainer>
  );
};

export default RootContainer;