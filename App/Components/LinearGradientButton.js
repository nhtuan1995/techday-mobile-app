import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {UIActivityIndicator} from 'react-native-indicators';
import {Colors, Fonts} from '../Themes/index';

const LinearGradientButton = ({
  label,
  onPress,
  textStyle = {},
  buttonStyle,
  containerStyle,
  backgroundColor,
  borderRadius = 8,
  width = '100%',
  height = 44,
  textAlign = 'center',
  isLoading = false,
  fontSize = 16,
  fontWeight = '600',
  children,
  ...props
}) => {
  const BG_COLOR = {
    LOADING: ['#F0F0F0', '#F0F0F0'],
    NON: backgroundColor
      ? [backgroundColor, backgroundColor]
      : ['#192A80', '#0B3EB1', '#0A48CD'],
  };

  const TEXT_COLOR = {
    LOADING: '#838895',
    NON: 'white',
  };

  const handlePress = () => {
    if (onPress) onPress();
  };
  const styles = {
    linearGradient: {
      width: width,
      height: height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius,
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: textAlign,
      alignItems: 'center',
    },
  };
  return (
    <>
      <TouchableOpacity style={{...containerStyle}} onPress={handlePress} {...props}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[...BG_COLOR[isLoading ? 'LOADING' : 'NON']]}
          style={{...styles.linearGradient, ...buttonStyle}}>
            <View style={styles.content}>
              {!isLoading ? (
                label ? (
                  <Text
                    style={[
                      {
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        color: TEXT_COLOR[isLoading ? 'LOADING' : 'NON'],
                        ...Fonts.weight.semiBold,
                      },
                      textStyle,
                    ]}>
                    {label}
                  </Text>
                ) : (
                  children
                )
              ) : (
                <UIActivityIndicator
                  style={{marginLeft: 8, flex: 0}}
                  color="#213992"
                  count={8}
                  size={20}
                />
              )}
            </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};
export default React.memo(LinearGradientButton);
