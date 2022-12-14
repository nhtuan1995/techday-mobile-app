import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import {Metrics, Colors, Fonts} from '../../Themes';

import BgGradientScreen from '../../Components/BgGradientScreen';
import RenderSvg from '../../Components/Svg/Render';
import RenderImage from '../../Components/RenderImage';
import File from '../../Components/File';

import LinearGradientButton from '../../Components/LinearGradientButton';

//Test doc
const documents = [
  {
    _id: '6350ff569838532e8bd22081',
    name: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.png',
    link: 'https://i.ibb.co/GQKL1Kr/Rectangle-30006.png',
  },
  {
    _id: '6350ff569838532e8bd22082',
    name: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.pdf',
    link: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.pdf',
  },
  {
    _id: '6350ff569838532e8bd22083',
    name: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.ppt',
    link: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.ppt',
  },
  {
    _id: '6350ff569838532e8bd22084',
    name: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.xlsx',
    link: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.xlsx',
  },
  {
    _id: '6350ff569838532e8bd22085',
    name: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.doc',
    link: 'storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.doc',
  },
];

const Video = ({length, thumbnail}) => {
  return (
    <>
      <TouchableOpacity style={{paddingRight: 8}}>
        <View style={myStyles.videoWrapper}>
          <RenderImage
            name="sampleVideoThumbnail"
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
          <View style={myStyles.playButton}>
            <RenderSvg iconName="playVideo" />
          </View>
        </View>
        <Text style={myStyles.videoLength}>{length}</Text>
      </TouchableOpacity>
    </>
  );
};

const Detail = ({navigation}) => {
  return (
    <BgGradientScreen
      headerProps={{
        title: 'FPT Telecom',
        bgColor: '#fff',
        rightContent: (
          <TouchableOpacity style={[myStyles.pressButton, {marginRight: -8}]}>
            <RenderSvg iconName="iconShare" />
          </TouchableOpacity>
        ),
      }}>
      <ScrollView>
        <View style={myStyles.headerBanner}>
          <RenderImage
            name="exhibitionDetail"
            style={{
              width: '100%',
              height: 225,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <Text style={myStyles.headerTitle}>Metaverse, Blockchain & RPA</Text>
        </View>

        <View style={myStyles.advertising}>
          <Text style={myStyles.advertisingText}>
            H??y ?????n tr???i nghi???m booth c??ng ngh??? v?? thu th???p{' '}
            <Text style={{fontWeight: 'bold'}}>QR code</Text> ????? nh???n ???????c nh???ng
            ph???n qu?? h???p d???n!
          </Text>
          <LinearGradientButton
            label={<Text>Scan ngay</Text>}
            onPress={() => alert('Scan ! ')}
            width={152}
            height={36}
            containerStyle={myStyles.qrButtonFull}
          />
        </View>

        <View style={{marginTop: 24, paddingHorizontal: 24}}>
          <Text style={myStyles.partTitle}>N???i dung</Text>
          <Text style={myStyles.partText}>
            Trong su???t 34 n??m, FPT ???? v?? ??ang ti???p t???c t???n l???c ???ng d???ng khoa h???c
            c??ng ngh??? ????? n??ng t???m v?? ph???ng s??? cu???c s???ng c???a con ng?????i.
            {'\n'}
            {'\n'}
            V???i s??? ??a d???ng v?? b??? d??y kinh nghi???m ch??ng t??i mong mu???n ?????ng h??nh
            v???i qu?? kh??ch h??ng c??ng ??i ?????n th??nh c??ng.
          </Text>
        </View>

        <View style={{marginTop: 24, paddingHorizontal: 24}}>
          <Text style={myStyles.partTitle}>Video</Text>
          <View style={myStyles.videoList}>
            <Video length="15:00" thumbnail="" />
            <Video length="19:00" thumbnail="" />
          </View>
        </View>

        <View style={{marginTop: 24, paddingHorizontal: 24}}>
          <Text style={myStyles.partTitle}>T??i li???u</Text>
          {documents?.map((doc, index) => (
            <File file={doc} key={index} />
          ))}
        </View>

        <View style={{marginTop: 50, paddingBottom:43, paddingHorizontal: 24}}>
          <LinearGradientButton
            label="Chat v???i chuy??n gia"
            onPress={() => alert('Chat v???i chuy??n gia ! ')}
            width="100%"
            height={56}
          />
        </View>
      </ScrollView>
    </BgGradientScreen>
  );
};

const myStyles = StyleSheet.create({
  topContent: {
    paddingTop: 44,
    marginBottom: 24,
  },
  subTitleLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 20,
  },
  subTitle: {
    ...Fonts.weight.medium,
    fontSize: 16,
    marginLeft: 16,
    color: '#253645',
  },
  pressButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerBanner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 225,
  },
  headerTitle: {
    ...Fonts.weight.semiBold,
    color: 'white',
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  advertising: {
    width: '100%',
    height: 158,
    backgroundColor: '#6D85DE',
    padding: 24,
    position: 'relative',
  },
  advertisingText: {
    ...Fonts.weight.medium,
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
  },
  qrButtonFull: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  partTitle: {
    ...Fonts.weight.semiBold,
    fontSize: 18,
    lineHeight: 24,
    color: '#253645',
    marginBottom: 12,
  },
  partText: {
    ...Fonts.weight.medium,
    fontSize: 16,
    lineHeight: 22,
    color: '#253645',
  },
  videoList: {
    display: 'flex',
    flexDirection: 'row',
  },
  videoWrapper: {
    width: 134,
    height: 80,
  },
  playButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  videoLength: {
    ...Fonts.weight.medium,
    fontSize: 12,
    lineHeight: 20,
  },
});

export default Detail;
