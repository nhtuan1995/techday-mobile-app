import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import LinearGradient from 'react-native-linear-gradient';
import { FloatingLabelInput } from 'react-native-floating-label-input';

import RenderSvg from '../../Components/Svg/Render';
import LinearGradientButton from '../../Components/LinearGradientButton';
import BgGradientScreen from '../../Components/BgGradientScreen';


import styles from '../../Styles/RegisterStyles';

const NumberInput = ({ isOTP, value, setValue }) => {
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


const Register = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    setIsOTP(true);
  };

  const handleDone = () => {
    navigation.navigate('RegisterInfo')
  }

  const [phone, setPhone] = useState(null)
  const [isOTP, setIsOTP] = useState(false)

  const handlePhone = (value) => {
    setPhone(value);
  }

  const handleShareEvent = () => {
    alert('Share Event')
  }

  return (
      <BgGradientScreen hasHeader={false}>
        <View style={styles.registerHeader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.circleRound, { marginBottom: 32 }]}
          >
            <RenderSvg iconName="iconChevronLeft" color="#22313F" width={22} style={{ marginLeft: -2 }} />
          </TouchableOpacity>

          <View style={myStyles.part}>
            <Text style={styles.title}>Đăng ký</Text>

            {isOTP &&
              <>
                <View style={styles.register}>
                  <Text style={{ color: '#838895' }}>Vui lòng nhập mã OTP được gửi đến số </Text>
                  <TouchableOpacity>
                    <Text style={{ color: '#213992' }}>(+84) 285 358 455</Text>
                  </TouchableOpacity>
                  <NumberInput isOTP={isOTP} value={phone} setValue={handlePhone} />
                  <LinearGradientButton containerStyle={styles.submitButton} label="Tiếp tục" onPress={handleDone} />
                  <TouchableOpacity onPress={() => { setIsOTP(false) }}>
                    <Text style={{ color: '#F57E25' }}>Gửi lại</Text>
                  </TouchableOpacity>
                </View>
              </>
            }

            {!isOTP &&
              <>
                <Text style={styles.subTitle}>Nhập số điện thoại của bạn để tiếp tục</Text>
                <NumberInput isOTP={isOTP} value={phone} setValue={handlePhone} />
                <LinearGradientButton containerStyle={styles.submitButton} label="Tiếp tục" onPress={handleSubmit} />
                <View style={styles.register}>
                  <Text style={{ color: '#838895' }}>Bằng việc đăng nhập, bạn đã đồng ý với</Text>
                  <TouchableOpacity>
                    <Text style={{ color: '#213992' }}>Điều khoản & Chính sách bảo mật</Text>
                  </TouchableOpacity>
                </View>
              </>
            }
          </View>
        </View>
      </BgGradientScreen>

  );
}

const myStyles = StyleSheet.create({
  part: {
    paddingHorizontal: 24,
    width: '100%',
  },
})

export default Register;

