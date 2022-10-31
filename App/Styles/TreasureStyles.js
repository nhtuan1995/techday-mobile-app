import { StyleSheet } from 'react-native';
import { Styles, Colors, Fonts } from '../Themes';

export default StyleSheet.create({
  ...Styles,
  headerBackground: {
    width: 315,
    height: 230,
  },

  headerRight: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 24,
    bottom: 0
  },

  headerLeft: {
    position: 'absolute',
    left: 24,
    bottom: 0,
  },

  textNormal: {
    ...Styles.fontNormal,
    fontSize: 16,
    lineHeight: 22,
    color: Colors.text
  },

  textHeader: {
    ...Styles.fontSemiBold,
    color: Colors.active,
    fontSize: 32,
    lineHeight: 32,
  },

  treasureHeader: {
    marginTop: 16,
    marginBottom: 20,
    paddingHorizontal: 24,
    height: 240,

  },

  divider: {
    height: 0,
    width: '100%',
    borderBottomColor: '#C1CBF1',
    borderStyle: 'dashed',
    borderBottomWidth: 1,
  },

  description: {
    ...Styles.medium,
    fontSize: 16,
    lineHeight: 22,
  },

  highLight: {
    ...Styles.fontSemiBold,
  },

  orangeText: {
    ...Styles.fontMedium,
    color: Colors.warningColor,
  },

  buttonText: {
    ...Styles.fontSemiBold,
    fontSize: 18,
    color: 'white',
  },

  achieveButton: {
    width: 56,
    height: 56,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },


  //AchieveMent 

  logoCount: {
    width: '100%',
    height: 52,
    borderRadius: 8,
    backgroundColor: 'white', 
    display:'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  scanCircleButton:{
    position:'absolute', 
    bottom: 55, 
    right: 25
  }




});