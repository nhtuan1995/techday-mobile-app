import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  SectionList,
  StyleSheet
} from 'react-native';
import { Fonts, Colors } from '../Themes';



import RenderSvg from '../Components/Svg/Render';


const OrangeArrowTitle = ({ title = "Đang cập nhật", style }) => {

  const myStyles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      position: 'relative',
      height: 24,
      ...style,
    },
    icon: {
      transform: [{ translateY: 2 }],
      position: 'absolute',
      left: -10,
      top: -10,
      backgroundColor: 'transparent'
    },
    title: {
      ...Fonts.weight.semiBold,
      fontSize: 18,
      lineHeight: 24,
      backgroundColor: 'transparent',
      color: Colors.text,
      position: 'absolute',
      left: 30,
      top: -1,
  
    }
  });

  return (
    <View style={myStyles.wrapper}>
      <RenderSvg iconName="iconArrowRightOrange" width={44} height={44} style={myStyles.icon} />
      <Text style={myStyles.title}>{title}</Text>
    </View>
  )
}



export default OrangeArrowTitle;