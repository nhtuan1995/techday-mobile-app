import React, { useState } from 'react';
import { View, ScrollView, StatusBar, ImageBackground, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from 'native-base'
import RenderSvg from '../../Components/Svg/Render';
import { debounce } from 'lodash';
import Content from '../../Components/Content';
import LinearGradientButton from '../../Components/LinearGradientButton';

const InputName = () => {
  const [showInput, setShowInput] = useState(false)
  const [value, setValue] = useState('');
  return (
    <>
      <TouchableOpacity onPress={() => {
        setShowInput(true)
      }} style={{ width: '100%', height: 56, borderColor: 'red', borderStyle: 'solid', borderRadius: 8, paddingLeft: 16, display: 'flex', justifyContent: 'center' }}>
        {!showInput && <Text style={{ fontSize: 16 }}>Username</Text>}
        {showInput && <Input isFocused={showInput} value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="Enter userName" onBlur={() => { setShowInput(false) }} variant="unstyled" />}
      </TouchableOpacity>
    </>
  )
}

const Login = ({ navigation }) => {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' />
      <Image
        style={{ width: '100%', height: 300 }}
        source={require('../../Images/loginHeader.png')}
        />
      <View style={{ width: '100%', height: 500, position: 'relative', backgroundColor: 'white' }}>
        <View style={{ width: '100%', height: 300, position: 'absolute', top: -50, backgroundColor: 'white', borderTopLeftRadius: 12, borderTopRightRadius: 12, paddingTop: 32, paddingVertical: 24, display: 'flex', alignItems: 'center' }}>
          <RenderSvg iconName={'FPTLogo'} width={82} height={50} />
          <Text style={{ fontSize: 32, fontWeight: '600', lineHeight: 40, color: '#253645', marginTop: 24 }}>Đăng nhập</Text>

           <View width="100%">
          
            <LinearGradientButton text="Đăng nhập" onPress={()=>{}} />
             
           </View>

        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


export default Login;


