import { Platform, PermissionsAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { toSlug } from '../Common';

const isIOS = Platform.OS === 'ios';

const getFileExtension = (fileName) => {
  const split = (fileName || '').split('.');
  return split[split.length - 1].toLowerCase();
}

const getFileIcon = (fileUrl) => {
  let fileExt = getFileExtension(fileUrl);
  if (['xls', 'xlsx', 'csv'].includes(fileExt)) {
    return 'fileExcel';
  }
  if (['doc', 'docx', 'txt'].includes(fileExt)) {
    return 'fileDoc';
  }
  if (['pdf'].includes(fileExt)) {
    return 'filePdf';
  }
  if (['ppt'].includes(fileExt)) {
    return 'filePpt';
  }
  return 'fileImage';
}

const getFileMimeType = (url) => {
  return new Promise((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', url, true);
      xhr.onload = function() {
        let contentType = xhr.getResponseHeader('Content-Type');
        resolve(contentType);
      };
      xhr.onerror = function () {
        reject(this);
      }
      xhr.send();
    } catch (err) {
      reject(err);
    }
  });
}

const getFileNameFromPath = (path) => {
  const split = (path || '').split('/');
  return split[split.length - 1];
}

const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.log('error', err);
    return false;
  }
}

const downloadFile = async (targetFile, callback) => {
  if (!isIOS) {
    const granted = await requestStoragePermission();
    if (!granted) {
      throw 'Không có quyền truy cập storage!';
    }
  }

  if (!targetFile.mimetype) {
    let mimetype = 'application/octet-stream';
    try {
      mimetype = await getFileMimeType(targetFile.url);
    } catch (e) {
      console.log('error', e);
    };
    targetFile.mimetype = mimetype;
  }

  let ext = getFileExtension(targetFile.name);
  let dirs = RNFetchBlob.fs.dirs;
  let options = {
    fileCache: true,
    appendExt: ext,
    path: dirs.DocumentDir + '/' + toSlug(targetFile.name),
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      title: targetFile.name,
      path: dirs.DownloadDir + '/' + toSlug(targetFile.name),
      mime: targetFile.mimetype,
      description: 'File downloaded by download manager',
    }
  }

  return RNFetchBlob.config(options)
    .fetch('GET', targetFile.url)
    .then((res) => {
      if (isIOS) {
        if (callback) {
          callback(res.path());
        }
        setTimeout(() => {
          RNFetchBlob.ios.previewDocument(res.path());
        }, callback ? 100 : 1);
      } else {
        RNFetchBlob.android.actionViewIntent(res.path(), targetFile.mimetype);
      }
      return res.path();
    });
}

export {
  getFileIcon,
  getFileMimeType,
  getFileExtension,
  getFileNameFromPath,
  downloadFile,
}