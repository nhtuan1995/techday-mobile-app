import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { HStack } from 'native-base';

import RenderSvg from '../../Components/Svg/Render';
import RenderImage from '../../Components/RenderImage';
import BgGradientScreen from '../../Components/BgGradientScreen';
import OrangeArrowTitle from '../../Components/OrangeArrowTitle';
import GradientButton from '../../Components/LinearGradientButton';

import styles from '../../Styles/TreasureStyles';

const QRButton = ({ onPress }) => {
  return (
    <GradientButton onPress={onPress} height={56} containerStyle={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
      <RenderSvg iconName="IconQRCode" style={{ marginRight: 8 }} />
      <Text style={styles.buttonText}>Quét mã QR</Text>
    </GradientButton>
  )
}

const AchieveButton = ({ onPress  }) => {
  return (
    <TouchableOpacity style={styles.achieveButton} onPress={onPress}>
      <RenderSvg iconName="Trophy" />
    </TouchableOpacity>
  )
}

const Introduction = ({ animatedProps, navigation }) => {

  const handleScan = () => {
    alert('Scan QR')
  }

  const handleAchievement = () =>{
    navigation.navigate('TreasureHuntAchievement')
  }

  return (
    <ScrollView>
      <BgGradientScreen hasHeader={false} >
        <View style={styles.treasureHeader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.circleRound, { marginBottom: 32 }]}
          >
            <RenderSvg iconName="iconChevronLeft" color="#22313F" width={22} style={{ marginLeft: -2 }} />
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <RenderImage
              name="treasureHeader"
              resizeMode='cover'
              style={styles.headerBackground} />
          </View>

          <View style={styles.headerLeft}>
            <Text style={[styles.textNormal, { marginBottom: 8 }]}>Mini Game</Text>
            <Text style={styles.textHeader}>Treasure</Text>
            <Text style={styles.textHeader}>Hunt</Text>
          </View>
        </View>

        <View style={[myStyles.part, { marginBottom: 32 }]}>
          <View style={styles.divider}>
          </View>
        </View>

        <View style={[myStyles.part, { marginBottom: 32 }]}>
          <OrangeArrowTitle title="Thể lệ" />
          <Text style={styles.description}>
            Thank you for joining our flagship event <Text style={styles.highLight}>"FPT Techday 2022"</Text>.
            We hope you had a wonderful time with us in Vietnam.
            {"\n"}
            {"\n"}
            Kindly let us know your feedback by completing this survey.
            It helps us understand your needs to give you the best services in the future.
            Thank you very much!
          </Text>
        </View>

        <View style={[myStyles.part, { marginBottom: 29 }]}>
          <OrangeArrowTitle title="Phần thưởng" style={{ marginBottom: 12 }}  />
          <Text style={styles.description}>
            Thank you for joining our flagship event "FPT Techday 2022".
            We hope you had a wonderful time with us in Vietnam.
            {"\n"}
            {"\n"}
            Kindly let us know your feedback by completing this survey.
            It helps us understand your needs to give you the best services in the future.
            Thank you very much!
            {"\n"}
            {"\n"}
            <Text style={styles.orangeText}>Trải nghiệm Triển lãm Công nghệ & quét Mã QR code ngay!</Text>
          </Text>
        </View>

        <View style={[myStyles.part, { marginBottom: 40}]}>
          <HStack space={3} justifyContent="center" style={{width:'100%', paddingHorizontal: 34}}>
            <QRButton onPress={handleScan} />
            <AchieveButton onPress={handleAchievement} />
          </HStack>
        </View>

      </BgGradientScreen>
    </ScrollView>
  )
}


const myStyles = StyleSheet.create({
  part: {
    paddingHorizontal: 24,
    width: '100%',
  },

})

export default Introduction;