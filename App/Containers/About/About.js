import React, {useMemo} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
//components
import {
  Content,
  RenderSvg,
  Header,
  CardInfo,
  BgGradientScreen,
} from '../../Components';
// styles
import {Styles, Fonts} from '../../Themes';
// images
import Images from '../../Images/';
// others
const DEFAULT_SOURCE_HTML = `

<p style="font-size: 16px; font-weight: 500">
  FPT là công ty tiên phong chuyển đổi số và dẫn đầu về tư vấn, cung cấp,
  triển khai các dịch vụ, giải pháp công nghệ - viễn thông. Chúng tôi đồng
  hành cùng các khách hàng tại 27 quốc gia và vùng lãnh thổ trên toàn cầu
  hiện thực hóa chiến lược, mục tiêu phát triển kinh doanh dựa trên công
  nghệ.
</p>
<img
  style="border-radius: 8px; width: 100%; height: auto; object-fit: cover;"
  src="https://i.chungta.vn/2017/12/28/FPT-view-2-copy-1514429781_1200x0.jpg" />
<p style="font-size: 16px; font-weight: 500">
  Với kinh nghiệm triển khai dự án trên phạm vi toàn cầu trong suốt hơn ba
  thập kỷ qua, chúng tôi giúp khách hàng vượt qua những thách thức, rào
  cản và đạt được hiệu quả cao nhất trong hành trình chuyển đổi số. Dựa
  trên những công nghệ mới nhất trí tuệ nhân tạo, phân tích dữ liệu lớn,
  điện toán đám mây, tự động hóa, kết nối vạn vật…, chúng tôi đưa ra những
  giải pháp, dịch vụ công nghệ tiên tiến giúp khách hàng chủ động, linh
  hoạt thích ứng trong mọi bối cảnh. Tìm hiểu thêm về chúng tôi: Giá trị
  cốt lõi Tầm nhìn chiến lược Mạng lưới hoạt động Đội ngũ lãnh đạo Trách
  nhiệm xã hội Đối tác
</p>
`;

const About = ({navigation}) => {
  const companies = useMemo(
    () => [
      {
        title: 'Tập đoàn FPT',
        htmlSource: DEFAULT_SOURCE_HTML,
        imgSource: Images.logoFPT,
        companyUrl: 'https://fpt.com.vn',
      },
      {
        title: 'FPT Telecom',
        desc: 'Công ty CP Viễn thông FPT',
        htmlSource: DEFAULT_SOURCE_HTML,
        imgSource: Images.logoFPT,
        companyUrl: 'https://fpt.com.vn',
      },
      {
        title: 'FPT Software',
        desc: 'Công ty TNHH Phần mềm FPT',
        htmlSource: DEFAULT_SOURCE_HTML,
        imgSource: Images.logoFPT,
        companyUrl: 'https://fpt.com.vn',
      },
      {
        title: 'FPT Information System',
        desc: 'Công ty CP Hệ thống thông tin  FPT',
        htmlSource: DEFAULT_SOURCE_HTML,
        imgSource: Images.logoFPT,
        companyUrl: 'https://fpt.com.vn',
      },
      {
        title: 'FPT Education',
        desc: 'Tổ chức Giáo dục FPT',
        htmlSource: DEFAULT_SOURCE_HTML,
        imgSource: Images.logoFPT,
        companyUrl: 'https://fpt.com.vn',
      },
      {
        title: 'FPT Retail',
        desc: 'Công ty CP Bán lẻ FPT',
        htmlSource: DEFAULT_SOURCE_HTML,
        imgSource: Images.logoFPT,
        companyUrl: 'https://fpt.com.vn',
      },
      {
        title: 'FPT Digital',
        desc: 'Công ty TNHH Chuyển đổi số FPT',
        htmlSource: DEFAULT_SOURCE_HTML,
        imgSource: Images.logoFPT,
        companyUrl: 'https://fpt.com.vn',
      },
    ],
    [],
  );
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
  const goDetail = (params = {}) => {
    navigation.navigate('AboutDetail', params);
  };
  return (
    <BgGradientScreen hasHeader={false} style={{position: 'relative'}}>
      {/* start customize header section */}
      <ImageBackground source={Images.headerBg} style={myStyles.headerBg} />
      <Header
        arrowBack={false}
        bgColor="transparent"
        leftContent={leftContentRender}
      />
      {/* end customize header section */}
      <Content bgColor="transparent" style={{marginTop: 22}}>
        <View style={{marginTop: 50, marginBottom: 28}}>
          <Text style={myStyles.title}>Về FPT</Text>
          <Text style={myStyles.desc}>
            Với sự đa dạng và bề dày kinh nghiệm chúng tôi mong muốn đồng hành
            với quý khách hàng cùng đi đến thành công.
          </Text>
          <View style={{marginTop: 40}}>
            {companies.map((companyItem, companyIndex) => (
              <CardInfo
                key={`company ${companyIndex}`}
                title={companyItem.title}
                desc={companyItem.desc}
                onPress={() => {
                  goDetail(companyItem);
                }}
                style={companyIndex > 0 ? {marginTop: 8} : {}}
                imgSource={Images.logoFPT}
                imgStyle={{width: 30, height: 18.56}}
              />
            ))}
          </View>
        </View>
      </Content>
      <SafeAreaView />
    </BgGradientScreen>
  );
};

const myStyles = StyleSheet.create({
  header: {
    ...Styles.rowStart,
    width: '100%',
    height: 188,
    paddingHorizontal: 24,
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
});

export default About;
