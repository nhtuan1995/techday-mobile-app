import {Platform} from 'react-native';

const weight = {
  light: {
    ...Platform.select({
      ios: {
        fontWeight: '300',
      },
      android: {
        fontFamily: 'Roboto_Light',
      },
    })
  },
  normal: {
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
      android: {
        fontFamily: 'Roboto_Regular',
      },
    })
  },
  medium: {
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontFamily: 'Roboto_Medium',
      },
    })
  },
  bold: {
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
        fontFamily: 'Roboto_Bold',
      },
    })
  },
}

export default {
  weight,
};
