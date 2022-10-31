import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import {Fonts} from '../../Themes';

export default React.memo(
  ({
    title,
    desc,
    onPress,
    imgSource,
    style = {},
    imgStyle = {},
    leftContentStyle = {},
    rightContentStyle = {},
    titleTextStyle = {},
    descTextStyle = {},
  }) => {
    return (
      <TouchableOpacity
        style={[myStyles.card, style]}
        onPress={() => {
          if (onPress) onPress();
        }}>
        <View style={[myStyles.leftContent, leftContentStyle]}>
          {imgSource && <Image source={imgSource} style={imgStyle} />}
        </View>
        <View style={[myStyles.rightContent, rightContentStyle]}>
          <Text style={[myStyles.title, titleTextStyle]}>{title}</Text>
          {desc && <Text style={[myStyles.desc, descTextStyle]}>{desc}</Text>}
        </View>
      </TouchableOpacity>
    );
  },
);

const myStyles = StyleSheet.create({
  card: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 12,
    shadowColor: 'rgba(160, 186, 224, 0.3)',
    shadowOpacity: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftContent: {
    borderRadius: 50,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEEFA',
  },
  rightContent: {
    marginLeft: 12,
    flexShrink: 1,
  },
  title: {
    ...Fonts.weight.semiBold,
    color: '#213992',
    fontSize: 18,
  },
  desc: {
    ...Fonts.weight.medium,
    color: '#838895',
    fontSize: 14,
  },
});
