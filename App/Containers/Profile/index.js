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

const IconButton = ({ iconName, title }) => {
  return (
    <TouchableOpacity style={myStyles.iconButton}>
      <View style={myStyles.iconCircle}>
        <RenderSvg iconName={iconName} color="#213992" />
      </View>
      <Text style={myStyles.iconTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Profile = ({ navigation, animatedProps }) => {
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
          <View style={{ width: '100%', marginBottom: 48 }}>
            <View style={myStyles.avatarWrapper}>
              <RenderImage name="avatar" style={myStyles.avaterImg} />
            </View>
          </View>

          <View style={{ width: '100%', marginBottom: 16 }}>
            <Text style={myStyles.name}>Bùi Thị Thúy Trinh</Text>
            <Text style={myStyles.staffPosition}>Chuyên gia công nghệ</Text>
          </View>

          <View
            style={{
              width: '100%',
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
            }}>
            <RenderImage name="testQR" />
          </View>

          <View
            style={{
              width: '100%',
              marginBottom: 24,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconButton iconName="iconShare" title={'Chia sẻ'} />
            <IconButton iconName="downloadOutline" title={'Tải xuống'} />
          </View>

          <View
            style={{ width: '100%', marginBottom: 24, paddingHorizontal: 24 }}>
            <Text style={myStyles.detailTitle}>Thông tin</Text>
            <View style={myStyles.infoCard}>
              <View style={[myStyles.infoLine, myStyles.infoDivider]}>
                <Text style={myStyles.infoKey}>Số điện thoại</Text>
                <Text style={myStyles.infoValue}>0386355851</Text>
              </View>

              <View
                style={[
                  myStyles.infoLine,
                  myStyles.infoDivider,
                  { paddingTop: 8 },
                ]}>
                <Text style={myStyles.infoKey}>Email</Text>
                <Text style={myStyles.infoValue}>jeanmassad92@gmail.com</Text>
              </View>

              <View style={[myStyles.infoLine, { paddingTop: 8 }]}>
                <Text style={myStyles.infoKey}>Loại khách hàng</Text>
                <Text style={myStyles.infoValue}>Khách hàng doanh nghiệp</Text>
              </View>
            </View>

            <View style={[myStyles.infoCard, { paddingTop: 14 }]}>
              <View style={[myStyles.infoLine, myStyles.infoDivider]}>
                <TouchableOpacity 
                    style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} 
                     onPress={() => navigation.navigate('PasswordChange')}
                     >
                  <Text style={myStyles.infoValue}>
                    Đổi mật khẩu
                  </Text>
                  <RenderSvg iconName="angleRight" width={10} height={12} />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  myStyles.infoLine,
                  myStyles.infoDivider,
                  { paddingTop: 14 },
                ]}>
                <TouchableOpacity style={{ width: '100%' }} >
                  <Text style={myStyles.infoValue}>
                    Xóa tài khoản
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={[myStyles.infoLine, { paddingTop: 14 }]}>
                <TouchableOpacity style={{ width: '100%' }} onPress={handleLogOut}>
                  <Text style={[myStyles.infoValue, { color: 'red' }]}>
                    Đăng xuất
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Hidden Components */}
      <PopUpModal
        isOpen={openLogoutModal}
        type="danger"
        onCancel={() => { setIsOpenLogoutModal(false) }}
        okText='Đăng xuất'
        cancelText='Hủy'
      >
        <View style={myStyles.logOutBody}>
          <Text style={myStyles.logOutText}>Bạn chắc chắn muốn
            {"\n"}
            đăng xuất không?</Text>
        </View>
      </PopUpModal>
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

export default Profile;
