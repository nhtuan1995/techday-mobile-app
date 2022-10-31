import React, { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';

import Home from '../Containers/Home';
import Agenda from '../Containers/Agenda';
import QR from '../Containers/QR';
import Conference from '../Containers/Conference';
import Exhibition from '../Containers/Exhibition/index';
import RenderSvg from '../Components/Svg/Render';
import { Colors, Fonts } from '../Themes';
import { getCurrentRoute } from '../Services/NavigationService';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const hasNotch = DeviceInfo.hasNotch();

  const routes = {
    Home: {
      icon: 'iconHome',
      component: Home,
      options: { title: 'Trang chủ' },
    },
    Agenda: {
      icon: 'iconCalendar',
      component: Agenda,
      options: { title: 'Lịch sự kiện' },
    },
    QR: {
      icon: 'iconQR',
      component: QR,
      options: { tabBarLabel: () => null },
    },
    Conference: {
      icon: 'icon3DSquare',
      component: Conference,
      options: { title: 'Triển lãm CN' },
    },
    Exhibition: {
      icon: 'iconUsers',
      component: Exhibition,
      options: { title: 'Diễn đàn CN' },
    },
  };

  const renderIcon = (routeName, focused, color, size) => {
    let iconName = routes[routeName]?.icon;
    if (!iconName) {
      return null;
    }
    size = 22;
    let iconStyle = {};
    if (routeName === 'QR') {
      size = 68;
      iconStyle = { top: -8 };
      color = Colors.active;
    } else {
      if (focused) {
        iconName = iconName + 'Active';
      }
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
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: initScale,
          duration: 50,
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
        tabBarIconStyle: { top: hasNotch ? 2 : -2 },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          bottom: hasNotch ? 0 : 10,
          ...Fonts.weight.semiBold,
        },
        tabBarStyle: {
          height: hasNotch ? 80 : 55,
          borderTopWidth: 1,
          borderTopColor: '#EAEEFA',
          marginTop: -24,
          shadowColor: '#0b45c2',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 12,
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