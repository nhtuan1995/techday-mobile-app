import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SectionList,
} from 'react-native';
import moment from 'moment';

import AnimatedScreen from '../../Components/AnimatedScreen';
import RenderSvg from '../../Components/Svg/Render';
import BgGradientScreen from '../../Components/BgGradientScreen';
import { getAgendas } from '../../Services/AgendaService';
import { diffTime } from '../../Common';

import styles from '../../Styles/AgendaStyles';

function Agenda({ animatedProps, navigation, route }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const dataKeys = Object.keys(data);
  const formatTimeKey = 'YYYY-MM-DD_HH:mm';
  const activeColor = '#F57E25';
  const _scroll = useRef();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    initScroll();
  }, [data]);

  useEffect(() => {
    let navListener = navigation.addListener('focus', () => {
      initScroll();
    });

    return navListener;
  }, [navigation]);

  const initScroll = () => {
    if (dataKeys.length < 1) {
      return;
    }
    setTimeout(() => {
      let index = null;
      dataKeys.map(key => {
        if (index === null) {
          index = isActiveTime(key, true);
        }
      });
      if (index) {
        scrollToSection(index);
      }
    }, 500);
  }

  const getData = () => {
    setLoading(true);
    getAgendas().then(response => {
      setData(response.agendas);
    }).catch(err => {
      console.log('error', err);
    }).finally(_ => {
      setLoading(false);
    });
  }

  const scrollToSection = (index) => {
    if (!_scroll.current) {
      return;
    }
    _scroll.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex: index,
      viewPosition: 0,
      viewOffset: 0,
    });
  }

  const isActiveTime = (time, returnIndex = false) => {
    const timeIndex = dataKeys.findIndex(k => k === time);
    const now = moment().format(formatTimeKey);
    let nextTime = dataKeys[timeIndex + 1];
    if (typeof nextTime === 'undefined') {
      nextTime = moment(time, formatTimeKey).add(1, 'days').format(formatTimeKey);
    }
    let isActive = time <= now && now < nextTime;
    if (returnIndex) {
      return isActive ? timeIndex : null;
    }
    return isActive;
  }

  const GroupHeader = ({ timeKey }) => {
    const isActive = isActiveTime(timeKey);
    return (
      <View style={styles.timelineTime}>
        <Text style={[styles.timelineTextTime, isActive && {color: activeColor}]}>
          {moment(timeKey, formatTimeKey).format('HH:mm')}
        </Text>
      </View>
    )
  }

  const Item = ({ item, index }) => {
    const isActive = isActiveTime(item.timeKey);
    return (
      <TouchableOpacity
        style={[styles.timelineItem, index === 0 && {marginTop: -20}]}
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('EventDetail', { eventId: item._id });
        }}
      >
        <View style={styles.timelineContent}>
          <View style={styles.timelineItemHeader}>
            <View style={[styles.timelineLine, isActive && {backgroundColor: activeColor}]}></View>
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
            <RenderSvg iconName="LocationFilled" style={{marginRight: 4}} width={16} />
            <Text style={[styles.textDesc, styles.textSmall]}>{item.location}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <AnimatedScreen style={{ flex: 1 }} {...animatedProps}>
      <BgGradientScreen
        hasHeader={false}
      >
        <View style={styles.agendaHeader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.circleRound, { marginBottom: 32 }]}
          >
            <RenderSvg iconName="iconChevronLeft" color="#22313F" width={22} style={{ marginLeft: -2 }} />
          </TouchableOpacity>

          <View>
            <Text style={[styles.pageTitle]}>Chương trình</Text>
            <Text style={[styles.pageTitle, { marginBottom: 6 }]}>Sự kiện</Text>
            <Text style={styles.textNormal}>Hôm nay, {moment().format('DD/MM/YYYY')}</Text>
          </View>
        </View>

        <SectionList
          ref={_scroll}
          sections={dataKeys.map(key => ({ timeKey: key, data: data[key] }))}
          keyExtractor={(item, index) => index + ''}
          renderItem={({item, index}) => <Item item={item} index={index} />}
          renderSectionHeader={({ section: { timeKey } }) => <GroupHeader timeKey={timeKey} />}
          stickySectionHeadersEnabled={true}
          ListEmptyComponent={
            <View style={styles.flexCenter}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={[styles.alignCenter, styles.textDesc]}>
                  Không có sự kiện nào!
                </Text>
              )}
            </View>
          }
          onScrollToIndexFailed={() => {
            setTimeout(info => {
              scrollToSection(0);
            }, 500);
          }}
          initialNumToRender={60}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 24,
            flexGrow: 1,
          }}
          scrollEventThrottle={400}
        />
      </BgGradientScreen>
    </AnimatedScreen>
  )
}

export default Agenda;