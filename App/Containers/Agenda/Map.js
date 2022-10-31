import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import Header from '../../Components/Header';
import { Metrics } from '../../Themes';

import styles from '../../Styles/AgendaStyles';

const Map = ({ navigation, route }) => {
  const { event = {} } = route.params || {};
  // const mapUrl = event.link_map;
  const mapUrl = 'https://i.ibb.co/SPcbhFZ/map.png';
  const { screenWidth, screenHeight } = Metrics;

  const [loading, setLoading] = useState(true);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    Image.getSize(mapUrl, (width, height) => {
      if (width > screenWidth) {
        width = screenWidth;
        height = height * screenWidth / width
      }
      if (height > screenHeight) {
        width = width * screenHeight / height;
        height = screenHeight;
      }
      setImageSize({ width, height });
      setFetching(false);
    });
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: '#fff'}]}>
      <Header
        title="Map"
        bgColor={'#fff'}
        noBorder={false}
      />
      
      <View style={[styles.flexCenter, { paddingVertical: 16 }]}>
        {fetching ? (
          <View style={styles.flexCenter}>
            <ActivityIndicator />
          </View>
        ) : (
          <ImageZoom
            cropWidth={screenWidth}
            cropHeight={screenHeight}
            imageWidth={imageSize.width}
            imageHeight={imageSize.height}
          >
            <Image
              resizeMode="contain"
              onLoadEnd={() => {
                setLoading(false);
              }}
              style={{ width: imageSize.width, height: imageSize.height }}
              source={{uri: mapUrl}}
            />
          </ImageZoom>
        )}

        {loading && (
          <View style={styles.flexCenter}>
            <ActivityIndicator />
          </View>
        )}
      </View>

      <SafeAreaView />
    </View>
  )
}

export default Map;