import React, { useState } from 'react';
import { HStack, Center } from 'native-base';
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text, StatusBar } from 'react-native';

import { Colors, Fonts } from '../Themes';
import RenderSvg from '../Components/Svg/Render';

function SectionHeader({
  title = null, // text
  titleContent = null, // ReactNode
  titleType = 'center',
  leftContent = null,
  rightContent = null,
  hasBoder = false,
  arrowBack = true,
  iconBackName = 'iconChevronLeft',
  iconBackColor = Colors.text,
  iconBackWidth = 17,
  barStyle = 'default',
  transparent = false,
  bgColor = '#fff',
  headerStyle = {},
  titleStyle = {},
  leftStyle = {},
  rightStyle = {},
  goBack,
  ...props
}) {

  const MIN_HEIGHT = 44;
  const [headerHeight, setHeaderHeight] = useState(MIN_HEIGHT);

  return (
    <>
      <SafeAreaView androidStatusBarColor={bgColor} style={{ backgroundColor: bgColor }} />
      <StatusBar bg={bgColor} barStyle={barStyle} />
      <HStack
        style={[
          styles.header,
          { height: headerHeight },
          headerStyle,
          hasBoder ? styles.border : {}
        ]}
        {...props}
      >
        <View style={[styles.leftHeader, leftStyle]}>
          {arrowBack && (
            <TouchableOpacity
              onPress={goBack}
            >
              {iconBackName && (
                <RenderSvg iconName={iconBackName} color={iconBackColor} />
              )}
            </TouchableOpacity>
          )}

          {leftContent && (
            leftContent
          )}
        </View>

        <Center style={{ flex: 1 }}>
          {title && (
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          )}
          {titleContent && (
            titleContent
          )}
        </Center>

        <View style={[styles.rightHeader, rightStyle]}>
          {rightContent && (
            rightContent
          )}
        </View>
      </HStack>
    </>
  )

}

export default React.memo(SectionHeader);

const styles = StyleSheet.create({
  header: {
    borderBottomColor: Colors.border,
    zIndex: 1000,
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 50,
  },
  leftHeader: {
    minWidth: 50,
  },
  rightHeader: {
    minWidth: 50,
  },
  title: {
    fontSize: 17,
    color: Colors.text,
    ...Fonts.weight.medium,
  },
  border: {
    shadowColor: '#defcfc',
    shadowOffset: { width: 1, height: 1 },
    width: '100%',
    height: 44,
    shadowOpacity: 0.4,
    shadowRadius: 0,
    elevation: 4,
  }
});