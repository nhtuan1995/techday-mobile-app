import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import RenderSvg from '../Svg/Render';
import { Styles } from '../../Themes';
const IconBox = ({
  iconName = null,
  width = 24,
  height = 24,
  onPress,
  nullElement = null,
  style = {},
  label = null,
}) => {
  if (!iconName) return nullElement;
  return (
    <TouchableOpacity
      style={myStyles.box}
      onPress={() => {
        if (onPress) onPress();
      }}>
      <View style={[myStyles.card, style]}>
        <RenderSvg
          color="#213992"
          iconName={iconName}
          width={width}
          height={height}
        />
      </View>
      {label && <Text style={myStyles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const myStyles = StyleSheet.create({
  box: {
    width: 54,
    flexShrink: 1,
  },
  card: {
    ...Styles.rowCenter,
    width: 54,
    height: 54,
    backgroundColor: '#fff',
    shadowColor: 'rgba(33, 57, 146, 0.1)',
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: 12,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    color: '#667085',
    textAlign: 'center',
  },
});

export default React.memo(IconBox);
