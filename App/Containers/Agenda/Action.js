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
  addToSchedule,
} from '../../Services/AgendaService';
import RenderSvg from 'Components/Svg/Render';
import { TextArea, Select } from 'Components/Form';
import { validateValue } from '../../Common';
import { useToast } from '../../Components/Toast';

import styles from '../../Styles/AgendaStyles';

export default function Action({
  event,
}) {
  const toast = useToast();

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
  const [addingSchedule, setAddingSchedule] = useState(false);

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
      setShowCreateQuestion(false);
      toast.show({
        type: 'success',
        title: 'B???n ???? g???i c??ng h???i ?????n di???n gi???',
        delay: 500,
      });
    }, 2000);
  }

  const handleAddToSchedule = () => {
    setAddingSchedule(true);
    setTimeout(() => {
      setAddingSchedule(false);
      toast.show({
        type: 'success',
        title: (
          <>
            <Text style={styles.textAlert}>Th??m th??nh c??ng s??? ki???n v??o l???ch tr??nh </Text>
            <Text style={[styles.textAlert, styles.textUnderline]}>Xem l???ch tr??nh</Text>
          </>
        ),
      });
    }, 1000);
  }

  return (
    <>
      {isPreSession(event) && (
        <GradientButton
          label={'+  Th??m v??o l???ch tr??nh'}
          height={56}
          containerStyle={{ marginHorizontal: 24 }}
          isLoading={addingSchedule}
          onPress={() => {
            handleAddToSchedule();
          }}
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
            <Text style={[styles.textSemiBig, styles.fontSemiBold, {color: '#fff'}]}>?????t c??u h???i</Text>
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
          headerTitle={'?????t c??u h???i'}
          showClose={true}
          body={null}
          style={{ paddingHorizontal: 0 }}
          modalStyle={{ marginBottom: 0, height: 428 }}
          contentStyle={{ paddingHorizontal: 16 }}
          size={'full'}
          presentationStyle={'formSheet'}
        >
          <View style={styles.flexItem}>
            <View style={styles.flexItem}>
              {event.speakers.length > 1 && (
                <FormControl style={{marginBottom: 16}} isInvalid={!fields.speakerId.isValid}>
                  <Select
                    selectedValue={fields.speakerId.value}
                    placeholder={'Ch???n di???n gi???'}
                    options={(event.speakers || []).map(item => ({ value: item._id, label: item.name }))}
                    onValueChange={value => {
                      setFormValue('speakerId', value);
                    }}
                  />
                  <FormControl.ErrorMessage>
                    Vui l??ng ch???n di???n gi???
                  </FormControl.ErrorMessage>
                </FormControl>
              )}

              <FormControl style={{marginBottom: 16}} isInvalid={!fields.question.isValid}>
                <TextArea
                  placeholder="Nh???p c??u h???i"
                  value={fields.question.value}
                  onChangeText={text => {
                    setFormValue('question', text);
                  }}
                />
                <FormControl.ErrorMessage>
                  Vui l??ng nh???p c??u h???i
                </FormControl.ErrorMessage>
              </FormControl>
            </View>

            <GradientButton
              height={56}
              onPress={submitQuestion}
              isLoading={saving}
            >
              <View style={styles.rowFlex}>
                <Text style={[styles.textBig, styles.fontSemiBold, {color: '#fff'}]}>G???i c??u h???i</Text>
                <RenderSvg iconName="send" style={{ marginLeft: 8 }} />
              </View>
            </GradientButton>
          </View>
        </Modal>
      )}
    </>
  )
}