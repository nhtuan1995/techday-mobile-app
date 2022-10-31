import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
} from 'react-native';
import RenderSvg from '../../Components/Svg/Render';
import RenderImage from '../../Components/RenderImage';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../Themes';

import Content from '../../Components/Content';
import LinearGradientButton from '../../Components/LinearGradientButton';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';


const PasswordInput = ({ value, setValue, title }) => {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);

  const styles = {
    containerStyle: {
      width: '100%',
      height: 56,
      paddingHorizontal: 16,
      borderColor: '#EAEEFA',
      borderStyle: 'solid',
      borderRadius: 8,
      borderWidth: 1,
      marginBottom : 24,
      backgroundColor: 'white', 
    }
  }

  return (
    <>
      <View style={{ width: '100%' }}>
        <FloatingLabelInput
          label={title}
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={value => setValue(value)}
          containerStyles={styles.containerStyle}
          customLabelStyles={{ colorFocused: '#838895', colorBlurred: '#838895', ...Fonts.weight.medium }}
          isPassword
          togglePassword={show}
          customShowPasswordComponent={<RenderSvg iconName="passEye" />}
          customHidePasswordComponent={<RenderSvg iconName="passEyeSlash" />}
        />
      </View>
    </>
  )
}

function PasswordChange({navigation}) {

  const [pass, setPass] = useState({
    oldPass:'',
    newPass:'',
    reNewPass:''
  })
  return (
    <ScrollView>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <LinearGradient
        colors={['#E4EFFF', '#FFF']}
        style={[{flex: 1}, {paddingHorizontal: 24, minHeight: 800}]}>
        {/* <SafeAreaView /> */}

        <View style={styles.ourStoryHeader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.circleRound, {marginBottom: 32}]}>
            <RenderSvg
              iconName="iconChevronLeft"
              color="#22313F"
              width={22}
              style={{marginLeft: -2}}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Đổi mật khẩu</Text>
        
        <PasswordInput title="Mật khẩu hiện tại" value={pass.oldPass} setValue={(value)=>{setPass({...pass,oldPass:value})}} />
        <PasswordInput title="Mật khẩu mới" value={pass.newPass} setValue={(value)=>{setPass({...pass,newPass:value})}} />
        <PasswordInput title="Nhập lại mật khẩu mới" value={pass.reNewPass} setValue={(value)=>{setPass({...pass,reNewPass:value})}} />

        <View style={{width: '100%'}}>
          <LinearGradientButton label="Lưu thông tin" />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default PasswordChange;

const styles = StyleSheet.create({
  customHeader: {
    paddingTop: 48,
    paddingBottom: 24,
    width: '100%',
    marginLeft: -12,
  },

  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#253645',
    marginBottom: 24,
  },

  devider: {
    width: 30,
    height: 4,
    backgroundColor: '#5278CE',
    borderRadius: 4,
    marginTop: 32,
    marginBottom: 16,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  description: {
    color: '#253645',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    marginBottom: 16,
  },

  title: {
    fontSize: 32,
    lineHeight: 40,
    color: '#253645',
    textAlign: 'center',
    marginBottom: 24,
    ...Fonts.weight.semiBold,
  },
  subTitle: {
    fontSize: 16,
    color: '#253645',
    width: '100%',
    textAlign: 'center',
    ...Fonts.weight.medium,
  },
  submitButton: {
    width: '100%',
    marginBottom: 16,
  },
  register: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  //test !!!
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EAEEFA',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: '#213992',
    color: 'black',
  },

  //header
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
  },
});
