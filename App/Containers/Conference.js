import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
//components
import {
  AnimatedScreen,
  BgGradientScreen,
  Header,
  RenderSvg,
  Content,
  LinearGradientButton,
  CardEvent,
} from '../Components/';
// styles
import { Styles, Fonts } from '../Themes';
//others
const DEFAULT_ITEM = {
  _id: '6350ff569838532e8bd2208711',
  date: '2022-07-20T17:00:00.000Z',
  description: 'Welcoming guests to the event',
  end_time: '2022-10-28T12:27:40.083Z',
  location: 'Grand Hall',
  start_time: '2022-10-28T11:27:40.083Z',
  timeKey: '2022-10-28_18:27',
  title: 'Welcome 11',
  title_live: 'Overcome Uncertainties With Business Transformation',
};

const Conference = ({ animatedProps, navigation }) => {
  const tabList = useMemo(() => {
    return [
      { label: 'Sự kiện', iconName: 'Clock' },
      { label: 'Diễn giả', iconName: 'TagUser' },
    ];
  }, []);
  const [scrollHeight, SetScrollHeight] = useState(0);

  const [tabActive, setTabActive] = useState(0);

  return (
    <AnimatedScreen style={{ flex: 1 }} {...animatedProps}>
      <BgGradientScreen hasHeader={false}>
        <Header bgColor={scrollHeight >= 154 ? '#fff' : "transparent"} title={scrollHeight >= 154 ? 'Townhall' : null} arrowBack={scrollHeight >= 156 ? true : false} />
        <Content
          bgColor="transparent"
          onScroll={event => {
            const height = event.nativeEvent.contentOffset.y;
            SetScrollHeight(height);
          }}>
          <Text style={myStyles.title}>Townhall</Text>
          <View style={[Styles.rowStart, { marginTop: 12 }]}>
            <RenderSvg iconName="Union" />
            <Text style={myStyles.desc}>Hành trình hướng tới tương lai</Text>
          </View>
          <View style={[Styles.rowSpace, { marginTop: 32 }]}>
            {tabList.map((tabItem, tabIndex) => (
              <LinearGradientButton
                key={`event button ${tabIndex}`}
                buttonStyle={myStyles.button}
                backgroundColor={tabIndex === tabActive ? null : 'white'}
                onPress={() => setTabActive(tabIndex)}>
                <RenderSvg
                  iconName={tabItem.iconName}
                  width={20}
                  height={20}
                  color={tabActive === tabIndex ? 'white' : '#213992'}
                />
                <Text
                  style={[
                    myStyles.eventText,
                    { color: tabActive === tabIndex ? 'white' : '#213992' },
                  ]}>
                  {tabItem.label}
                </Text>
              </LinearGradientButton>
            ))}
          </View>
          {tabActive === 1 && (
            <>
              <View style={[Styles.rowStart, { marginTop: 32 }]}>
                <RenderSvg iconName="ClockFilled" color="#16B14B" />
                <Text style={myStyles.upcomingEventText}>
                  Sự kiện đang diễn ra
                </Text>
              </View>
              <WebView
                style={{ marginTop: 20, width: '100%', height: 197 }}
                javaScriptEnabled={true}
                allowingReadAccessToURL={true}
                allowsFullscreenVideo={true}
                allowsLinkPreview={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.youtube.com/embed/cqyziA30whE' }}
              />
            </>
          )}

          <View style={[Styles.rowStart, { marginTop: 32 }]}>
            <RenderSvg iconName="TimerFilled" color="#F57E25" />
            <Text style={myStyles.upcomingEventText}>Sự kiện sắp diễn ra</Text>
          </View>

          <View style={myStyles.upcomingList}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <CardEvent
                onPress={() =>
                  navigation.navigate('AgendaDetail', {
                    eventId: DEFAULT_ITEM._id,
                  })
                }
                key={`upcoming event ${item}`}
                style={{ marginTop: index > 0 ? 16 : 0 }}
                item={DEFAULT_ITEM}
              />
            ))}
          </View>
        </Content>
      </BgGradientScreen>
    </AnimatedScreen>
  );
};

const myStyles = StyleSheet.create({
  title: {
    ...Fonts.weight.semiBold,
    fontSize: 32,
    color: '#213992',
  },
  desc: {
    ...Fonts.weight.medium,
    marginLeft: 12,
    fontSize: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: 156,
    height: 44,
    borderRadius: 100,
  },
  eventText: {
    ...Fonts.weight.medium,
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  upcomingEventText: {
    ...Fonts.weight.semiBold,
    marginLeft: 8,
    fontSize: 22,
    color: '#253645',
  },
  upcomingList: {
    marginTop: 16,
    marginBottom: 44,
  },
});

export default Conference;
