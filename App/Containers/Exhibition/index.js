import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Colors, Fonts } from '../../Themes';
import RenderSvg from '../../Components/Svg/Render';
import { ScrollView } from 'react-native';

import Header from '../../Components/Header';
import AnimatedScreen from '../../Components/AnimatedScreen';
import LinearGradient from 'react-native-linear-gradient';
import Modal from '../../Components/Modal';
import styles from '../../Styles/common';
import RenderImage from '../../Components/RenderImage';
import Content from '../../Components/Content'

const ExhibitionItem = ({ title, description, buttons, navigation }) => {
  const handleDetail = () =>{
    navigation.navigate('ExhibitionDetail')
  }

  return (
    <View style={myStyles.itemContent}>

      <View style={myStyles.itemHeader}>
        <RenderSvg iconName="iconArrowRightOrange" width={44} height={44} />
        <Text style={myStyles.itemTitle}>{title}</Text>
      </View>
      <View style={{ marginBottom: 24 }}>
        <Text style={myStyles.itemDescription}>
          Hệ sinh thái FPT luôn tận tâm chăm sóc sức khoẻ thể chất và tinh thần cho các thế hệ tương lai của đất nước bằng các dịch vụ và sản phẩm chất lượng cao.
        </Text>
      </View>

      <TouchableOpacity style={myStyles.itemButton} onPress={handleDetail}>
        <View style={myStyles.textGroup}>
          <Text style={myStyles.company}>FPT Education (FE)</Text>
          <Text style={myStyles.companyType}>Education Products</Text>
        </View>
        <View style={myStyles.buttonIcon}>
          <RenderSvg iconName="angleRight" width={8} height={12} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={myStyles.itemButton}>
        <View style={myStyles.textGroup}>
          <Text style={myStyles.company}>FPT Education (FE)</Text>
          <Text style={myStyles.companyType}>Education Products</Text>
        </View>
        <View style={myStyles.buttonIcon}>
          <RenderSvg iconName="angleRight" width={8} height={12} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={myStyles.itemButton}>
        <View style={myStyles.textGroup}>
          <Text style={myStyles.company}>FPT Education (FE)</Text>
          <Text style={myStyles.companyType}>Education Products</Text>
        </View>
        <View style={myStyles.buttonIcon}>
          <RenderSvg iconName="angleRight" width={8} height={12} />
        </View>
      </TouchableOpacity>
    </View>
  )
}


const Exhibition = ({ navigation,animatedProps }) => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <AnimatedScreen style={{ flex: 1 }} {...animatedProps}>
        <LinearGradient
          colors={['#E4EFFF', '#FFF']}
          style={[styles.container, { paddingHorizontal: 0 }]}
        >
          <SafeAreaView />
          <View style={myStyles.topContent}>
            <Text style={myStyles.title}>Triển lãm Công nghệ</Text>
            <View style={myStyles.subTitleLine}>
              <RenderSvg iconName="iconUnionArrows" />
              <Text style={myStyles.subTitle}>Hành trình hướng tới tương lai</Text>
            </View>
            <RenderImage
              name="eventBanner"
              style={{ width: '100%', height: 230 }}
              resizeMode="cover"
            />
          </View>
          <View style={{ paddingHorizontal: 24 }}>
            <ExhibitionItem navigation={navigation} title="Trở lại tuổi thơ" />
            <ExhibitionItem navigation={navigation} title="Trở lại tuổi thơ" />
            <ExhibitionItem navigation={navigation} title="Trở lại tuổi thơ" />
            <ExhibitionItem navigation={navigation} title="Trở lại tuổi thơ" />
            <ExhibitionItem navigation={navigation} title="Trở lại tuổi thơ" />
          </View>

        </LinearGradient>
      </AnimatedScreen>
    </ScrollView>

  )
}


const myStyles = StyleSheet.create({
  topContent: {
    paddingTop: 44,
    marginBottom: 24,
  },
  subTitleLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 20
  },
  subTitle: {
    ...Fonts.weight.medium,
    fontSize: 16,
    marginLeft: 16,
    color: '#253645'
  },
  title: {
    ...Fonts.weight.semiBold,
    fontSize: 32,
    width: '100%',
    color: '#213992',
    textAlign: 'center',
  },
  itemContent: {
    marginBottom: 32,
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
    marginLeft: -10
  },
  itemTitle: {
    ...Fonts.weight.semiBold,
    fontSize: 22,
    paddingBottom: 6
  },
  itemDescription: {
    ...Fonts.weight.medium,
    fontSize: 16,
    color: '#253645',
    lineHeight: 19,
  },
  itemButton: {
    width: '100%',
    height: 66,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EAEEFA',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  textGroup: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '30%',
  },
  company: {
    ...Fonts.weight.semiBold,
    color: '#213992',
    fontSize: 16,
    lineHeight: 20,
  },
  companyType: {
    ...Fonts.weight.medium,
    fontSize: 14,
    lineHeight: 20,
  }
});

export default Exhibition;