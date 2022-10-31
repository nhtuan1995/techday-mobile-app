import React from 'react';
import { Select as BaseSelect, CheckIcon } from 'native-base';

import { Colors, Fonts } from '../../Themes';
import RenderSvg from '../Svg/Render';

export default function Select({
  options = [],
  style = {},
  ...props
}) {
  return (
    <BaseSelect
      minWidth={200}
      borderColor={Colors.border}
      borderWidth={1}
      borderRadius={8}
      color={Colors.text}
      style={{
        fontSize: 16,
        height: 48,
        ...Fonts.weight.medium,
        ...style,
      }}
      _selectedItem={{
        color: Colors.text,
        endIcon: <RenderSvg iconName="check" color={Colors.active} />
      }}
      dropdownIcon={<RenderSvg iconName="caretDown" style={{ marginRight: 8 }} />}
      {...props}
    >
      {options.map(option => (
        <BaseSelect.Item
          key={option.value}
          label={option.label}
          value={option.value}
          _pressed={{
            backgroundColor: '#eee',
          }}
        />
      ))}
    </BaseSelect>
  )
}