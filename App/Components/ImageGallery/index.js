import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import ImageView from "react-native-image-viewing";

import ImageUri from '../ImageUri';
import { Metrics } from 'Themes';
import Header from '../Header';
import RenderSvg from '../Svg/Render';
import { downloadFile } from '../../Services/FileService';
import { getErrorMess } from '../../Common';

import styles from './Style';

export default function ImageGallery({
  images = [],
  numberShow = 4,
  basePading = 24,
  style = {},
  styleThumbnail = {},
}) {
  const _imageList = useRef();
  const imagesShow = images.slice(0, numberShow);
  const remainNum = images.length > numberShow ? images.length - numberShow : 0;
  const thumbnailWidth = (Metrics.screenWidth - basePading * 2) / numberShow;

  const [visible, setVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadFile = async (file) => {
    if (downloading) {
      return;
    }
    setDownloading(true);
    try {
      await downloadFile(file, () => {
        setVisible(false);
      });
    } catch (e) {
      alert(getErrorMess(e));
    }
    setDownloading(false);
  }

  return (
    <>
      <View style={[styles.gallery, style]}>
        {imagesShow.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.thumbnail, {
              width: thumbnailWidth,
              height: thumbnailWidth,
            }, styleThumbnail]}
            activeOpacity={0.85}
            onPress={() => {
              setImageIndex(index);
              setVisible(true);
            }}
          >
            <ImageUri
              uri={image.link}
              width={thumbnailWidth}
              alt='Image'
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 4,
              }}
            />

            {remainNum && index === numberShow - 1 && (
              <View style={styles.remainMash}>
                <Text style={{fontSize: 16, color: '#fff'}}>+{remainNum}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <ImageView
        visible={visible}
        images={images.map(img => ({
          uri: img.link,
          name: img.name,
        }))}
        imageIndex={imageIndex}
        onRequestClose={() => {
          setVisible(false);
        }}
        presentationStyle={'overFullScreen'}
        keyExtractor={(src, index) => index + ''}
        doubleTapToZoomEnabled={true}
        HeaderComponent={({ imageIndex }) => (
          <Header
            bgColor="#000"
            iconBackColor='#fff'
            noBorder={false}
            barStyle={'light-content'}
            rightContent={
              <TouchableOpacity
                style={{ paddingHorizontal: 16, marginRight: -8 }}
                onPress={() => {
                  let image = images[imageIndex];
                  handleDownloadFile({
                    ...image,
                    url: image.link,
                  });
                }}
              >
                {downloading ? (
                  <ActivityIndicator />
                ) : (
                  <RenderSvg iconName="download" />
                )}
              </TouchableOpacity>
            }
            goBack={() => {
              setVisible(false);
            }}
          />
        )}
        FooterComponent={({ imageIndex }) => (
          <>
            <TouchableOpacity
              onPress={() => {
                if (!_imageList.current || imageIndex === 0) {
                  return;
                }
                _imageList.current.scrollToIndex({
                  index: imageIndex - 1,
                });
              }}
              style={[
                styles.navButton,
                {top: -Metrics.screenHeight/2},
                styles.navButtonPrev,
              ]}
            >
              <RenderSvg iconName="iconChevronLeft" width={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (!_imageList.current || imageIndex === images.length - 1) {
                  return;
                }
                _imageList.current.scrollToIndex({
                  index: imageIndex + 1,
                });
              }}
              style={[
                styles.navButton,
                {top: -Metrics.screenHeight/2},
                styles.navButtonNext,
              ]}
            >
              <RenderSvg iconName="iconChevronRight" height={18} color="#fff" />
            </TouchableOpacity>
          </>
        )}
        onImageListRef={(ref) => {
          _imageList.current = ref;
        }}
      />
    </>
  )
}