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


const FloatInput = ({staticLabel, label,maskType, value, setValue, disabled }) => {
  return (
    <View style={{ marginBottom: 16, width: '100%' }}>
      <FloatingLabelInput
        label={label}
        value={value}
        editable={false}
        maskType={maskType}
        staticLabel={staticLabel}
        onChangeText={value => setValue(value)}
        containerStyles={{ borderColor: '#EAEEFA', borderStyle: 'solid', borderRadius: 8, borderWidth: 1, padding: 16 }}
        customLabelStyles={{ colorFocused: '#838895', colorBlurred: '#838895' }}
      />


    </View>
  )
}




function RegisterInfo({ navigation }) {
  const handleBack = () => {
    alert('back to homepage');
  };

  const handleSubmit = () => {
    setIsOTP(true)
  };

  const [user, setUser] = useState({
    name: '', 
    email : '', 
    phone: "0915130295", 
    role: '',
  })

  return (
    <>
      <RenderImage
        name={'linearBackground'}
        width={'100%'}
        height={'100%'}
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      />
      <Content>
        <Text style={styles.title}>Thông tin tài khoản</Text>
        <FloatInput label="Tên đăng nhập" maskType="text" value={user.name} setValue={(value)=>{setUser({...user, name: value})}}/>
        <FloatInput label="Email" maskType="text" value={user.email} setValue={(value)=>{setUser({...user, email: value})}}/>
        <FloatInput label="Số điện thoại" staticLabel={true} maskType="text" value={user.name} disabled/>
      </Content>
    </>
  );
}

export default RegisterInfo;

const styles = StyleSheet.create({
  title: {
    marginTop : 64,
    width : '100%', 
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#253645',
  },
  
});
