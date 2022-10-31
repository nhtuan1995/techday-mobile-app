import React, {useMemo} from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
  SafeAreaView,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
//components
import {Content, RenderSvg, Header, BgGradientScreen} from '../../Components';
// images
import Images from '../../Images/';
// styles
import {Styles, Fonts} from '../../Themes';
//others
const screenWidth = Dimensions.get('window').width;

const Detail = ({navigation, route}) => {
  const {title, imgSource, htmlSource, companyUrl} = route?.params;
  const leftContentRender = useMemo(
    () => (
      <TouchableOpacity
        style={myStyles.iconWrapper}
        onPress={() => navigation.goBack()}>
        <RenderSvg iconName="ArrowLeft" width={20} height={20} />
      </TouchableOpacity>
    ),
    [],
  );
  return (
    <BgGradientScreen hasHeader={false} style={{position: 'relative'}}>
      <ImageBackground source={Images.headerBg} style={myStyles.headerBg} />
      <Header
        arrowBack={false}
        bgColor="transparent"
        leftContent={leftContentRender}
      />
      <Content bgColor="transparent" style={{marginTop: 22}}>
        <View style={{marginTop: 50, marginBottom: 28}}>
          {imgSource && (
            <Image source={imgSource} width={95.16} height={58.89}></Image>
          )}
          {title && (
            <Text style={[myStyles.title, {marginTop: imgSource ? 16 : 0}]}>
              {title}
            </Text>
          )}
          {title && <View style={myStyles.titleDivider} />}
          <View style={[htmlSource ? {} : Styles.rowCenter, {minHeight: 350}]}>
            {htmlSource ? (
              <RenderHtml
                contentWidth={screenWidth - 48}
                source={{ html: htmlSource }}
              />
            ) : (
              <Text style={myStyles.noDataHtmlText}>Không có dữ liệu</Text>
            )}
          </View>
          {companyUrl && (
            <TouchableOpacity style={[Styles.rowStart, {marginTop: 40}]}>
              <RenderSvg iconName="Global" width={20} height={20} />
              <Text style={[Styles.textLink, myStyles.textLink]}>
                {companyUrl}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Content>
      <SafeAreaView />
    </BgGradientScreen>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBg: {
    width: '100%',
    paddingHorizontal: 24,
    position: 'absolute',
    height: 188,
  },
  iconWrapper: {
    ...Styles.rowCenter,
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 12,
    shadowColor: 'rgba(160, 186, 224, 0.3)',
    shadowOpacity: 1,
  },
  title: {
    ...Fonts.weight.semiBold,
    fontSize: 32,
    color: '#253645',
  },
  desc: {
    ...Fonts.weight.medium,
    color: '#253645',
    fontSize: 16,
    marginTop: 8,
  },
  titleDivider: {
    width: 40,
    height: 4,
    borderRadius: 4,
    borderColor: '#5278CE',
    borderStyle: 'solid',
    backgroundColor: '#5278CE',
    marginTop: 32,
  },
  textLink: {
    ...Fonts.weight.medium,
    marginLeft: 12,
    fontSize: 16,
  },
  noDataHtmlText: {
    ...Fonts.weight.medium,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Detail;
