import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../Components/Header';
import RenderImage from '../Components/RenderImage';
import RenderSvg from '../Components/Svg/Render';
// components
import Banner from '../Components/Banner';
import { CardAction, IconBox, CardActivity } from '../Components/Card';
import Content from '../Components/Content';
// common
import { arraySegment } from '../Common';
import { ScrollView } from 'native-base';
import { Fonts, Styles } from '../Themes'

function Home({ navigation }) {
  const handleLogin = () =>{
    navigation.navigate('Login')
  }
  const leftContentRender = () => {
    return <RenderImage name={'avatar'} width={40} height={40} />;
  };
  const rightContentRender = () => {
    return (
      <View style={Styles.rowEnd}>
        <TouchableOpacity style={myStyles.IconSpace}>
          <RenderImage name={'bell'} width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.IconSpace}>
          <RenderSvg iconName={'iconChat'} width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.IconSpace} onPress={handleLogin}>
          <RenderImage
            name={'avatar'}
            width={40}
            height={40}
            style={Styles.avatar}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const navigateTreasureHunt = () =>{
    navigation.navigate('TreasureHunt');
  }

  const navigateToTuanSample = () =>{
    navigation.navigate('Survey');
  }

  const functions = useMemo(() => {
    const items = [
      { iconName: 'iconBox3D', label: 'Virtual Campus' },
      { iconName: 'iconRecord', label: 'Virtual MC' },
      { iconName: 'iconVirtualTour', label: 'Virtual tour' },
      { iconName: 'iconNavigationArrow', label: 'Treasure Hunt', onPress: navigateTreasureHunt},
      { iconName: 'iconCalendarPlus', label: 'Book Meeting' , onPress : navigateToTuanSample},
      { iconName: 'iconContactWallet', label: 'Contact' },
      { iconName: 'iconCalendarCheck', label: 'My Schedule' },
      { iconName: 'iconCombinedShape', label: 'More' },
    ];
    return arraySegment(items, 4);
  }, []);

  return (
    <>
      <Header
        leftContent={leftContentRender()}
        rightContent={rightContentRender()}
        arrowBack={false}
        hasBoder={true}
        bgColor={'#F2F4F7'}
      />
      <Content>
        <Banner style={{ marginTop: 16 }} />
        <View style={{ marginTop: 24 }}>
          <Text style={myStyles.cardTitle}>You seatcode</Text>
          <CardAction
            desc={'Your seatcode for Ceremony: 1231'}
            buttonText={'Check Map'}
            icon={
              <RenderSvg iconName={'iconCalendarX'} width={77} height={64} />
            }
          />
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={myStyles.cardTitle}>Your upcoming activity</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item, index) => {
              return <CardActivity style={{ marginLeft: index > 0 ? 16 : 0 }} key={`activity ${index}`} desc={'Meeting with Mr Ngoc Anh in the Anh Sau room.'} />
            })}
          </ScrollView>
        </View>
        {/* <View style={{ marginTop: 24 }}>
          <Text style={myStyles.cardTitle}>Your upcoming activity</Text>
          <CardAction
            desc={`You haven't added any activities in your schedule. Let's find out what we have for you.`}
            buttonText={`See Agenda`}
            icon={
              <RenderSvg iconName={'iconCalendarX'} width={77} height={64} />
            }
          />
        </View> */}
        <View style={{ marginTop: 24 }}>
          <Text style={myStyles.cardTitle}>Functions</Text>
          {functions.map((funcItem, funcIndex) => {
            return (
              <View
                key={`func ${funcIndex}`}
                style={[
                  myStyles.functions,
                  { marginTop: funcIndex > 0 ? 16 : 0 },
                ]}>
                {funcItem.map((item, index) => {
                  return (
                    <IconBox
                      key={`func ${funcIndex} ${index}`}
                      iconName={item.iconName}
                      label={item.label}
                      onPress={item.onPress}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </Content>
    </>
  );
}

export default Home;

const myStyles = StyleSheet.create({
  logo: {
    width: 100,
    height: 32,
  },
  IconSpace: {
    marginLeft: 16,
  },
  cardTitle: {
    color: '#667085',
    marginBottom: 16,
    fontSize: 16,
    ...Fonts.weight.bold,
  },
  functions: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
