import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';

export default React.memo(function ImageScreen({
  children = null,
  source,
  onPress,
  style = {},
  activeOpacity = 0.8,
  ...props
}) {
  return (
    <ImageBackground
      style={{
        width: '100%',
      }}
      imageStyle={{borderRadius: 12}}
      source={source}>
      <TouchableOpacity
        style={[{padding: 20}, style]}
        onPress={() => {
          if (onPress) onPress();
        }}
        activeOpacity={activeOpacity}
        {...props}>
        {children}
      </TouchableOpacity>
    </ImageBackground>
  );
});
