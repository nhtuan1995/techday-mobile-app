import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Actionsheet, ScrollView } from 'native-base';
// components
import Header from '../Components/Header';
import RenderImage from '../Components/RenderImage';
import RenderSvg from '../Components/Svg/Render';
import Banner from '../Components/Banner';
import { CardBadge, CardImage } from '../Components/Card';
import Content from '../Components/Content';
// common
import { arraySegment } from '../Common';
import { Fonts, Styles } from '../Themes';
// images
import positionImg from '../Images/position.png';
import bgEventImg from '../Images/eventBg.png';
//others
const windowWidth = Dimensions.get('window').width;
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

function Home({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  const leftContentRender = useMemo(() => {
    return (
      <View style={Styles.rowStart}>
        <RenderImage name={'avatar'} style={{ width: 40, height: 40 }} />
        <View style={myStyles.info}>
          <Text style={myStyles.name}>Bùi Thị Thúy Trinh</Text>
          <Text style={myStyles.positionInfo}>Chuyên gia công nghệ</Text>
        </View>
      </View>
    );
  }, []);

  const rightContentRender = useMemo(() => {
    return (
      <View style={Styles.rowEnd}>
        <TouchableOpacity style={myStyles.IconSpace}>
          <RenderSvg
            iconName={'Message'}
            color="#213992"
            width={24}
            height={24}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[myStyles.IconSpace, myStyles.bellIcon]}>
          <RenderSvg iconName={'Bell'} color="#213992" width={24} height={24} />
          <View style={myStyles.amountBadge}>
            <Text style={myStyles.amountText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }, []);

  const functions = useMemo(() => {
    const items = [
      { iconName: 'MapFilled', label: 'Sơ đồ sự kiện' },
      { iconName: 'BookSaved', label: 'Lịch trình cá nhân' },
      { iconName: 'CalendarEdit', label: 'Book Meeting' },
      { iconName: 'Building', label: 'Hệ sinh thái sản phẩm' },
      { iconName: 'BookSaved', label: 'Câu chuyện của FPT' },
      {
        iconName: 'playVideo', label: 'Demo',
        screenName: 'DemoTest',
      },
      { iconName: 'Square3DFilled', label: 'Danh sách diễn giả' },
      { iconName: 'Dinner', label: 'Gala Dinner' },
      {
        iconName: 'Building',
        label: 'Hệ sinh thái sản phẩm',
        screenName: 'About',
      },
    ];
    return arraySegment(items, 3);
  }, []);

  const totalFunctions = useMemo(() => {
    const items = [
      {
        title: 'Event',
        functions: [
          { iconName: 'MapFilled', label: 'Sơ đồ sự kiện' },
          { iconName: 'CalendarFilled', label: 'Lịch sự kiện' },
          { iconName: 'TimerFilled', label: 'Lịch trình cá nhân' },
          { iconName: 'Reserve', label: 'Gala Dinner' },
          { iconName: 'BookSaved', label: 'Câu chuyện FPT' },
          {
            iconName: 'Building',
            label: 'Hệ sinh thái sản phẩm',
            screenName: 'About',
          },
          { iconName: 'Square3DFilled', label: 'Danh sách diễn giả' },
          { iconName: 'BriefCase', label: 'Townhall' },
          { iconName: 'Building', label: 'Danh sách' },
          { iconName: 'ClipboardText', label: 'Khảo sát' },
        ],
      },
      {
        title: 'Community',
        functions: [
          { iconName: 'NewFeed', label: 'Bản tin' },
          { iconName: 'UsersProfile', label: 'Liên hệ' },
          { iconName: 'CalendarEdit', label: 'Lịch hẹn' },
          { iconName: 'MessageFilled', label: 'Tin nhắn' },
        ],
      },
      {
        title: 'Support',
        functions: [
          { iconName: 'MessageQuestion', label: 'Q&A' },
          { iconName: 'ArchiveBook', label: 'Event Handbook' },
        ],
      },
    ];
    return items.map(item => ({
      ...item,
      functions: arraySegment(item.functions, 4),
    }));
  }, []);

  const screenRedirect = (screenName, params = {}) => {
    if (!screenName) return;
    setIsOpen(false);
    navigation.navigate(screenName, params);
  };

  return (
    <>
      <Header
        leftContent={leftContentRender}
        rightContent={rightContentRender}
        arrowBack={false}
        hasBoder={true}
        bgColor={'#FFF'}
        headerStyle={{ minHeight: 88, paddingHorizontal: 24 }}
      />
      <Content style={{ backgroundColor: '#fff' }}>
        {/* Start Banner Section */}
        <Banner onPress={() => navigation.navigate('OurStory')} />
        {/* End Banner Section */}
        {/* Start Position Section */}
        <View style={{ marginTop: 16 }}>
          <CardImage
            source={positionImg}
            style={[Styles.rowStart, { position: 'relative' }]}>
            <RenderSvg iconName="Chair" width={32} height={40} />
            <View style={{ marginLeft: 16 }}>
              <Text style={myStyles.eventTitle}>
                Diễn đàn Công Nghệ - Phòng Townhall
              </Text>
              <Text style={myStyles.evenPosition}>Vị trí ghế ngồi: 2A</Text>
            </View>
            <View style={[Styles.botBtn, { backgroundColor: '#F57E25' }]}>
              <RenderSvg iconName="Map" width={16} height={15.3} />
            </View>
          </CardImage>
        </View>
        {/* End Position Section */}
        {/* Start Event Section */}
        <View style={{ marginTop: 24 }}>
          <View style={[Styles.rowSpace, { marginBottom: 16 }]}>
            <Text style={myStyles.cardTitle}>Sự kiện sắp diễn ra</Text>
            <TouchableOpacity onPress={() => {
              screenRedirect('Conference');
            }} activeOpacity={0.6}>
              <Text style={Styles.textLink}>Tất cả</Text>
            </TouchableOpacity>
          </View>
          <CardImage
            source={bgEventImg}
            onPress={() => {
              screenRedirect('AgendaDetail', { eventId: DEFAULT_ITEM._id, });
            }}
            style={{ paddingBottom: 32, position: 'relative' }}>
            <View style={Styles.rowStart}>
              <Text style={myStyles.upcomingText}>Sắp diễn ra trong</Text>
              <Text style={myStyles.minuteText}> 10 phút </Text>
              <Text style={myStyles.upcomingText}>nữa</Text>
            </View>
            <View style={[Styles.rowStart, { marginTop: 32 }]}>
              <View style={Styles.rowStart}>
                <RenderSvg iconName="Timer" color="#fff" />
                <Text style={myStyles.timerText}>9h30</Text>
              </View>
              <View style={[Styles.rowStart, { marginLeft: 16 }]}>
                <RenderSvg iconName="Location" color="#fff" />
                <Text style={myStyles.locationText}>Townhall 1</Text>
              </View>
            </View>
            <Text style={myStyles.eventName}>
              {'Cùng kiến tạo nền tảng cho tương lai'.substring(0, 30)}...
            </Text>
            <Text style={myStyles.eventOwner}>Diễn giả: Mr. Pham Van Khoa</Text>
            <View style={Styles.botBtn}>
              <RenderSvg
                iconName="arrowRight"
                width={16}
                height={16}
                color="#fff"
              />
            </View>
          </CardImage>
        </View>
        {/* End Event Section */}
        {/* Start Function Section */}
        <View style={{ marginTop: 24, marginBottom: 32, paddingBottom: 32 }}>
          <View style={[Styles.rowSpace, { marginBottom: 16 }]}>
            <Text style={myStyles.cardTitle}>Tính năng</Text>
            <TouchableOpacity
              onPress={() => {
                setIsOpen(true);
              }}
              activeOpacity={0.6}>
              <Text style={Styles.textLink}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          {functions.map((funcItem, funcIndex) => {
            console.log();
            return (
              <View
                key={`func ${funcIndex}`}
                style={[
                  myStyles.functions,
                  funcIndex > 0
                    ? {
                      marginTop: 24,
                    }
                    : {},
                ]}>
                {funcItem.map((item, index) => {
                  return (
                    <CardBadge
                      style={
                        index > 0
                          ? { marginLeft: (windowWidth - 48 - 102 * 3) / 2 }
                          : {}
                      }
                      onPress={() => {
                        screenRedirect(item.screenName);
                      }}
                      boxStyle={{ width: 100, height: 128 }}
                      key={`func ${funcIndex} ${index}`}
                      iconName={item.iconName}
                      label={item.label}
                      iconColor={'#2563EB'}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
        {/* End Function Section */}
      </Content>
      <Actionsheet
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        size="full">
        <Actionsheet.Content
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <ScrollView style={myStyles.sheetScroll}>
            {totalFunctions.map((funcItem, funcIndex) => {
              return (
                <View key={`sheet func ${funcIndex}`}>
                  <Text
                    style={[
                      myStyles.sheetTitle,
                      funcIndex > 0 ? { marginTop: 24 } : {},
                    ]}>
                    {funcItem.title}
                  </Text>
                  {funcItem.functions.map((item, index) => {
                    return (
                      <View
                        key={`sheet func ${funcIndex} ${index}`}
                        style={[
                          myStyles.functions,
                          { marginTop: index > 0 ? 24 : 12 },
                        ]}>
                        {item.map((childItem, childIndex) => (
                          <CardBadge
                            key={`sheet func ${funcIndex} ${index} ${childIndex}`}
                            iconName={childItem.iconName}
                            iconColor={'#2563EB'}
                            label={childItem.label}
                            isOutside={true}
                            style={[
                              { width: 75 },
                              childIndex > 0
                                ? { marginLeft: (windowWidth - 48 - 75 * 4) / 3 }
                                : {},
                            ]}
                            onPress={() => {
                              screenRedirect(childItem.screenName);
                            }}
                            boxStyle={myStyles.box}
                            iconWidth={30}
                            iconHeight={30}
                            labelStyle={{ fontSize: 13, marginTop: 8 }}
                          />
                        ))}
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

const myStyles = StyleSheet.create({
  logo: {
    width: 100,
    height: 32,
  },
  IconSpace: {
    marginLeft: 16,
  },
  cardTitle: {
    ...Fonts.weight.semiBold,
    color: '#253645',
    fontSize: 18,
  },
  functions: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  info: {
    marginLeft: 8,
  },
  positionInfo: {
    color: '#838895',
    fontSize: 13,
  },
  name: {
    ...Fonts.weight.semiBold,
    fontSize: 16,
  },
  bellIcon: {
    position: 'relative',
  },
  amountBadge: {
    ...Styles.rowCenter,
    borderRadius: 50,
    backgroundColor: '#DC2626',
    width: 16,
    height: 16,
    position: 'absolute',
    right: -5,
    top: -5,
  },
  amountText: {
    fontSize: 10,
    ...Fonts.weight.bold,
    color: '#fff',
  },
  eventTitle: {
    ...Fonts.weight.medium,
    color: '#C1CBF1',
    fontSize: 13,
  },
  evenPosition: {
    ...Fonts.weight.semiBold,
    color: '#fff',
    fontSize: 22,
    marginTop: 8,
  },
  upcomingText: {
    ...Fonts.weight.medium,
    fontSize: 13,
    color: '#FFC149',
  },
  minuteText: {
    ...Fonts.weight.semiBold,
    fontSize: 16,
    color: '#FFC149',
  },
  timerText: {
    ...Fonts.weight.semiBold,
    fontSize: 24,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  locationText: {
    ...Fonts.weight.medium,
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  eventName: {
    ...Fonts.weight.semiBold,
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 12,
  },
  eventOwner: {
    ...Fonts.weight.medium,
    fontSize: 14,
    color: '#97A8E7',
    marginTop: 8,
  },
  sheetScroll: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
  },
  sheetTitle: {
    ...Fonts.weight.semiBold,
    color: '#253645',
    fontSize: 16,
  },
  box: {
    width: 54,
    height: 54,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

export default Home;
