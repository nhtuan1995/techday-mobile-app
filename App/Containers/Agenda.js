import React from 'react';
import { View, Text } from 'react-native';

import Header from '../Components/Header';
import AnimatedScreen from '../Components/AnimatedScreen';

import styles from '../Styles/common';

function Agenda({ animatedProps }) {
  return (
    <AnimatedScreen style={{ flex: 1 }} {...animatedProps}>
      <Header
        title={'Agenda'}
        arrowBack={false}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.screenTitle}>Agenda</Text>
      </View>
    </AnimatedScreen>
  )
}

export default Agenda;