import { StyleSheet } from 'react-native';
import { Styles, Colors, Fonts } from '../Themes';

export default StyleSheet.create({
  ...Styles,
  agendaHeader: {
    marginTop: 8,
    marginBottom: 42,
    paddingHorizontal: 24,
  },
  timelineItem: {
    marginBottom: 12,
    marginLeft: 65,
  },
  timelineTime: {
    maxWidth: 65,
  },
  timelineTextTime: {
    fontSize: 18,
    color: Colors.text,
    ...Styles.fontSemiBold,
  },
  timelineContent: {
    paddingTop: 12,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: "#a0bae0",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  timelineItemHeader: {
    marginBottom: 10,
    paddingLeft: 12,
  },
  timelineTitle: {
    fontSize: 16,
    color: Colors.title,
    marginBottom: 4,
    ...Fonts.weight.semiBold,
  },
  timelineDesc: {
    fontSize: 14,
    ...Fonts.weight.medium,
    color: Colors.text,
  },
  timelineLine: {
    position: 'absolute',
    top: 0.5, left: 0,
    height: '100%',
    width: 4,
    borderRadius: 4,
    backgroundColor: '#6D85DE',
  },
  detailHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  detailTitle: {
    fontSize: 36,
    color: '#fff',
    ...Fonts.weight.bold,
    marginBottom: 4,
  },
  detailSubTitle: {
    fontSize: 22,
    color: '#fff',
    ...Fonts.weight.medium,
  },
  speakerItem: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowColor: '#a0bae0',
  },
});