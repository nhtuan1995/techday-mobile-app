import React from 'react';
import { SvgXml } from 'react-native-svg';
import xmls from './xmls';

export default function Render (props) {
  const {
    width = 24,
    height = 24,
    iconName = null,
    color = '#ccc',
    style = {},
    nullElement = null,
  } = props;

  if (!iconName) {
    return nullElement;
  }

  const xml = xmls[iconName];
  if (!xml) {
    return nullElement;
  }

  return (
    <SvgXml
      style={style}
      xml={xmls[iconName]({color: color})}
      width={width}
      height={height || width}
    />
  )
}
