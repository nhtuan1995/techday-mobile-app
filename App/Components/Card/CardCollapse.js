import React, {useState, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  View,
} from 'react-native';
// components
import RenderSvg from '../Svg/Render';
import {Fonts} from '../../Themes';
import GradientButton from '../LinearGradientButton';
// images

const AngleIcon = ({direction = 'down'}) => {
  const ANGLE = {
    UP: {
      deg: '180deg',
      color: 'white',
      bg: '#F57E25',
    },
    DOWN: {
      deg: '0deg',
      color: 'black',
      bg: 'rgba(255, 255, 255, 0.75)',
    },
  };

  return (
    <Animated.View
      style={[
        myStyles.angleIcon,
        {
          transform: [{rotate: ANGLE[direction.toUpperCase()].deg}],
        },
        {backgroundColor: ANGLE[direction.toUpperCase()].bg},
      ]}>
      <RenderSvg
        iconName="angleDown"
        color={ANGLE[direction.toUpperCase()].color}
        width="10"
        height="20"
      />
    </Animated.View>
  );
};

const CardCollapse = ({title = 'Departure', children}) => {
  const [angle, setAngle] = useState('down');
  const handlePress = () => {
    setAngle(angle === 'down' ? 'up' : 'down');
  };
  return (
    <View style={[{width: '100%'}, {...myStyles.wrapper}]}>
      <GradientButton onPress={handlePress} height={52}>
        <View style={myStyles.button}>
          <AngleIcon direction={angle} />
          <Text style={myStyles.title}>{title}</Text>
        </View>
      </GradientButton>
      <View style={myStyles.descriptionBox}>
        <Text style={myStyles.description}>
          Hệ sinh thái FPT luôn tận tâm chăm sóc sức khoẻ thể chất và tinh thần
          cho các thế hệ tương lai của đất nước bằng các dịch vụ và sản phẩm.
        </Text>
        {angle === 'up' && children}
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  wrapper: {
    shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowRadius: 12,
      shadowOpacity: 1,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 12,
      shadowColor: 'rgba(160, 186, 224, 0.3)',
      borderColor: '#EAEEFA',
      borderBottomStartRadius: 12,
      borderBottomEndRadius: 12,
      backgroundColor:'white',
  },
  angleIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16,
  },
  title: {
    ...Fonts.weight.semiBold,
    paddingLeft: 12,
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
  },
  descriptionBox: {
    transform: [
      {
        translateY: -20,
      },
    ],
    zIndex:-1,
    minHeight: 120,
    backgroundColor: 'white',
    paddingHorizontal:16,
    paddingTop: 36,
  },
  description: {
    ...Fonts.weight.medium,
    fontSize: 16,
    color: '#253645',
    lineHeight: 19,
    marginBottom: 27,
  },
});

export default React.memo(CardCollapse);
