import React, {useMemo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Header from '../Components/Header';
import RenderImage from '../Components/RenderImage';
import RenderSvg from '../Components/Svg/Render';
// components
import Banner from '../Components/Banner';
import {CardAction, IconBox, CardActivity} from '../Components/Card';
import Content from '../Components/Content';
// common
import {arraySegment} from '../Common';
import {ScrollView} from 'native-base';
import {Fonts, Styles} from '../Themes';

function TuanSample({navigation}) {
  const handleSurvey = () => {
    navigation.navigate('Survey');
  };
  return (
    <>
      <Text>Tuan Sample Screen For UI Test</Text>

      <TouchableOpacity style={styles.button} onPress={handleSurvey}>
        <Text>Survey</Text>
      </TouchableOpacity>
    </>
  );
}

export default TuanSample;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'yellow', 
  },
});
