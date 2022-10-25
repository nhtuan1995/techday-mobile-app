import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import RenderSvg from '../Components/Svg/Render';

const FloatingInput = ({
  label,
}) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  // <RenderSvg iconName={iconBackName} color={iconBackColor} />


  return (
    <>
      {/* <FloatingLabelInput
        label={'Password'}
        isPassword
        togglePassword={show}
        value={password}
        onChangeText={value => setPassword(value)}
        customShowPasswordComponent={<RenderSvg iconName="passEye" />}
        customHidePasswordComponent={<RenderSvg iconName="passEyeSlash" />}
      /> */}

      <FloatingLabelInput
        label={label}
        value={value}
        onChangeText={value => setValue(value)}
        inputStyles={{borderRadius: 8, padding: 4, borderColor:'#dddd', borderStyle:'solid', color:'red'}}
        labelStyles={{color: 'red'}}
      />

      
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    paddingVertical: 16,
    borderRadius: 8,
    width: '100%'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default FloatingInput;


