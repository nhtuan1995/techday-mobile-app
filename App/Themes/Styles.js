import Colors from './Colors';
import Fonts from './Fonts';

export default {
  flexItem: {
    flex: 1,
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.text,
  },
  textBig: {
    color: Colors.text,
    fontSize: 18,
  },
  textSemiBig: {
    color: Colors.text,
    fontSize: 16,
  },
  textMedium: {
    color: Colors.text,
    fontSize: 15,
  },
  textNormal: {
    color: Colors.text,
    fontSize: 14,
  },
  textSmall: {
    color: Colors.text,
    fontSize: 13,
  },
  textSmaller: {
    color: Colors.text,
    fontSize: 12,
  },
  textTiny: {
    color: Colors.text,
    fontSize: 10,
  },
  textDesc: {
    fontSize: 12,
    color: Colors.inactive,
  },
  textContent: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 22,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textAlert: {
    fontSize: 16,
    color: '#fff',
    ...Fonts.weight.medium,
  },
  fontMedium: {
    ...Fonts.weight.medium,
  },
  fontSemiBold: {
    ...Fonts.weight.semiBold,
  },
  fontBold: {
    ...Fonts.weight.bold,
  },
  screenTitle: {
    fontSize: 20,
    ...Fonts.weight.bold,
    color: Colors.text,
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowSpace: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowStart: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowEnd: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  container: {
    flex: 1,
  },
  textLink: {
    color: '#2563EB',
    fontSize: 14,
    ...Fonts.weight.medium,
  },
  circleRound: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: Colors.title,
    ...Fonts.weight.semiBold,
    marginBottom: 12,
  },
  pageTitle: {
    fontSize: 32,
    ...Fonts.weight.semiBold,
    color: Colors.title,
  },
  boxTitle: {
    fontSize: 18,
    ...Fonts.weight.semiBold,
    marginBottom: 16,
    color: Colors.text,
  },
  alignCenter: {
    textAlign: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEEFA',
  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderWidth: 0.5,
    borderColor: '#C1CBF1',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  botBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#2563EB',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
};
