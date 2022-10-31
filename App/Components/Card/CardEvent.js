import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../../Styles/AgendaStyles';
import { diffTime } from '../../Common';
import { RenderSvg } from '../index';

export default React.memo(({item, isActive, onPress, style = {}}) => (
  <TouchableOpacity
    style={style}
    activeOpacity={0.7}
    onPress={() => {
      if(onPress) onPress();
    }}>
    <View style={styles.timelineContent}>
      <View style={styles.timelineItemHeader}>
        <View
          style={[
            styles.timelineLine,
            isActive && {backgroundColor: activeColor},
          ]}></View>
        <Text style={styles.timelineTitle}>{item.title}</Text>
        <Text style={styles.timelineDesc}>{item.title_live}</Text>
      </View>

      <View style={[styles.rowFlex]}>
        <RenderSvg iconName="TimerFilled" style={{marginRight: 4}} width={16} />
        <Text style={[styles.textDesc, styles.textSmall]}>
          {diffTime(item.end_time, item.start_time)} phút
        </Text>
      </View>

      <View style={[styles.rowFlex]}>
        <RenderSvg
          iconName="LocationFilled"
          style={{marginRight: 4}}
          width={16}
        />
        <Text style={[styles.textDesc, styles.textSmall]}>{item.location}</Text>
      </View>
    </View>
  </TouchableOpacity>
));
