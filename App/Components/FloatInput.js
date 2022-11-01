import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {Colors, Fonts} from '../Themes';

const FloatInput = ({
  label = 'Nhập mật khẩu', //components
  isRequired = true, // thêm dấu sao đằng sau label
  isPassword = false,
  value = '', // init Value + state value
  setValue, // setValue + setState
  onFocus,
  onBlur,
  maskType = '',
  errorMessage = 'Sai mật khẩu, vui lòng nhập lại!', //!!! Thêm data là no text, wrong type, wrong pass word...
  ...props //{isFocused, }
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(props.isFocused);
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value);
    if (setValue) setValue(value);
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    if (inputValue === '') {
      if (isRequired) setError(true);
      setIsFocused(false);
    }
    if (onBlur) onBlur();
  };
  return (
    <>
      <View style={styles.box}>
        <FloatingLabelInput
          label={
            <Text>
              {label} {isRequired && <Text style={styles.isRequired}>*</Text>}
            </Text>
          }
          value={inputValue}
          onChangeText={value => {
            setInputValue(value);
          }}
          // maskType={maskType}
          isFocused={isFocused}
          onBlur={handleBlur}
          onFocus={handleFocus}
          containerStyles={[
            styles.containerStyle,
            {
              borderColor:
                error ? 'red' : Colors.border,
            },
          ]}
          customLabelStyles={styles.customLabelStyles}
          labelStyles={styles.labelStyles}
          inputStyles={styles.inputStyles}
          keyboardType={maskType === 'phone' ? 'number-pad' : 'default'}
        />
      </View>
      {inputValue !== '' && error && errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.flatten({
  box: {
    // style cho cái hộp bên ngoài
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
  },
  containerStyle: {
    // Style cho cái float input bên trong
    width: '100%',
    backgroundColor: 'white',
  },
  customLabelStyles: {
    colorFocused: '#838895',
    colorBlurred: '#838895',
    fontSizeFocused: 13,
    fontSizeBlurred: 16,
    topFocused: -12,
    topBlurred: -2,
    leftBlurred: 1,
  },
  labelStyles: {
    ...Fonts.weight.medium,
    dipslay: 'block',
  },
  inputStyles: {
    marginBottom: -15,
    marginLeft: -2,
    fontSize: 16,
    color: '#253645',
    ...Fonts.weight.medium,
  },
  errorMessage: {
    marginTop: 4,
    ...Fonts.weight.medium,
    color: Colors.danger,
  },
  isRequired: {
    color: Colors.danger,
  },
});

export default FloatInput;
