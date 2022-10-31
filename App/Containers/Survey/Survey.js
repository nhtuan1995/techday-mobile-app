import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  SafeAreaView

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../Components/Header';
import RenderSvg from '../../Components/Svg/Render';
import Content from '../../Components/Content';
import LinearGradientButton from '../../Components/LinearGradientButton';
import MultipleChoiceQuestion from '../../Components/MultipleChoiceQuestion';
import RenderImage from '../../Components/RenderImage';
import {Colors, Fonts} from '../../Themes';



const Devider = () => {
  return <View style={styles.devider}></View>;
};



const sampleQuestion = [
  {
    question: (
      <Text>
        1. Please let us know your level of satisfaction with this Opening event{' '}
        <Text style={{ color: 'red' }}>*</Text>
      </Text>
    ),
    answers: [
      { label: 'Very satisfy', value: 'Very satisfy' },
      { label: 'Satisfied', value: 'Satisfied' },
      { label: 'Neutral', value: 'Neutral' },
      { label: 'Disatified', value: 'Disatified' },
      { label: 'Very Disatified', value: 'Very Disatified' },
    ],
  },
  {
    question: (
      <Text>
        2. Of all products/ services presented/ exhibited in this event, which
        one leaves you the best impression?
        <Text style={{ color: 'red' }}>*</Text>
      </Text>
    ),
    answers: [
      { label: 'Cloud & Analystics', value: 'Cloud & Analystics' },
      {
        label: 'AI Painting, Sound/Voice Inspection',
        value: 'AI Painting, Sound/Voice Inspection',
      },
      {
        label: 'akaBot - Intelligent Automation',
        value: 'akaBot - Intelligent Automation',
      },
      {
        label:
          'Managed Services (Appilication Management, Business Process Management, Infrastructure Management)',
        value:
          'Managed Services (Appilication Management, Business Process Management, Infrastructure Management)',
      },
      { label: 'IT Consulting', value: 'IT Consulting' },
      { label: 'MaaZ(Automotive)', value: 'MaaZ(Automotive)' },
      {
        label: 'Alert IQ, Cloud Security, Pentest(Cyber Security)',
        value: 'Alert IQ, Cloud Security, Pentest(Cyber Security)',
      },
      { label: 'AkaVerse(Metaverse)', value: 'AkaVerse(Metaverse)' },
      { label: 'Others', value: 'Others' },
    ],
  },
];

function Survey({ navigation }) {

  const handleSubmit = () => {
    alert('Handle Submit ');
  };

  return (
    <>
      <ScrollView>
        <LinearGradient
          colors={['#E4EFFF', '#FFF']}
          style={[{ flex: 1 }, { paddingHorizontal: 24 }]}>
          <View style={styles.ourStoryHeader}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.circleRound, { marginBottom: 32 }]}>
              <RenderSvg
                iconName="iconChevronLeft"
                color="#22313F"
                width={22}
                style={{ marginLeft: -2 }}
              />
            </TouchableOpacity>
          </View>



          <Text style={styles.title}>
            Khảo sát sự kiện {'\n'}
            FPT TECHDAY 2022
          </Text>
          <Devider />

          <Text style={styles.description}>
            Thank you for joining our flagship event "
            <Text style={{ fontWeight: '600' }}>FPT Techday 2022</Text>". We hope
            you had a wonderful time with us in Vietnam.
          </Text>

          <Text style={styles.description}>
            Kindly let us know your feedback by completing this survey. It helps
            us understand your needs to give you the best services in the future.
            Thank you very much!
          </Text>

          {sampleQuestion.map((item, index) => {
            return (
              <MultipleChoiceQuestion
                key={index}
                question={item.question}
                answers={item.answers}
              />
            );
          })}
          <View style={{ width: '100%', paddingBottom: 68, paddingTop: 40 }}>
            <LinearGradientButton label="Gửi thông tin" onPress={handleSubmit} />
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
}

export default Survey;

const styles = StyleSheet.create({
  customHeader: {
    paddingTop: 24,
    paddingBottom: 24,
    width: '100%',
    marginLeft: -12,
  },
  title: {
    ...Fonts.weight.semiBold,
    fontSize: 32,
    color: '#253645',
  },
  devider: {
    width: 30,
    height: 4,
    backgroundColor: '#5278CE',
    borderRadius: 4,
    marginTop: 32,
    marginBottom: 16,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  description: {
    ...Fonts.weight.medium,
    color: '#253645',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  circleRound: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ourStoryHeader: {
    marginTop: 68,
    marginBottom: 40,
    // paddingHorizontal: 24,
  },
});
