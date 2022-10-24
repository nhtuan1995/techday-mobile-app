import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Radio,TextArea, Center, NativeBaseProvider, FormControl} from 'native-base';
import RenderSvg from '../Components/Svg/Render';

// components
// common

function MultipleChoiceQuestion({navigation, question, answers}) {
  const [value, setValue] = useState(answers?.[0].value);
  const onChange = value => {
    setValue(value);
  };
  return (
    <>
      <View>
        <Text style={styles.question}>{question}</Text>
        <FormControl>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={onChange}>
            {answers.map((item, index) => {
              return (
                <View key={index} style={styles.answer}>
                  <Radio
                    colorScheme="blue"
                    // style={styles.radio}
                    icon={
                      <RenderSvg
                        style={styles.checkedRadio}
                        iconName="checkedRadio"
                      />
                    }
                    value={item.value}
                    my={1}>
                    {item.label}
                  </Radio>
                  {item.label === 'Others' && (
                    <View style={{width: '100%'}}>
                      <Text style={styles.helper}>
                        If you choose "Others", please let us know your specific
                        answer
                      </Text>
                      <TextArea borderRadius={16} padding={4} fontSize={14} placeholder="Your answer" h={24} w="100%" />
                    </View>
                  )}
                </View>
              );
            })}
          </Radio.Group>
          {/* <FormControl.ErrorMessage>
        Please select at least on option.
        </FormControl.ErrorMessage> */}
        </FormControl>
      </View>
    </>
  );
}

export default MultipleChoiceQuestion;

const styles = StyleSheet.create({
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#253645',
    marginBottom: 18,
    lineHeight: 20,
  },
  answer: {
    width: '100%',
    marginBottom: 12,
  },
  checkedRadio: {
    margin: -6,
  },
  textArea:{
    height: 80,
    borderRadius: 16,
    padding:16
  },
  helper:{
    color: '#253645',
    fontSize: 16,
    lineHeight:22,
    marginTop: 12,
    marginBottom: 12,
  }
});
