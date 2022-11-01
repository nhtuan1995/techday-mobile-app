import { StyleSheet } from 'react-native';
import { Styles, Colors, Fonts } from '../Themes';

export default StyleSheet.create({
  ...Styles,
  registerHeader:{
    marginTop: 16,
    marginBottom: 20,
    paddingHorizontal: 24,
    height: 240,
  }, 

  customHeader: {
    paddingTop: 48,
    paddingBottom: 24,
    width: '100%',
    marginLeft: -12,
  },

  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#253645',
  },
  
  devider: {
    width: 30,
    height: 4,
    backgroundColor: '#5278CE',
    borderRadius: 4,
    marginTop: 32,
    marginBottom: 16,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  description: {
    color: '#253645',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    marginBottom: 16,
  },


  title: {
    fontSize: 32,
    lineHeight: 40,
    color: '#253645',
    textAlign: 'center',
    marginBottom: 8,
    ...Fonts.weight.semiBold,


  },
  subTitle: {
    fontSize: 16,
    color: '#253645',
    width: '100%',
    textAlign: 'center',
    ...Fonts.weight.medium,

  },
  submitButton: {
    width: '100%',
    marginBottom: 16,
  },
  register: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  //test !!!
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EAEEFA',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: "#213992",
    color: 'black'
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