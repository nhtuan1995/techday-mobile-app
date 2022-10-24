import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Animated,
  Platform,
  Linking,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { useCameraDevices, Camera } from 'react-native-vision-camera';

import { Metrics } from '../Themes';
import Header from '../Components/Header';
import {Center} from 'native-base';

const borderWidth = 2;
const { screenWidth, screenHeight } = Metrics;
let markerWidth = 235;
if (markerWidth > screenWidth - 16 * 2) {
  markerWidth = screenWidth - 16 * 2;
}

function QRScan(props) {

  const {params = {}} = props.navigation.state || {};
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
  //   checkInverted: true,
  // });
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      const isAuthorized = status === 'authorized';
      setHasPermission(isAuthorized);
      if (!isAuthorized) {
        // alert('Không có quyền truy cập Camera!');
      }
    })();
  }, []);

  const goBack = () => {
    props.navigation.navigate('App');
    if (params.onCancel) {
      params.onCancel();
    }
  }

  const isFocused = useIsFocused();
  if (!isFocused) {
    return null;
  }

  return (
    <View style={styles.cameraContainer}>
      <SafeAreaView style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} />

      {!device ? (
        <ActivityIndicator />
      ) : (
        hasPermission ? (
          <>
            <Camera
              style={styles.camera}
              device={device}
              isActive={true}
              // frameProcessor={frameProcessor}
              // frameProcessorFps={5}
            >
              <View style={styles.marker}>
                <View style={[styles.overlay, styles.overlayTopBottom, {
                  bottom: markerWidth - borderWidth,
                }]}></View>
                <View style={[styles.overlay, styles.overlayLeftRight, {
                  right: markerWidth - borderWidth,
                }]}></View>
                <View style={[styles.overlay, styles.overlayLeftRight, {
                  left: markerWidth - borderWidth,
                }]}></View>
                <View style={[styles.overlay, styles.overlayTopBottom, {
                  top: markerWidth - borderWidth,
                }]}></View>

                <View style={[styles.lineVerCover, styles.lineCover1]}></View>
                <View style={[styles.lineHorCover, styles.lineCover1]}></View>
                <View style={[styles.lineHorCover, styles.lineCover2]}></View>
                <View style={[styles.lineVerCover, styles.lineCover2]}></View>
                <View style={[styles.lineVerCover, styles.lineCover3]}></View>
                <View style={[styles.lineHorCover, styles.lineCover3]}></View>
                <View style={[styles.lineHorCover, styles.lineCover4]}></View>
                <View style={[styles.lineVerCover, styles.lineCover4]}></View>

                <View style={styles.descBox}>
                  <Text style={styles.textDesc}>Di chuyển Camera lại gần QR code</Text>
                </View>
              </View>
            </Camera>
          </>
        ) : (
          <View>
            <Text>Không có quyền truy cập Camera!</Text>
          </View>
        )
      )}
    </View>
  )
}

export default QRScan;

const pos = -16;
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  camera: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  overlayTopBottom: {
    width: screenWidth,
    height: (screenHeight - markerWidth) / 2,
    left: -(screenWidth - markerWidth) / 2 - borderWidth,
  },
  overlayLeftRight: {
    width: (screenWidth - markerWidth) / 2,
    height: markerWidth,
    bottom: -borderWidth,
  },
  marker: {
    borderWidth: borderWidth,
    borderColor: '#fffafa',
    width: markerWidth,
    height: markerWidth,
  },
  lineScan: {
    height: 2,
    backgroundColor: '#f87e13',
    position: 'absolute',
    left: -16,
    top: 0,
    shadowOffset: {width: 0, height: 4},
    shadowColor: '#f77213',
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
  lineVerCover: {
    height: 32,
    width: 3,
    backgroundColor: '#f87e13',
    position: 'absolute',
    // zIndex: 10,
  },
  lineHorCover: {
    height: 3,
    width: 32,
    backgroundColor: '#f87e13',
    position: 'absolute',
    // zIndex: 10,
  },
  lineCover1: {
    top: pos,
    left: pos,
  },
  lineCover2: {
    top: pos,
    right: pos,
  },
  lineCover3: {
    bottom: pos,
    right: pos,
  },
  lineCover4: {
    bottom: pos,
    left: pos,
  },
  descBox: {
    position: 'absolute',
    bottom: markerWidth + 50,
    left: -(screenWidth - markerWidth)/2,
    width: screenWidth,
  },
  textDesc: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 16,
  }
});