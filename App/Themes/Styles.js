import Colors from './Colors';
import Fonts from './Fonts';

export default {
  flexItem: {
    flex: 1,
  },
  textNormal: {
    color: Colors.text,
    fontSize: 15,
  },
  textSmall: {
    color: Colors.text,
    fontSize: 12,
  },
  textDesc: {
    fontSize: 12,
    color: Colors.inactive,
  },
  screenTitle: {
    fontSize: 20,
    ...Fonts.weight.bold,
    color: Colors.text,
  },
  rowCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  rowSpace: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  rowStart: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
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
    paddingHorizontal: 24,
    flex: 1,
    marginBottom: 24,
  }
};