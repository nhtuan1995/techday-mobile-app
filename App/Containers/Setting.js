import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';

import Header from '../Components/Header';

function Setting(props) {
  return (
    <View>
      <Header
        title={'Setting'}
        goBack={() => props.navigation.goBack()}
      />
      <View>
        <Text>Setting</Text>
      </View>
    </View>
  )
}

export default Setting;