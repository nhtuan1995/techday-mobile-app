import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gallery: {
    flexDirection: 'row',
    marginLeft: -2,
    marginRight: -2,
  },
  thumbnail: {
    paddingLeft: 2,
    paddingRight: 2,
  },
  remainMash: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  navButton: {
    position: 'absolute',
    width: 32, height: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonPrev: {
    left: 16,
  },
  navButtonNext: {
    right: 16,
  },
});