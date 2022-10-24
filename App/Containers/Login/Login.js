import React, { useEffect, useState } from 'react';
import { View, ScrollView, StatusBar, ImageBackground, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from 'native-base'
import RenderSvg from '../../Components/Svg/Render';
import { debounce } from 'lodash';
import Content from '../../Components/Content';
import LinearGradientButton from '../../Components/LinearGradientButton';
import LinearGradient from 'react-native-linear-gradient';
import FloatingInput from '../../Components/FloatInput';

const Login = ({ navigation }) => {
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=>{
    console.log('set is loading!')
    if(isLoading){
      (debounce(()=>{
        setIsLoading(false);
      }, 2000))()
    }
  },[isLoading])

  const handleLogin = () =>{
    setIsLoading(true);
   
  }
  return (
    <>
      {/* <View> */}
        <Content>
        <Text>Hello xin chào anh chị em :D</Text>
        <LinearGradientButton text="Đăng nhập" onPress={handleLogin} isLoading={isLoading}/>
        <FloatingInput label="Tên đăng nhập"/>
        </Content>
      {/* </View> */}
    </>
  );
}
const styles = StyleSheet.create({


});


export default Login;


