import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function Laucher(props) {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Checking login and redirect to Home or Login</Text>
      <TouchableOpacity
        style={{ marginTop: 24 }}
        onPress={() => props.navigation.navigate('Main')}
      >
        <Text>Go home</Text>
      </TouchableOpacity>
    </View>
  )
}