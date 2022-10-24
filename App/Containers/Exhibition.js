import React from 'react';
import { View, Text } from 'react-native';

import Header from '../Components/Header';
import AnimatedScreen from '../Components/AnimatedScreen';

import styles from '../Styles/common';

const Exhibition = ({ animatedProps }) => {
  return (
    <AnimatedScreen style={{ flex: 1 }} {...animatedProps}>
      <Header
        title={'Exhibition'}
        arrowBack={false}
      />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.screenTitle}>Exhibition</Text>
      </View>
    </AnimatedScreen>
  )
}

export default Exhibition;