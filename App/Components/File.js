import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import { getErrorMess } from '../Common';
import {
  getFileNameFromPath,
  getFileIcon,
  downloadFile,
} from '../Services/FileService';
import { Fonts } from '../Themes';
import RenderSvg from '../Components/Svg/Render';

export default function File({
  file
}) {
  if (!file.url) {
    file.url = file.link;
  }
  const fileUrl = file.url;
  const [downloading, setDownloading] = useState(false);

  const renderIcon = () => {
    let icon = getFileIcon(fileUrl);
    return <RenderSvg iconName={icon} width={32} />
  }

  const handleDownloadFile = async () => {
    if (downloading) {
      return;
    }
    setDownloading(true);
    try {
      await downloadFile(file);
    } catch (e) {
      alert(getErrorMess(e));
    }
    setDownloading(false);
  }

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 2,
        marginBottom: 8,
      }}
      onPress={handleDownloadFile}
    >
      <View style={{ marginRight: 12 }}>
        {renderIcon()}
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{ fontSize: 14, color: '#253645', ...Fonts.weight.medium }}
          numberOfLines={2}
        >
          {getFileNameFromPath(file.name)}
        </Text>
      </View>

      {downloading && (
        <ActivityIndicator style={{ marginLeft: 8 }} />
      )}
    </TouchableOpacity>
  )
}