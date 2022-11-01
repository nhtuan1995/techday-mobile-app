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

function Agenda({ animatedProps, navigation }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [total, setTotal] = useState(0);

  const dataKeys = Object.keys(data);
  const formatTimeKey = 'YYYY-MM-DD_HH:mm';
  const activeColor = '#F57E25';
  const _scrollList = useRef(null);

  const _timeoutScroll = useRef(null);
  const _numScroll = useRef(0);
  const _scrollInterval = useRef(null);

  useEffect(() => {
    initScroll();
  }, [data]);

  useEffect(() => {
    if (total < 5 || sectionIndex < 2 || isScrolled) {
      return;
    }
    _scrollInterval.current = setInterval(() => {
      _numScroll.current += 1;
      console.log('trying scroll ', _numScroll.current);
      scrollToSection(sectionIndex);

      if (_numScroll.current > 5) {
        clearInterval(_scrollInterval.current);
      }
    }, 700);

    return () => {
      clearInterval(_scrollInterval.current);
    }
  }, [total, sectionIndex, isScrolled]);

  useEffect(() => {
    getData();
  }, []);

  const initScroll = () => {
    if (Object.keys(data).length < 2) {
      return;
    }
    clearTimeout(_timeoutScroll.current);
    _timeoutScroll.current = setTimeout(() => {
      let index = getCurrentSectionIndex(data);
      if (index) {
        scrollToSection(index);
      }
    }, 500);
  }

  const getCurrentSectionIndex = (groupData) => {
    let index = null;
    let aryKeys = Object.keys(groupData);
    for (let i = 0; i < aryKeys.length; i++) {
      let key = aryKeys[i];
      if (isActiveTime(key, aryKeys)) {
        index = i;
        break;
      }
    }
    return index;
  }

  const getData = () => {
    setData({});
    setIsScrolled(false);
    _numScroll.current = 0;

    setLoading(true);
    getAgendas().then(response => {
      setData(response.agendas);
      let initIndex = getCurrentSectionIndex(response.agendas);
      setSectionIndex(initIndex);
      setTotal(response.total);
    }).catch(err => {
      console.log('error', err);
    }).finally(_ => {
      setLoading(false);
    });
  }

  const scrollToSection = (index) => {
    if (!_scrollList.current) {
      return;
    }
    _scrollList.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex: index,
    });
  }

  const isActiveTime = (time, aryKeys = null) => {
    if (aryKeys === null) {
      aryKeys = dataKeys;
    }
    const timeIndex = aryKeys.findIndex(k => k === time);
    if (timeIndex < 0) {
      return false;
    }
    const now = moment().format(formatTimeKey);
    let nextTime = aryKeys[timeIndex + 1];
    if (typeof nextTime === 'undefined') {
      nextTime = moment(time, formatTimeKey).add(1, 'days').format(formatTimeKey);
    }
    return (time <= now && now < nextTime);
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
            style={[styles.circleRound, { marginBottom: 16 }]}
          >
            <RenderSvg iconName="iconChevronLeft" color="#22313F" width={22} style={{ marginLeft: -2 }} />
          </TouchableOpacity>

          <View>
            <Text style={[styles.pageTitle]}>Chương trình</Text>
            <Text style={[styles.pageTitle, { marginBottom: 6 }]}>Sự kiện</Text>
            <Text style={styles.textNormal}>Hôm nay, {moment().format('DD/MM/YYYY')}</Text>
          </View>
        </View>

        {dataKeys.length > 0 ? (
          <SectionList
            ref={ref => _scrollList.current = ref}
            sections={dataKeys.map(key => ({ timeKey: key, data: data[key] || [] }))}
            keyExtractor={(item, index) => item._id + '_' + index}
            renderItem={({item, index}) => <Item item={item} index={index} />}
            renderSectionHeader={({ section: { timeKey } }) => <GroupHeader timeKey={timeKey} />}
            stickySectionHeadersEnabled={true}
            onScrollToIndexFailed={(info) => {
              setTimeout(() => {
                console.log('scroll error', sectionIndex, info);
                scrollToSection(sectionIndex);
              }, 500);
            }}
            initialNumToRender={60}
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingBottom: 32,
              flexGrow: 1,
            }}
            onScroll={() => {
              if (!isScrolled) {
                setIsScrolled(true);
              }
            }}
            scrollEventThrottle={400}
            refreshing={true}
          />
        ) : (
          <View style={styles.flexCenter}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text style={[styles.alignCenter, styles.textDesc]}>
                Không có sự kiện nào!
              </Text>
            )}
          </View>
        )}
      </BgGradientScreen>
    </AnimatedScreen>
  )
}

export default Agenda;