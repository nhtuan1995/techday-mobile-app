import React, {useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Header from '../../Components/Header';
import RenderSvg from '../../Components/Svg/Render';
import Content from '../../Components/Content';
import LinearGradientButton from '../../Components/LinearGradientButton';
import MultipleChoiceQuestion from '../../Components/MultipleChoiceQuestion';
import RenderImage from '../../Components/RenderImage';   
// components
// common

const CustomHeader = ({onPress}) => {
  return (
    <View style={styles.customHeader}>
      <TouchableOpacity style={{width: 64}} onPress={onPress}>
        <RenderSvg iconName="arrowBackWhite" width={64} height={64} />
      </TouchableOpacity>
    </View>
  );
};

const Devider = () => {
  return <View style={styles.devider}></View>;
};

const Background = () => {
  return <View></View>;
};

const sampleQuestion = [
  {
    question: (
      <Text>
        1. Please let us know your level of satisfaction with this Opening event{' '}
        <Text style={{color: 'red'}}>*</Text>
      </Text>
    ),
    answers: [
      {label: 'Very satisfy', value: 'Very satisfy'},
      {label: 'Satisfied', value: 'Satisfied'},
      {label: 'Neutral', value: 'Neutral'},
      {label: 'Disatified', value: 'Disatified'},
      {label: 'Very Disatified', value: 'Very Disatified'},
    ],
  },
  {
    question: (
      <Text>
        2. Of all products/ services presented/ exhibited in this event, which
        one leaves you the best impression?
        <Text style={{color: 'red'}}>*</Text>
      </Text>
    ),
    answers: [
      {label: 'Cloud & Analystics', value: 'Cloud & Analystics'},
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
      {label: 'IT Consulting', value: 'IT Consulting'},
      {label: 'MaaZ(Automotive)', value: 'MaaZ(Automotive)'},
      {
        label: 'Alert IQ, Cloud Security, Pentest(Cyber Security)',
        value: 'Alert IQ, Cloud Security, Pentest(Cyber Security)',
      },
      {label: 'AkaVerse(Metaverse)', value: 'AkaVerse(Metaverse)'},
      {label: 'Others', value: 'Others'},
    ],
  },
  //   {
  //     question: (
  //         <Text>
  //         4. Please let us know if you have any other feedback or comments
  //       </Text>
  //     ),
  //     // type : "textArea"
  //   }
];

function Survey({navigation}) {
  const handleBack = () => {
    alert('back to homepage');
  };

  const handleSubmit = () => {
    alert('Handle Submit ');
  };

  return (
    <>
    <RenderImage
          name={'linearBackground'}
          width={'100%'}
          height={'100%'}
          style={{position :'absolute', top: 0, left:0, right: 0}}
        />
      
      
      <Content style={{zIndex:9, elevation: 9}}>
    
        <CustomHeader onPress={handleBack} />
        <Text style={styles.title}>
          Khảo sát sự kiện {'\n'}
          FPT TECHDAY 2022
        </Text>
        <Devider />
        <Text style={styles.description}>
          Thank you for joining our flagship event "
          <Text style={{fontWeight: '600'}}>FPT Techday 2022</Text>". We hope
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

        <LinearGradientButton text="Gửi thông tin" onPress={handleSubmit} />
      </Content>
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
    fontSize: 32,
    fontWeight: '600',
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
    color: '#253645',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    marginBottom: 16,
  },
});
