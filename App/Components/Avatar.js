import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { arrayRandom } from '../Common';
import { Fonts } from '../Themes';
import ImageUri from './ImageUri';

export default function Avatar({
  user = {},
  style = {},
  textStyle = {},
}) {
  const firstChar = (user.name || 'A').substr(0, 1);
  const keyStorage = 'accounts_avatar_colors';
  const colors = [
    '#ffa726',
    '#ef5350',
    '#ec407a',
    '#fdd835',
    '#66bb6a',
    '#26a69a',
    '#00bcd4',
    '#42a5f5',
    '#5c6bc0'
  ];

  const [color, setColor] = useState(null);

  useEffect(() => {
    (async () => {
      let genColor = await getColor(firstChar);
      setColor(genColor);
    })();
  }, [user]);

  const getColor = async (colorKey) => {
    return new Promise((resolve) => {
      try {
        if (colorKey) {
          let colorVal;
          AsyncStorage.getItem(keyStorage).then(async (values) => {
            let objColors = values ? JSON.parse(values) : {};
            if (typeof objColors[colorKey] != 'undefined' && objColors[colorKey]) {
              colorVal = objColors[colorKey];
            } else {
              colorVal = arrayRandom(colors);
              objColors[colorKey] = colorVal;
              await AsyncStorage.setItem(keyStorage, JSON.stringify(objColors));
            }
            resolve(colorVal);
          });
        } else {
          resolve(arrayRandom(colors));
        }
      } catch (e) {
        resolve(arrayRandom(colors));
      }
    });
  }

  return (
    <ImageUri
      uri={user.avatar}
      alt={firstChar}
      style={{
        width: 48,
        height: 48,
        borderRadius: 48,
        backgroundColor: color,
        ...style,
      }}
      textStyle={{
        color: '#fff',
        fontSize: 16,
        ...Fonts.weight.medium,
        ...textStyle,
      }}
    />
  )
}