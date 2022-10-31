import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import RenderSvg from '../../Components/Svg/Render';
import { VStack } from 'native-base';

import Header from '../../Components/Header';
import AnimatedScreen from '../../Components/AnimatedScreen';
import LinearGradient from 'react-native-linear-gradient';
import Modal from '../../Components/Modal';
import RenderImage from '../../Components/RenderImage';
import Content from '../../Components/Content';
import CardCollapse from '../../Components/Card/CardCollapse';
// import styles from '../../Styles/common';
import styles from '../../Styles/AgendaStyles';

const StoryItem = ({title, description, buttons, navigation}) => {
  const handleDetail = () => {
    navigation.navigate('ExhibitionDetail');
  };

  return (
    <TouchableOpacity style={myStyles.itemButton} onPress={handleDetail}>
      <View style={myStyles.textGroup}>
        <Text style={myStyles.company}>Seminar (1)</Text>
        <Text style={[myStyles.companyType, {color: '#253645'}]}>
          Overcome Uncertainties With Business Transformation
        </Text>
      </View>
      <View style={myStyles.buttonIcon}>
        <RenderSvg iconName="angleRight" width={8} height={12} />
      </View>
    </TouchableOpacity>
  );
};

const CardCollapseItem = ({navigation}) => {
  return (
    <CardCollapse title="Trở về tuổi thơ">
      <View>
        <StoryItem navigation={navigation} />
        <StoryItem navigation={navigation} />
        <StoryItem navigation={navigation} />
        <StoryItem navigation={navigation} />
        <StoryItem navigation={navigation} />
      </View>
    </CardCollapse>
  );
};

const OurStory = ({navigation, animatedProps}) => {
  return (
    <ScrollView>
      <StatusBar
   backgroundColor="transparent"
   translucent={true}
/>
      <LinearGradient
        colors={['#E4EFFF', '#FFF']}
        style={[{flex: 1}, {paddingHorizontal: 0}]}>
        {/* <SafeAreaView /> */}

        <View style={myStyles.ourStoryHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={[myStyles.circleRound, {marginBottom: 32}]}>
            <RenderSvg
              iconName="iconChevronLeft"
              color="#22313F"
              width={22}
              style={{marginLeft: -2}}
            />
          </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal: 24, marginBottom: 16}}>
          <RenderImage
            name={'FPTTechDay2022'}
            resizeMode="contain"
            style={{width: 170}}
          />
        </View>

        <View style={{paddingHorizontal: 24, marginBottom: 32}}>
          <RenderImage
            name={'ourStoryTitle'}
            resizeMode="contain"
            style={{width: 300, marginLeft: -8}}
          />
        </View>
        <View style={{paddingHorizontal: 24, marginBottom: 16}}>
          <View style={myStyles.divider}></View>
        </View>

       

        <View style={{paddingHorizontal:24, marginBottom:32}}>
          <Text style={myStyles.description}>
            Công nghệ phát triển nhanh chóng và trở thành một phần của cuộc sống
            xã hội hiện đại.
            {"\n"}
            {"\n"}
            Trong suốt 34 năm, FPT đã và đang tiếp tục tận lực
            ứng dụng khoa học công nghệ để nâng tầm và phụng sự cuộc sống của
            con người. 
            {"\n"}
            {"\n"}
            Dù bạn là ai, dù bạn ở đâu, chúng tôi vẫn luôn là người
            đồng hành tận tụy đáng tin cậy của bạn trong mọi giai đoạn của cuộc
            sống.
          </Text>
        </View>

        <View>
          <View style={{width: '100%', paddingHorizontal: 24}}>
          <VStack space={4} alignItems="center">
            <CardCollapseItem navigation={navigation} />
            <CardCollapseItem navigation={navigation} />
            <CardCollapseItem navigation={navigation} />
            <CardCollapseItem navigation={navigation} />
            </VStack>

          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

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
    marginBottom: 20,
  },
  subTitle: {
    ...Fonts.weight.medium,
    fontSize: 16,
    marginLeft: 16,
    color: '#253645',
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
    marginLeft: -10,
  },
  itemTitle: {
    ...Fonts.weight.semiBold,
    fontSize: 22,
    paddingBottom: 6,
  },
  itemDescription: {
    ...Fonts.weight.medium,
    fontSize: 16,
    color: '#253645',
    lineHeight: 19,
  },
  itemButton: {
    width: '100%',
    // height: 66,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EAEEFA',
    borderRadius: 8,
    marginBottom: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 16,
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
  },

  circleRound: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ourStoryHeader: {
    marginTop: 68,
    marginBottom: 72,
    paddingHorizontal: 24,
  },
  divider: {
    width: 30,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#5278CE',
  },
  description:{
    ...Fonts.weight.medium,
    fontSize:16, 
    lineHeight:22,
    color: '#253645'
  }
});

export default OurStory;
