import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput
} from 'react-native';
import Header from '../../Components/Header';
import RenderSvg from '../../Components/Svg/Render';
import Content from '../../Components/Content';
import LinearGradientButton from '../../Components/LinearGradientButton';
import MultipleChoiceQuestion from '../../Components/MultipleChoiceQuestion';
import RenderImage from '../../Components/RenderImage';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import OTPInputView from '@twotalltotems/react-native-otp-input'



const CustomHeader = ({ onPress }) => {
  return (
    <View style={styles.customHeader}>
      <TouchableOpacity style={{ width: 64 }} onPress={onPress}>
        <RenderSvg iconName="arrowBackWhite" width={64} height={64} />
      </TouchableOpacity>
    </View>
  );
};

const NumberInput = ({ isOTP, value, setValue }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={{ width: '100%', marginTop: 16, marginBottom: 24, height: 64 }}>
        {!isOTP && <FloatingLabelInput
          label={'Số điện thoại'}
          value={value}
          onChangeText={value => setValue(value)}
          containerStyles={{ backgroundColor: 'white', borderColor: '#EAEEFA', borderStyle: 'solid', borderRadius: 8, borderWidth: 1, padding: 16 }}
          customLabelStyles={{ colorFocused: '#838895', colorBlurred: '#838895' }}
          maskType="phone"
          customShowPasswordComponent={<RenderSvg iconName="passEye" />}
          customHidePasswordComponent={<RenderSvg iconName="passEyeSlash" />}
          keyboardType="numeric"
        />}

        {isOTP && <OTPInputView
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code => {
            console.log(`Code is ${code}, you are good to go!`)
          })}

        />}
      </View>
    </>
  )
}


function Register({ navigation }) {
  const handleBack = () => {
    alert('back to homepage');
  };

  const handleSubmit = () => {
    setIsOTP(true);
  };

  const handleDone = () =>{
    navigation.navigate('RegisterInfo')
  }

  const [phone, setPhone] = useState(null)
  const [isOTP, setIsOTP] = useState(false)
  const handlePhone = (value) => {
    setPhone(value);
  }

  return (
    <>
      <RenderImage
        name={'linearBackground'}
        width={'100%'}
        height={'100%'}
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      />
      <Content>
        <CustomHeader onPress={handleBack} />
        <Text style={styles.title}>Đăng ký</Text>
        {isOTP &&
          <>
            <View style={styles.register}>
              <Text style={{ color: '#838895' }}>Vui lòng nhập mã OTP được gửi đến số </Text>
              <TouchableOpacity>
                <Text style={{ color: '#213992' }}>(+84) 285 358 455</Text>
              </TouchableOpacity>
              <NumberInput isOTP={isOTP} value={phone} setValue={handlePhone} />
              <LinearGradientButton containerStyle={styles.submitButton} text="Tiếp tục" onPress={handleDone} />
              <TouchableOpacity onPress={()=>{setIsOTP(false)}}>
                <Text style={{ color: '#F57E25' }}>Gửi lại</Text>
              </TouchableOpacity>
            </View>
          </>
        }

        {!isOTP &&
          <>
            <Text style={styles.subTitle}>Nhập số điện thoại của bạn để tiếp tục</Text>
            <NumberInput isOTP={isOTP} value={phone} setValue={handlePhone} />
            <LinearGradientButton containerStyle={styles.submitButton} text="Tiếp tục" onPress={handleSubmit} />
            <View style={styles.register}>
              <Text style={{ color: '#838895' }}>Bằng việc đăng nhập, bạn đã đồng ý với</Text>
              <TouchableOpacity>
                <Text style={{ color: '#213992' }}>Điều khoản & Chính sách bảo mật</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      </Content>
    </>
  );
}

export default Register;

const styles = StyleSheet.create({
  customHeader: {
    paddingTop: 48,
    paddingBottom: 24,
    width: '100%',
    marginLeft: -12,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#253645',
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
    fontWeight: '600',
    lineHeight: 40,
    color: '#253645',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'SVNGilroy'

  },
  subTitle: {
    fontSize: 16,
    color: '#253645',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'SVNGilroy'
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
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
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
    borderColor: "#213992",
    color: 'black'
  },
});
