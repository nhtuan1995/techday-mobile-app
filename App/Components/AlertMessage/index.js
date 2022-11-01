import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Fonts, Metrics } from 'Themes';
import RenderSvg from '../Svg/Render';

export default function AlertMessage({
  type = 'success', // success | error | warning | info
  message,
  onPress,
  style,
  messageStyle,
}) {
  const getBgColors = () => {
    switch (type) {
      case 'success':
        return ['#16B14B', '#11C74F'];
      case 'info':
        return ['#2563EB', '#135DFF'];
      case 'warning':
        return ['#F57E25', '#FF8A00'];
      case 'error':
        return ['#DC2626', '#F31616'];
      default:
        return [];
    }
  }

  const getIconName = () => {
    switch (type) {
      case 'success':
        return 'tickCircle';
      case 'info':
        return 'infoCircle';
      case 'warning':
        return 'alert';
      case 'error':
        return 'closeCircle';
      default:
        return null;
    }
  }

  return (
    <LinearGradient colors={getBgColors()} style={[styles.messBox, style]}>
      <TouchableOpacity
        onPress={() => {
          if (onPress) onPress();
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: 44,
        }}
      >
        <RenderSvg iconName={getIconName()} size={24} style={{ marginRight: 8 }} />
        <View style={{ flex: 1 }}>
          {typeof message === 'string' ? (
            <Text style={[styles.mess, messageStyle]}>{message}</Text>
          ) : (
            message
          )}
        </View>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  messBox: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: Metrics.screenWidth - 24 * 2,
  },
  mess: {
    fontSize: 16,
    color: '#fff',
    ...Fonts.weight.medium,
  },
});