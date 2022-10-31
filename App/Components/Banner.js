import React from 'react';
import {TouchableOpacity, Dimensions, StyleSheet, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import RenderImage from './RenderImage';
import RenderSvg from './Svg/Render';
import {Styles} from '../Themes';
const Banner = ({onPress, style = {}}) => {
  return (
    <TouchableOpacity
      style={[myStyles.bg, style]}
      onPress={() => {
        if (onPress) onPress();
      }}
      activeOpacity={0.8}>
      <RenderImage
        name="banner"
        style={{
          width: '100%',
          borderRadius: 12,
          height: (windowWidth - 24 * 2) / 2.04375,
        }}
        resizeMode="cover"
      />
      <View style={[Styles.botBtn, {backgroundColor: '#2A49BB'}]}>
        <RenderSvg iconName="arrowRight" width={16} height={16} color="#fff"/>
      </View>
    </TouchableOpacity>
  );
};

const myStyles = StyleSheet.create({
  bg: {
    position: 'relative',
  },
});

export default React.memo(Banner);
