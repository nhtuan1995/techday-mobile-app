import React, {useMemo} from 'react';
import {View} from 'react-native';

import {Modal, HStack, Center} from 'native-base';
import LinearGradientButton from './LinearGradientButton';
import { Fonts, Colors } from 'Themes';

const PopUpModal = ({
  isOpen, //boolean
  body, //component
  contentStyle = {}, //styles
  modalStyle = {}, //styles
  style = {},
  headerStyle = {},
  headerTextStyle = {},
  type = 'notification', //enum: [confirm, notification, custom],
  onOk, //function
  onCancel, // function
  customButtons, //component
  okText = 'Xác nhận',
  cancelText = 'Bỏ qua',
  showClose = false,
  headerTitle = null,
  children,
  ...props
}) => {
  const onPressOK = () => {
    if (onOk) onOk();
  };

  const onPressCancel = () => {
    if (onCancel) onCancel();
  };

  const ButtonList = () => {
    return (
      <>
        {type === 'notification' && (
          <LinearGradientButton label={okText} onPress={onPressOK} />
        )}
        {type === 'confirm' && (
          <>
            <View
              style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
              <LinearGradientButton
                label={cancelText}
                onPress={onPressCancel}
                containerStyle={{paddingRight: 8, flex:1}}
                backgroundColor="white"
                buttonStyle={{
                  width: '100%',
                  borderStyle: 'solid',
                  borderWidth: 2,
                  borderColor: '#213992',
                }}
                textStyle={{color: '#213992'}}
              />
              <LinearGradientButton
                label={okText}
                onPress={onPressOK}
                containerStyle={{paddingRight: 8, flex:1}}
              />
            </View>
          </>
        )}
        {type === 'danger' && (
          <>
            <View
              style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
              <LinearGradientButton
                label={cancelText}
                onPress={onPressCancel}
                containerStyle={{paddingRight: 8, flex:1}}
                backgroundColor="white"
                buttonStyle={{
                  width: '100%',
                  borderStyle: 'solid',
                  borderWidth: 2,
                  borderColor: '#213992',
                }}
                textStyle={{color: '#213992'}}
              />
              <LinearGradientButton
                backgroundColor="red"
                label={okText}
                onPress={onPressOK}
                containerStyle={{paddingLeft: 8, flex:1}}
              />
            </View>
          </>
        )}
        {type === 'custom' && customButtons}
      </>
    );
  };

  return (
    <Modal isOpen={isOpen} style={{...styles.wrapper, ...style}} {...props}>
      <Modal.Content style={{...styles.modal, ...modalStyle}}>
        {showClose && <Modal.CloseButton />}
        {headerTitle && (
          <Modal.Header
            _text={{ fontSize: 18, ...Fonts.weight.semiBold, ...headerTextStyle }}
            style={[styles.header, headerStyle]}
          >{headerTitle}</Modal.Header>
        )}
        <Modal.Body
          style={{ ...styles.contentStyle, ...contentStyle }}
          _scrollview={{
            _contentContainerStyle: {flexGrow: 1},
          }}
        >
          {body || children}
          <View style={styles.buttonGroup}>
            <ButtonList />
          </View>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default PopUpModal;

const styles = {
  wrapper: {
    width: '100%',
    paddingHorizontal: 24,
  },
  modal: {
    marginTop: 'auto',
    marginBottom: 52,
  },
  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
    alignItems: 'center',
  },
  contentStyle: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flex: 1,
  },
  buttonGroup: {
    marginTop: 24,
    width: '100%',
  },
};
