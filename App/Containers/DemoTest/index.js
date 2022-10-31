import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated
} from 'react-native';
import { Colors, Fonts } from '../../Themes';
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
import PopUpModal from '../../Components/Modal';
import Lottie from 'lottie-react-native';
import LinearGradientButton from '../../Components/LinearGradientButton';


const DemoTest = ({ navigation, animatedProps }) => {
  const [openLogoutModal, setIsOpenLogoutModal] = useState(false);

  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false
    }).start();
  }, [])



  const handleLogOut = () => {
    setIsOpenLogoutModal(true);
  }

  return (
    <ScrollView>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <RenderImage
        name="profileHeader"
        resizeMode="cover"
        style={{ width: '100%', position: 'absolute', top: 0 }}
      />
      <View style={myStyles.profileHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[myStyles.circleRound, { marginBottom: 32 }]}>
          <RenderSvg
            iconName="iconChevronLeft"
            color="#22313F"
            width={22}
            style={{ marginLeft: -2 }}
          />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={['#E4EFFF', '#FFF']}
        style={[{ flex: 1 }, { paddingHorizontal: 0 }]}>
        <View style={{ width: '100%', paddingBottom: 24 }}>
          {/* <View style={{width:'100%', height:40}}></View> */}
          <View style={{ width: '100%', marginBottom: 48 }}>
            <View style={myStyles.avatarWrapper}>
              <RenderImage name="scanTest" style={myStyles.avaterImg} />
            </View>
          </View>

          <View style={{ width: '100%', marginBottom: 16 }}>
            <Text style={myStyles.name}>FPT FWORK</Text>
          </View>

          <View style={{ width: '100%', paddingHorizontal: 24 }}>
            <LinearGradientButton containerStyle={{marginBottom :16}} label="Login" onPress={()=>navigation.navigate('Login')}/>
            <LinearGradientButton containerStyle={{marginBottom :16}} label="Exhibition" onPress={()=>navigation.navigate('Exhibition')}/>
            <LinearGradientButton containerStyle={{marginBottom :16}} label="OurStory" onPress={()=>navigation.navigate('OurStory')}/>
            <LinearGradientButton containerStyle={{marginBottom :16}} label="Survey" onPress={()=>navigation.navigate('Survey')}/>
            <LinearGradientButton containerStyle={{marginBottom :16}} label="Register" onPress={()=>navigation.navigate('Register')}/>
            <LinearGradientButton containerStyle={{marginBottom :16}} label="Profile" onPress={()=>navigation.navigate('Profile')}/>
            <LinearGradientButton containerStyle={{marginBottom :16}} label="TreasureHunt" onPress={()=>navigation.navigate('TreasureHuntIntro')}/>
          </View>
        </View>
      </LinearGradient>

      {/* Hidden Components */}
    </ScrollView>
  );
};

const myStyles = StyleSheet.create({
  circleRound: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    marginTop: 68,
    paddingHorizontal: 24,
  },
  divider: {
    width: 30,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#5278CE',
  },
  description: {
    ...Fonts.weight.medium,
    fontSize: 16,
    lineHeight: 22,
    color: '#253645',
  },
  avatarWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -40,
  },
  avaterImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'white',
  },
  name: {
    ...Fonts.weight.semiBold,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#253645',
    width: '100%',
    textAlign: 'center',
  },
  staffPosition: {
    ...Fonts.weight.medium,
    fontSize: 13,
    lineHeight: 16,
    color: '#253645',
    width: '100%',
    textAlign: 'center',
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 32,
    marginBottom: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

    shadowColor: '#a0bae0',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  iconTitle: {
    ...Fonts.weight.medium,
    fontSize: 14,
    lineHeight: 20,
    color: '#253645',
  },
  detailTitle: {
    ...Fonts.weight.semiBold,
    fontSize: 18,
    lineHeight: 24,
    color: '#253645',
    marginBottom: 16,
  },
  infoCard: {
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#a0bae0',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  infoLine: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 14,
  },
  infoDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEEFA',
  },
  infoKey: {
    ...Fonts.weight.medium,
    fontSize: 14,
    lineHeight: 20,
    color: '#838895',
    marginBottom: 4,
  },
  infoValue: {
    ...Fonts.weight.medium,
    fontSize: 16,
    lineHeight: 19,
    color: '#253645',
  },
  logOutBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutText: {
    ...Fonts.weight.semiBold,
    fontSize: 18,
    lineHeight: 24,
    color: '#253645',
    textAlign: 'center'
  }
});

export default DemoTest;
