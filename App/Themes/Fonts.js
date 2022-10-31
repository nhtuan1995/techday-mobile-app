import {Platform} from 'react-native';

const weight = {
  normal: {
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
      android: {
        fontFamily: 'SVNGilroy',
      },
    })
  },
  medium: {
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontFamily: 'SVNGilroy_Medium',
      },
    })
  },
  semiBold: {
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
        fontFamily: 'SVNGilroy_SemiBold',
      },
    })
  },
  bold: {
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
      android: {
        fontFamily: 'SVNGilroy_Bold',
      },
    })
  },
};

export default {
  weight,
};
