import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Fonts, Styles } from '../../Themes';

const CardAction = ({ buttonText, onPressButton, icon = null, desc }) => {
  return (
    <View style={myStyles.card}>
      {icon && (
        <View style={myStyles.icon}>
          {icon}
        </View>
      )}
      <View style={myStyles.content}>
        <Text style={myStyles.desc}>{desc}</Text>
        <TouchableOpacity
          style={myStyles.button}
          onPress={() => {
            if (onPressButton) onPressButton();
          }}>
          <Text style={myStyles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  card: {
    paddingLeft: 12,
    paddingTop: 16,
    paddingBottom: 24,
    paddingRight: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    shadowColor: 'rgba(33, 57, 146, 0.1)',
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  icon: {
    ...Styles.rowCenter,
    marginRight: 32,
    width: 59,
    height: 46,
    marginLeft: 12,
    marginTop: 16,
  },
  button: {
    marginTop: 18,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#2A49BB',
    borderRadius: 4,
  },
  buttonText: {
    ...Fonts.weight.bold,
    color: 'white',
  },
  desc: {
    fontSize: 16,
    lineHeight: 22,
  },
  content: { alignItems: 'flex-start', flexShrink: 1 }
});

export default React.memo(CardAction);
