import React, { useState, useEffect, useRef } from 'react';
import { View, StatusBar, Text, Image, StyleSheet, TouchableOpacity, Animated, KeyboardAvoidingView, Keyboard } from 'react-native';
import RenderSvg from '../../Components/Svg/Render';
import LinearGradientButton from '../../Components/LinearGradientButton';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import RenderImage from '../../Components/RenderImage';
import { LogBox } from 'react-native';

const UserNameInput = ({ value, setValue }) => {
  return (
    <View style={{ marginBottom: 16, width: '100%' }}>
      <FloatingLabelInput
        label={'Tên đăng nhập'}
        value={value}
        onChangeText={value => setValue(value)}
        containerStyles={{ borderColor: '#EAEEFA', borderStyle: 'solid', borderRadius: 8, borderWidth: 1, padding: 16 }}
        customLabelStyles={{ colorFocused: '#838895', colorBlurred: '#838895' }}
      />
    </View>
  )
}

const PasswordInput = ({ value, setValue }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <View style={{width: '100%' }}>
        <FloatingLabelInput
          label={'Mật khẩu'}
          value={value}
          onChangeText={value => setValue(value)}
          containerStyles={{ borderColor: '#EAEEFA', borderStyle: 'solid', borderRadius: 8, borderWidth: 1, padding: 16 }}
          customLabelStyles={{ colorFocused: '#838895', colorBlurred: '#838895' }}
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
  const [user, setUser] = useState({ username: '', password: '' })
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const topAnim = useRef(new Animated.Value(1000)).current;

  const handleSubmit = () => {
    alert('handle submit !')
  }
  const handleName = (username) => {
    setUser({ ...user, username })
  }
  const handlePassword = (password) => {
    setUser({ ...user, password })
  }
  const handleRegister = () =>{
    navigation.navigate('Register')
  }

  useEffect(() => {
    LogBox.ignoreLogs(['Warning: useNativeDriver']);

    Animated.timing(
      topAnim,
      {
        toValue: isKeyboardVisible ? 0 : 250,
        duration: 1000,
      }
    ).start();
  }, [topAnim, isKeyboardVisible])


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);


  return (
    <>
      <StatusBar translucent backgroundColor='transparent' />
      <RenderImage name={'beforeLogin'} width={'100%'} height="100%" />
      <View style={styles.headerLogo}>
        <RenderSvg iconName='loginHeader' width={200} height={105} />
      </View>
      <Animated.View style={{
        ...styles.mainContent,
        top: topAnim
      }}>
        <Text style={styles.title}>Đăng nhập</Text>
        <UserNameInput value={user.username} setValue={handleName} />
        <PasswordInput value={user.password} setValue={handlePassword} />
        <Text style={styles.errorMess}>Tài khoản không chính xác, vui lòng kiểm tra lại</Text>
        <View style={styles.forgotPass}>
          <TouchableOpacity >
            <Text style={{ color: '#213992' }}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <LinearGradientButton containerStyle={styles.submitButton} text="Đăng nhập" onPress={handleSubmit} />
        <View style={styles.register}>
          <TouchableOpacity onPress={handleRegister}><Text>Chưa có tài khoản ? <Text style={{ color: '#F57E25' }}>Đăng ký</Text></Text></TouchableOpacity>
        </View>
        <View style={styles.register}>
          <Text style={{color: '#838895'}}>Bằng việc đăng nhập, bạn đã đồng ý với</Text>
          <TouchableOpacity>
            <Text style={{ color: '#213992' }}>Điều khoản & Chính sách bảo mật</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
}


const styles = StyleSheet.flatten({
  headerLogo: {
    width: '100%',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20
  },
  background: {
    width: '100%',
    height: 500,
    position: 'relative',
    backgroundColor: 'white'
  },
  mainContent: {
    paddingHorizontal: 24,
    width: '100%',
    height: 1000,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 24,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 40,
    color: '#253645',
    marginTop: 24,
    marginBottom: 24,
    paddingTop: 16,
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
  errorMess:{
    color: '#DC2626',
    marginTop: 4,
    marginBottom: 16, 
    textAlign: 'left',
    width: '100%'
  }
});


export default Login;


