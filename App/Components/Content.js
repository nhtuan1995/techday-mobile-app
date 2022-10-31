import React from 'react';
import {View, ScrollView} from 'react-native';
import {Styles} from '../Themes';

const Content = ({children, bgColor = '#ffffff', style={}, onScroll}) => {
  return (
    <View style={[Styles.container, {backgroundColor: bgColor}, style]}>
      <ScrollView
        onScroll={(event) => {
          if(onScroll) onScroll(event);
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 24, backgroundColor: bgColor}}>
        {children}
      </ScrollView>
    </View>
  );
};

export default React.memo(Content);
