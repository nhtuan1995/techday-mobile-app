import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { HStack, Stack, Center } from 'native-base';

import RenderSvg from '../../Components/Svg/Render';
import RenderImage from '../../Components/RenderImage';

import BgGradientScreen from '../../Components/BgGradientScreen';
import GradientButton from '../../Components/LinearGradientButton';

import styles from '../../Styles/TreasureStyles';


const TreasureTag = ({ link, onPress }) => {
  return (
    <TouchableOpacity style={myStyles.treasureTag} onPress={onPress}>
      <Center
        bg="#C1CBF1"
        rounded="sm"
      >
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 8, resizeMode: 'cover' }}
          source={{ uri: link }}
        />
      </Center>
    </TouchableOpacity>
  )
}

const TreasureHuntAchievement = ({ animatedProps, navigation }) => {
  const handleShareEvent = () => {
    alert('Share Event')
  }

  const handleDetail = () => {
    alert('Detail ! ')
  }

  return (
    <BgGradientScreen
      headerProps={{
        title: "Thành tích của bạn",
        bgColor: '#fff',
        rightContent: (
          <TouchableOpacity
            style={[styles.pressButton, { marginRight: -8 }]}
            onPress={handleShareEvent}
          >
            <RenderSvg iconName="iconShare" />
          </TouchableOpacity>
        )
      }}
    >

      <View style={[myStyles.part, { marginTop: 24 }]}>
        <View style={styles.logoCount}>
          <Text style={[styles.orangeText, { fontSize: 14, lineHeight: 20 }]}>Bạn đã thu thập được 1/16 Logo</Text>
        </View>
      </View>

      <View style={[myStyles.part, { marginTop: 16 }]}>
        <Stack direction="row" mb="2.5" mt="1.5" style={myStyles.stack}>
          <TreasureTag link="https://znews-photo.zingcdn.me/w660/Uploaded/ohuokaa/2022_09_27/IMGC4685.jpg" onPress={handleDetail} />
          <TreasureTag />
          <TreasureTag />
          <TreasureTag />

          <TreasureTag link="https://thegioiso3a.vn/media/news/169_iphone_13_pro_max_se_co_maurose_pinkket_thuc_nhung_du_kien_e2808be2808bra_mat_vao_thang_12_theo_nha_san_xuat_phu_kien_6.jpeg" />
          <TreasureTag />
          <TreasureTag />
          <TreasureTag />

          <TreasureTag />
          <TreasureTag />
          <TreasureTag />
          <TreasureTag />

          <TreasureTag />
          <TreasureTag />
          <TreasureTag />
          <TreasureTag />
        </Stack>
      </View>

        <GradientButton width={52} height={52} borderRadius={26} containerStyle={styles.scanCircleButton}>
        <RenderSvg iconName="IconQRCode" />
        </GradientButton>



    </BgGradientScreen>
  )
}


const myStyles = StyleSheet.create({
  part: {
    paddingHorizontal: 24,
    width: '100%',
  },

  stack: {
    marginRight: -8,
    marginLeft: -8,
    flexWrap: 'wrap'
  },

  treasureTag: {
    aspectRatio: 1,
    width: '25%',
    borderRadius: 8,
    padding: 8
  }

})

export default TreasureHuntAchievement;