import React from 'react';
import { TextArea as BaseTextArea } from 'native-base';

import { Colors, Fonts } from 'Themes';

export default function TextArea({
  style = {},
  ...props
}) {
  return (
    <BaseTextArea
      borderRadius={12}
      borderWidth={1}
      borderColor={Colors.border}
      h={124}
      fontSize={16}
      color={Colors.text}
      paddingLeft={4}
      paddingRight={4}
      paddingTop={3}
      paddingBottom={3}
      style={{ ...Fonts.weight.medium, ...style }}
      _focus={{
        backgroundColor: '#fefefe',
        borderColor: Colors.active,
        borderWidth: 0.5,
      }}
      {...props}
    />
  )
}