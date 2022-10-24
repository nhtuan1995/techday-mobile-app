import React, { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';

import Home from '../Containers/Home';
import Agenda from '../Containers/Agenda';
import QR from '../Containers/QR';
import Conference from '../Containers/Conference';
import Exhibition from '../Containers/Exhibition';
import RenderSvg from '../Components/Svg/Render';
import { Colors } from '../Themes';
import { getCurrentRoute } from '../Services/NavigationService';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const hasNotch = DeviceInfo.hasNotch();

  const routes = {
    Home: {
      icon: 'iconHome',
      component: Home,
    },
    Agenda: {
      icon: 'iconCalendar',
      component: Agenda,
    },
    QR: {
      icon: 'iconQR',
      component: QR,
      options: { tabBarLabel: () => null },
    },
    Conference: {
      icon: 'iconHandShake',
      component: Conference,
    },
    Exhibition: {
      icon: 'iconUserView',
      component: Exhibition,
    },
  };

  const renderIcon = (routeName, focused, color, size) => {
    let iconName = routes[routeName]?.icon;
    if (!iconName) {
      return null;
    }
    color = focused ? Colors.active : Colors.inactive;
    let iconStyle = {};
    if (routeName === 'QR') {
      size = hasNotch ? 78 : 68;
      iconStyle = { marginTop: hasNotch ? 8 : 5 };
      color = Colors.active;
    }
    return <RenderSvg iconName={iconName} color={color} width={size} height={size} style={iconStyle} />
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const initScale = 0.99;
  const scale = useRef(new Animated.Value(initScale)).current;
  const duration = 100;

  const fadeIn = useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scale]);

  const fadeOut = useCallback(
    navigate => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: initScale,
          duration,
          useNativeDriver: true,
        }),
      ]).start(({finished}) => {
        if (finished) {
          navigate();
        }
      });
    },
    [fadeAnim, scale],
  );

  const listeners = ({ navigation, route }) => ({
    tabPress: e => {
      e.preventDefault();
      let currentRoute = getCurrentRoute(navigation.getState());
      if (currentRoute && currentRoute.name === route.name) {
        return;
      }
      fadeOut(() => navigation.navigate(route.name));
    },
    focus: e => {
      fadeIn();
    },
  });

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return renderIcon(route.name, focused, color, size);
        },
        tabBarIconStyle: { top: hasNotch ? 6 : 0 },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          bottom: hasNotch ? 0 : 10,
        },
        tabBarStyle: {
          height: hasNotch ? 90 : 55,
          borderTopWidth: 1,
          borderTopColor: Colors.border,
        },
        tabBarActiveTintColor: Colors.active,
      })}
    >
      {Object.keys(routes).map(routeName => {
        let RouteComponent = routes[routeName].component;
        return (
          <Tab.Screen
            key={routeName}
            name={routeName}
            options={routes[routeName].options || {}}
            listeners={listeners}
          >
            {props => <RouteComponent {...props} animatedProps={{ fadeAnim, scale }} />}
          </Tab.Screen>
        )
      })}
    </Tab.Navigator>
  )
}

export default BottomNavigation;