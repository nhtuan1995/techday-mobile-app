import React, { useState, useEffect } from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import { View, Text } from 'react-native';

export default function ImageUri({
  uri,
  width,
  showDefault = true,
  style = {},
  textStyle = {},
  alt = 'No image',
  ...props
}) {
  const [error, setError] = useState(null);

  if (!uri || error) {
    return (
      <View style={[{
        width: '100%',
        height: 225,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
      }, style]}>
        <Text style={[{ color: '#253645' }, textStyle]}>{alt}</Text>
      </View>
    )
  }

  return (
    <AutoHeightImage
      source={{ uri }}
      width={width}
      onError={(err) => {
        console.log('loading image error', err);
        setError(err);
      }}
      style={style}
      {...props}
    />
  )
}