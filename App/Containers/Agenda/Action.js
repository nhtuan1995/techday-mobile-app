import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FormControl } from 'native-base';
import DeviceInfo from 'react-native-device-info';

import GradientButton from 'Components/LinearGradientButton';
import Modal from 'Components/Modal';
import {
  isPreSession,
  isDuringSession,
  saveQuestion,
} from '../../Services/AgendaService';
import RenderSvg from 'Components/Svg/Render';
import { TextArea, Select } from 'Components/Form';
import { validateValue } from '../../Common';

import styles from '../../Styles/AgendaStyles';

export default function Action({
  event,
}) {
  const hasNotch = DeviceInfo.hasNotch();
  const [initing, setIniting] = useState(true);
  const [showCreateQuestion, setShowCreateQuestion] = useState(false);
  const [fields, setFields] = useState({
    speakerId: {
      value: null,
      rules: { require: true },
      isValid: true,
    },
    question: {
      value: null,
      rules: { require: true },
      isValid: true,
    },
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIniting(false);
    }, 500);
  }, [event]);

  const setFormValue = (field, value) => {
    setFields({
      ...fields,
      [field]: {
        ...fields[field],
        value: value,
        isValid: true,
      },
    });
  }

  const isValidFields = () => {
    let isValid = true;
    for (let name in fields) {
      let field = fields[name];
      let valid = validateValue(
        field.value,
        field.rules,
      );
      if (!valid.isValid) {
        fields[name].isValid = false;
      }
      if (isValid) {
        isValid = valid.isValid;
      }
    }
    setFields({...fields});
    return isValid;
  }

  const submitQuestion = () => {
    if (!isValidFields()) {
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 2000);
  }

  return (
    <>
      {isPreSession(event) && (
        <GradientButton
          label={'+  Thêm vào lịch trình'}
          height={56}
          containerStyle={{ marginHorizontal: 24 }}
        />
      )}

      {isDuringSession(event) && (
        <GradientButton
          height={56}
          containerStyle={{ marginHorizontal: 24 }}
          onPress={() => {
            setShowCreateQuestion(true);
          }}
        >
          <View style={styles.rowFlex}>
            <RenderSvg iconName="questionMess" style={{ marginRight: 8 }} />
            <Text style={[styles.textSemiBig, styles.fontSemiBold, {color: '#fff'}]}>Đặt câu hỏi</Text>
          </View>
        </GradientButton>
      )}

      <SafeAreaView />

      {!initing && (
        <Modal
          isOpen={showCreateQuestion}
          type={'custom'}
          onClose={() => {
            setShowCreateQuestion(false);
          }}
          headerTitle={'Đặt câu hỏi'}
          showClose={true}
          body={null}
          style={{ paddingHorizontal: 0 }}
          modalStyle={{ marginBottom: 0, height: '60%' }}
          contentStyle={{ paddingHorizontal: 16 }}
          avoidKeyboard={true}
          size={'full'}
        >
          <View style={styles.flexItem}>
            <View style={styles.flexItem}>
              {event.speakers.length > 1 && (
                <FormControl style={{marginBottom: 16}} isInvalid={!fields.speakerId.isValid}>
                  <Select
                    selectedValue={fields.speakerId.value}
                    placeholder={'Chọn diễn giả'}
                    options={(event.speakers || []).map(item => ({ value: item._id, label: item.name }))}
                    onValueChange={value => {
                      setFormValue('speakerId', value);
                    }}
                  />
                  <FormControl.ErrorMessage>
                    Vui lòng chọn diễn giả
                  </FormControl.ErrorMessage>
                </FormControl>
              )}

              <FormControl style={{marginBottom: 16}} isInvalid={!fields.question.isValid}>
                <TextArea
                  placeholder="Nhập câu hỏi"
                  value={fields.question.value}
                  onChangeText={text => {
                    setFormValue('question', text);
                  }}
                />
                <FormControl.ErrorMessage>
                  Vui lòng nhập câu hỏi
                </FormControl.ErrorMessage>
              </FormControl>
            </View>

            <GradientButton
              height={56}
              onPress={submitQuestion}
              isLoading={saving}
            >
              <View style={styles.rowFlex}>
                <Text style={[styles.textBig, styles.fontSemiBold, {color: '#fff'}]}>Gửi câu hỏi</Text>
                <RenderSvg iconName="send" style={{ marginLeft: 8 }} />
              </View>
            </GradientButton>
          </View>
        </Modal>
      )}
    </>
  )
}