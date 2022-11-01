import React, { useState, useEffect, useRef } from 'react';
import { View, StatusBar, Text, StyleSheet, TouchableOpacity, Animated, Keyboard, ImageBackground } from 'react-native';
import RenderSvg from '../../Components/Svg/Render';
import LinearGradientButton from '../../Components/LinearGradientButton';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import RenderImage from '../../Components/RenderImage';
import {Colors, Fonts} from '../../Themes';


const UserNameInput = ({ value, setValue, onPress }) => {
  const styles = {
    containerStyle: {
      width: '100%',
      height: 56,
      paddingLeft: 16,
      borderColor: '#EAEEFA',
      borderStyle: 'solid',
      borderRadius: 8,
      borderWidth: 1
    }
  }
  return (
    <View style={{ marginBottom: 16, width: '100%' }}>
      <FloatingLabelInput
        label={'Tên đăng nhập'}
        value={value}
        onChangeText={value => { setValue(value), onPress() }}
        containerStyles={styles.containerStyle}
        customLabelStyles={{ colorFocused: '#838895', colorBlurred: '#838895', ...Fonts.weight.medium }}
      />
    </View>
  )
}

const PasswordInput = ({ value, setValue }) => {
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
      borderWidth: 1
    }
  }

  return (
    <>
      <View style={{ width: '100%' }}>
        <FloatingLabelInput
          label={'Mật khẩu'}
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

const Login = ({ navigation }) => {
  const [warnText, setWarnText] = useState(false);
  const [user, setUser] = useState({ username: '', password: '' })
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const topAnim = useRef(new Animated.Value(1000)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const handleSubmit = () => {
    setWarnText(true);
  }
  const handleName = (username) => {
    setUser({ ...user, username })
  }
  const handlePassword = (password) => {
    setUser({ ...user, password })
  }
  const handleRegister = () => {
    navigation.navigate('Register')
  }
  const [delay, setDelay] = useState(2000)

  //BEGIN: Animtaion input username, password
  useEffect(() => {
    setDelay(0);
  }, [])

  useEffect(() => {
    Animated.timing(
      topAnim,
      {
        toValue: isKeyboardVisible ? 0 : 182, 
        duration: 500,
        delay: delay,

      }
    ).start();
  }, [topAnim, isKeyboardVisible])

  useEffect(() => {
    Animated.timing(
      opacityAnim,
      {
        toValue: isKeyboardVisible ? 0 : 1,
        duration: 500,
        delay: delay,
      }
    ).start();
  }, [opacityAnim, isKeyboardVisible])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);

      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  //END: Animtaion input username, password

  return (
    <>
      <ImageBackground source={require('../../Images/loginBackground.png')} resizeMode="cover" style={{ width: '100%', height: '100%', minHeight: 800 }}>
        <StatusBar translucent backgroundColor='transparent' />
        <View style={{ width: '100%', height: '100%' }}>
          <Animated.View style={[styles.headerLogo,{opacity:opacityAnim}]}>
            <RenderImage
              name="logoSongHanh"
              style={{
                width: 180,
                height:90,
              }}
              resizeMode="contain"
            />

          </Animated.View>
          <Animated.View style={{
            ...styles.mainContent,
            top: topAnim,
          }}>

            <Text style={styles.title}>Đăng nhập</Text>

            <UserNameInput value={user.username} setValue={handleName} onPress={() => { console.log('this is onpress') }} />

            <PasswordInput value={user.password} setValue={handlePassword} />

            <Text style={[styles.errorMess,{opacity: warnText ? 1 : 0}]}>Tài khoản không chính xác, vui lòng kiểm tra lại</Text>

            <View style={styles.forgotPass}>
              <TouchableOpacity >
                <Text style={{ color: '#213992',...Fonts.weight.medium   }}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.submitButton}>
              <LinearGradientButton label="Đăng nhập" onPress={handleSubmit} />
            </View>

            <View style={styles.register}>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={{...Fonts.weight.medium  }}>Chưa có tài khoản ? <Text style={{ color: '#F57E25', ...Fonts.weight.medium   }}>Đăng ký</Text></Text>
              </TouchableOpacity>
            </View>

            <View style={{ ...styles.register, paddingBottom: 1000 }}>
              <Text style={{ color: '#838895', ...Fonts.weight.medium   }}>Bằng việc đăng nhập, bạn đã đồng ý với</Text>
              <TouchableOpacity>
                <Text style={{ color: '#213992',...Fonts.weight.medium   }}>Điều khoản & Chính sách bảo mật</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </ImageBackground>

    </>
  );
}


const styles = StyleSheet.flatten({
  background: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  headerLogo: {
    width: '100%',
    height: 180,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingTop:30
  },
  mainContent: {
    padding: 24,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    position: 'absolute',
  },
  title: {
    ...Fonts.weight.semiBold,
    width: '100%',
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 40,
    color: '#253645',
    marginTop: 24,
    marginBottom: 24,
  },
  forgotPass: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24
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
  errorMess: {
    color: '#DC2626',
    marginTop: 4,
    marginBottom: 16,
    textAlign: 'left',
    width: '100%'
  }
});


export default Login;


