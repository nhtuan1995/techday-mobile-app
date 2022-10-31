import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import RenderSvg from '../Svg/Render';
import {Fonts} from '../../Themes';

export default React.memo(function CardGradient({
  onPress,
  style = {},
  boxStyle = {},
  activeOpacity = 0.8,
  colors = ['#E4EFFF50', '#FFFFFF'],
  locations = [0, 0.7],
  iconName = null,
  label = null,
  shadowColor = 'rgba(160, 186, 224, 0.3)',
  borderColor = '#EAEEFA',
  iconColor = '#213992',
  iconWidth = 44,
  iconHeight = 44,
  start = {x: 1, y: 0},
  end = {x: 1, y: 1},
  isOutside = false,
  labelStyle = {},
}) {
  return (
    <View style={[myStyles.container, style]}>
      <TouchableOpacity
        style={{
          shadowColor,
          borderColor,
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowRadius: 12,
          shadowOpacity: 1,
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 12,
        }}
        onPress={() => {
          if (onPress) onPress();
        }}
        activeOpacity={activeOpacity}>
        <LinearGradient
          style={[myStyles.box, boxStyle]}
          colors={colors}
          locations={locations}
          start={start}
          end={end}>
          <RenderSvg
            color={iconColor}
            iconName={iconName}
            width={iconWidth}
            height={iconHeight}
          />
          {label && !isOutside && <Text style={myStyles.label}>{label}</Text>}
        </LinearGradient>
      </TouchableOpacity>
      {label && isOutside && (
        <Text style={[myStyles.label, labelStyle]}>{label}</Text>
      )}
    </View>
  );
});

const myStyles = StyleSheet.create({
  container: {
    flexShrink: 1,
    alignItems: 'center',
  },
  box: {
    flexShrink: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 12,
  },
  label: {
    ...Fonts.weight.medium,
    marginTop: 16,
    fontSize: 14,
    color: '#253645',
    textAlign: 'center',
  },
});
