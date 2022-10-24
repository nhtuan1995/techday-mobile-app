import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './Routes';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {routes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  )
}

export default MainNavigation;