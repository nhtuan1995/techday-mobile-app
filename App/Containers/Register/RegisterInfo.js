import React, { useMemo, useState } from 'react';
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
import {Colors, Fonts} from '../../Themes';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";


import Content from '../../Components/Content';
import LinearGradientButton from '../../Components/LinearGradientButton';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import LinearGradient from 'react-native-linear-gradient';


const FloatInput = ({ staticLabel, label, maskType, value, setValue, disabled }) => {
  const styles = {
    containerStyle: {
      width: '100%',
      height: 56,
      paddingLeft: 16,
      borderColor: '#EAEEFA',
      borderStyle: 'solid',
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: 'white', 
    }
  }
  return (
    <View style={{ marginBottom: 16, width: '100%' }}>
      <FloatingLabelInput
        label={label}
        value={value}
        maskType={maskType}
        onChangeText={value => { setValue(value) }}
        containerStyles={styles.containerStyle}
        customLabelStyles={{ colorFocused: '#838895', colorBlurred: '#838895', ...Fonts.weight.medium }}
      />
    </View>
  )
}

const StaticPhone = () =>{
  return (
    <View style={{width:'100%', backgroundColor: '#F0F0F0', paddingHorizontal: 16, paddingVertical: 8 , borderRadius:8 }}>
      <Text style={{fontSize:13, lineHeight: 16,...Fonts.weight.medium, marginBottom: 4}}>Số điện thoại</Text>
      <Text style={{fontSize:16, lineHeight: 19,...Fonts.weight.medium}}>0369852548</Text>
    </View>
  )
}

const SelectPosition = () =>{
  const [service, setService] = React.useState("");

  return (
    <View style={{backgroundColor:'white', marginTop: 24, paddingLeft:4, borderRadius:8, height:56, width:'100%', display:'flex', justifyContent:'center'  }}>
    <Select selectedValue={service} minWidth="200" fontSize="14" accessibilityLabel="Choose Service" placeholder="Vai trò *"
      borderRadius="12" borderWidth="0" 
    _selectedItem={{
      bg: "white",
      endIcon: <CheckIcon style={{backgroundColor:'white'}}  />
    }} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </View>

  )
}


function RegisterInfo({ navigation }) {
  const handleBack = () => {
    alert('back to homepage');
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: "0915130295",
    role: '',
  })

  return (
    <ScrollView>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <LinearGradient
        colors={['#E4EFFF', '#FFF']}
        style={[{ flex: 1 }, { paddingHorizontal: 24, minHeight: 800 }]}>

        <Text style={styles.title}>Thông tin tài khoản</Text>
        <FloatInput label="Tên đăng nhập" maskType="text" value={user.name} setValue={(value) => { setUser({ ...user, name: value }) }} />
        <FloatInput label="Email" maskType="text" value={user.email} setValue={(value) => { setUser({ ...user, email: value }) }} />
        <StaticPhone/>
        <SelectPosition/>
        <View style={{width:'100%', marginTop:24  }}>
        <LinearGradientButton label="Lưu thông tin"/>
        </View>
      </LinearGradient>
    </ScrollView>

  );
}

export default RegisterInfo;

const styles = StyleSheet.create({
  title: {
    marginTop: 64,
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#253645',
    marginBottom:24,
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
      marginBottom: 72,
    },

});
