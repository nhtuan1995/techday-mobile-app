import React from 'react';
import { View, Text } from 'react-native';

import Header from '../Components/Header';
import AnimatedScreen from '../Components/AnimatedScreen';

import styles from '../Styles/common';

const Conference = ({ animatedProps }) => {
  return (
    <AnimatedScreen style={{ flex: 1 }} {...animatedProps} >
      <Header
        title={'Conference'}
        arrowBack={false}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.screenTitle}>Conference</Text>
      </View>
    </AnimatedScreen>
  )
}

export default Conference;