import React, { useState } from 'react';
import { HStack, Center } from 'native-base';
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text, StatusBar } from 'react-native';

import { Colors, Fonts } from '../Themes';
import RenderSvg from '../Components/Svg/Render';
import { goBack as navGoBack } from '../Services/NavigationService';

function SectionHeader({
  title = null, // text
  titleContent = null, // ReactNode
  titleType = 'center',
  leftContent = null,
  rightContent = null,
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
  noBorder = true,
  goBack,
  ...props
}) {

  const MIN_HEIGHT = 44;
  const [headerHeight, setHeaderHeight] = useState(MIN_HEIGHT);

  return (
    <>
      <SafeAreaView androidStatusBarColor={bgColor} style={{ backgroundColor: bgColor }} />
      <StatusBar translucent={bgColor === 'transparent'} backgroundColor={bgColor} barStyle={barStyle} />
      <HStack
        style={[
          styles.header,
          { height: headerHeight, backgroundColor: bgColor },
          noBorder && { borderBottomWidth: 0 },
          headerStyle,
        ]}
        {...props}
      >
        <View style={[styles.leftHeader, leftStyle]}>
          {arrowBack && (
            <TouchableOpacity
              onPress={() => {
                if (goBack) {
                  return goBack();
                }
                navGoBack();
              }}
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
            <Text style={[styles.title, titleStyle]} numberOfLines={1}>{title}</Text>
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
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
    zIndex: 1000,
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 44,
  },
  leftHeader: {
    minWidth: 50,
  },
  rightHeader: {
    minWidth: 50,
  },
  title: {
    fontSize: 18,
    color: Colors.title,
    ...Fonts.weight.semiBold,
  },
});