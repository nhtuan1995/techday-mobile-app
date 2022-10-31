import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

import ImageUri from 'Components/ImageUri';
import { Metrics } from 'Themes';
import { isPreSession, isDuringSession, isPastSession } from 'Services/AgendaService';

import styles from 'Styles/AgendaStyles';

export default function BannerDetail({ event }) {
  const hasVideo = !!event.link_live && !isPreSession(event);
  const [loadingVideo, setLoadingVideo] = useState(true);

  const getVideoId = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length==11) ? match[7] : null;
  }

  const renderBanner =() => {
    const videoHeight = Metrics.screenWidth * 315 / 560;
    if (hasVideo) {
      return (
        <View style={[styles.flexCenter, { height: videoHeight }]}>
          {loadingVideo && (
            <ActivityIndicator />
          )}

          <YoutubePlayer
            width={'100%'}
            height={loadingVideo ? 0 : videoHeight}
            play={false}
            videoId={getVideoId(event.link_live)}
            onReady={() => {
              setLoadingVideo(false);
            }}
          />
        </View>
      )
    }
  
    return (
      <ImageUri
        uri={event.banner_home.link}
        width={Metrics.screenWidth}
      />
    )
  }

  return (
    <View style={styles.detailHeaderBox}>
      {renderBanner()}

      {!hasVideo && (
        <View style={styles.detailHeader}>
          <View style={{ width: '100%' }}>
            <Text style={styles.detailTitle}>{event.title}</Text>
            <Text style={styles.detailSubTitle} numberOfLines={2}>{event.title_live}</Text>
          </View>
        </View>
      )}
    </View>
  )
}