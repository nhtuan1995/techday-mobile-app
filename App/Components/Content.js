import React from 'react';
import { View, ScrollView } from 'react-native';
import { Styles } from '../Themes';

const Content = ({ children = null }) => {
  return (
    <View style={Styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default React.memo(Content);
