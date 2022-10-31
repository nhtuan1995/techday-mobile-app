import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';

import BgGradientScreen from '../../Components/BgGradientScreen';
import {
  getDetail,
  isPastSession,
} from '../../Services/AgendaService';
import RenderSvg from '../../Components/Svg/Render';
import Avatar from '../../Components/Avatar';
import File from '../../Components/File';
import ImageGallery from 'Components/ImageGallery';
import BannerDetail from './BannerDetail';
import { Colors } from '../../Themes';
import { downloadFile } from '../../Services/FileService';
import { getErrorMess } from '../../Common';
import Action from './Action';

import styles from '../../Styles/AgendaStyles';

const Detail = ({ navigation }) => {
  const { params = {} } = navigation.state || {};
  const { eventId = null } = params;

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingDoc, setFetchingDoc] = useState(false);

  useEffect(() => {
    getEventData();
  }, [eventId]);

  const getEventData = () => {
    setLoading(true);
    getDetail(eventId).then(response => {
      setEvent(response);
    }).catch(err => {
      console.log('detail error', err);
    }).finally(() => {
      setLoading(false);
    });
  }

  const handleShareEvent = async () => {
    if (!event || fetchingDoc) {
      return;
    }
    setFetchingDoc(true);
    try {
      await downloadFile({
        name: event.document_link,
        url: event.document_link,
      });
    } catch (e) {
      alert(getErrorMess(e));
    }
    setFetchingDoc(false);
  }

  return (
    <BgGradientScreen
      headerProps={{
        title: event?.title,
        bgColor: '#fff',
        rightContent: (
          <TouchableOpacity
            style={[styles.pressButton, {marginRight: -8}]}
            onPress={handleShareEvent}
          >
            {fetchingDoc ? (
              <ActivityIndicator />
            ) : (
              <RenderSvg iconName="iconShare" />
            )}
          </TouchableOpacity>
        )
      }}
    >
      {event ? (
        <>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 16,
            }}
          >
            <BannerDetail event={event} />

            <View style={[styles.wrapper]}>
              <Text style={styles.title}>{event.title_live}</Text>

              <View style={[styles.row, { alignItems: 'flex-end', marginTop: 8, marginBottom: 16 }]}>
                <View style={styles.flexItem}>
                  <View style={[styles.rowFlex, {marginBottom: 4}]}>
                    <RenderSvg iconName="TimerFilled" style={{marginRight: 4}} width={16} />
                    <Text style={[styles.textNormal, styles.fontMedium]}>
                      {moment(event.start_time).format('HH:mm') + ' - ' + moment(event.end_time).format('HH:mm')}
                    </Text>
                  </View>

                  <View style={[styles.rowFlex]}>
                    <RenderSvg iconName="LocationFilled" style={{marginRight: 4}} width={16} />
                    <Text style={[styles.textNormal, styles.fontMedium]}>{event.location}</Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={[styles.button, styles.rowFlex]}
                  onPress={() => {
                    navigation.navigate('EventMap', { event });
                  }}
                >
                  <Text style={[styles.textNormal, styles.fontMedium]}>Chỉ dẫn</Text>
                  <RenderSvg iconName="arrowRight" width={20} style={{ marginLeft: 8 }} />
                </TouchableOpacity>
              </View>

              <View style={styles.borderBottom}></View>

              <View style={{ marginTop: 24 }}>
                <Text style={styles.boxTitle}>Nội dung</Text>
                <Text style={styles.textContent}>{event.description}</Text>
              </View>

              {event.speakers && event.speakers.length > 0 && (
                <View style={{ marginTop: 32 }}>
                  <View style={[styles.rowFlex, {marginBottom: 16}]}>
                    <Text style={[styles.boxTitle, styles.flexItem]}>Diễn giả</Text>

                    {!isPastSession(event) && (
                      <TouchableOpacity
                        style={{ marginLeft: 8 }}
                      >
                        <Text style={[styles.textNormal, styles.fontMedium, {color: Colors.title}]}>Đặt câu hỏi</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  
                  {event.speakers.map((speaker, index) => (
                    <TouchableOpacity style={[styles.rowFlex, styles.speakerItem]} key={index}>
                      <Avatar user={speaker} />

                      <View style={[styles.flexItem, {marginLeft: 12}]}>
                        <Text style={[styles.title, {fontSize: 16, marginBottom: 4}]}>{speaker.name}</Text>
                        <Text style={[styles.textDesc]}>{speaker.job_title_en}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {event.document && event.document.length > 0 && (
                <View style={{ marginTop: 32 }}>
                  <Text style={styles.boxTitle}>Tài liệu</Text>

                  {event.document.map((doc, index) => (
                    <File file={doc} key={index} />
                  ))}
                </View>
              )}

              {isPastSession(event) && event.image && event.image.length > 0 && (
                <View style={{ marginTop: 32 }}>
                  <Text style={styles.boxTitle}>Hình ảnh</Text>
                  <ImageGallery
                    images={event.image}
                  />
                </View>
              )}
            </View>
          </ScrollView>
          
          <Action event={event} />
        </>
      ) : (
        <View style={styles.flexCenter}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={[styles.textDesc]}>Không có dữ liệu!</Text>
          )}
        </View>
      )}
    </BgGradientScreen>
  )
}

export default Detail;