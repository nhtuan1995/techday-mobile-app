import apisauce from 'apisauce';
import NetInfo from "@react-native-community/netinfo";

import { baseApiURL } from '../Config';

const rqTimeout = 18000;

const create = (baseURL = 'https://api.github.com/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: rqTimeout,
  });

  const getRoot = () => api.get('');
  const getRate = () => api.get('rate_limit');
  const getUser = username => api.get('search/users', {q: username});

  return {
    getRoot,
    getRate,
    getUser,
  };
};

const request = async (baseURL, type, url, params, headers) => {
  if (typeof baseURL === 'undefined') {
    baseURL = baseApiURL;
  }
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: rqTimeout,
    onDownloadProgress: (progressEvent) => {
      // let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    }
  });

  api.addMonitor(async res => {
    if (res.status !== 200 && res.status !== 401) {
      NetInfo.fetch().then(connectionInfo => {
        // error
      });
    }

    if (res.status === 401) {
      // navigate login
    }
  });

  api.addRequestTransform(async request => {
    // set token
    // request.headers.Authorization = 'Bearer ' + token;
  });

  let apiCall;
  if (type === 'delete') {
    apiCall = () => api[type](url, {}, {...headers, data: params});
  } else {
    apiCall = () => api[type](url, params, {headers});
  }

  return new Promise(function(resolve, reject) {
    apiCall().then(res => {
      switch (res.status) {
        case 200:
          resolve(res.data);
          break;
        case 401:
          reject(res);
          break;
        case null:
          reject({
            success: false,
            message: 'Lỗi mạng',
          });
        default:
          reject(res);
      }
    });
  });
};

const basicRequest = async (method, url, params = {}, withMess = false) => {
  return new Promise((resolve, reject) => {
    request(baseApiURL, method, url, params)
      .then(response => {
        if (response.success) {
          if (!withMess) {
            resolve(response.data || response);
          } else {
            resolve(response);
          }
        } else {
          reject({success: false, message: response.message});
        }
      })
      .catch(err => {
        if (typeof err.errors === 'string') {
          reject({success: false, message: err.errors});
        } else {
          reject(err.data);
        }
      });
  });
}

// let's return back our create method as the default.
export {
  create,
  request,
  basicRequest,
};
