import moment from 'moment';

// hàm này dùng để phân đoạn 1 mảng thành nhiều mảng theo chiều dài ở tham số length
export const arraySegment = (arr, number) => {
  let newArrLength = parseInt(arr.length / number);
  // nếu số dư > 0 => chiều dài của những mảng con mới + 1
  newArrLength = arr.length % number > 0 ? newArrLength + 1 : newArrLength;

  const newArr = [];
  for (let i = 0; i < newArrLength; i++) {
    newArr.push(arr.slice(i * number, i * number + number));
  }
  return newArr;
};

export const diffTime = (time1, time2, measure = 'minutes') => {
  if (typeof time1 === 'string') {
    time1 = moment(time1);
  }
  if (typeof time2 === 'string') {
    time2 = moment(time2);
  }
  return time1.diff(time2, measure);
}

//get random element from an array
export function arrayRandom(array) {
  const randIdx = Math.floor(Math.random() * array.length);
  return array[randIdx];
}

export function toSlug(str) {
  let slug = str.toLowerCase();

  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');

  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
  slug = slug.replace(/ /gi, " - ");
  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');
  return slug;
}

export function getErrorMess(err) {
  if (typeof err === 'undefined') {
    return 'Có lỗi về kết nối mạng!';
  }
  if (!err) {
    return 'Có lỗi xảy ra!';
  }
  if (typeof err == 'string') {
    return err;
  }
  if (typeof err.message != 'undefined' && err.message) {
    return err.message;
  }
  if (typeof err.errors === 'string') {
    return err.errors;
  }
  if (typeof err.data.message != 'undefined') {
    return err.data.message;
  }
  return 'Có lỗi xảy ra!';
}

/**
 * validation a value
 *
 * @param {string} value input value
 * @param {object} rules list validation rules
 * @param {object} messages list errors message
 * @param {object} extra list optional values
 */
export function validateValue(value, rules = {}, messages = {}, extra = {}) {
  let errors = {};
  let isValid = true;

  //require
  if (rules.require) {
    if (
      !value ||
      (typeof value == 'string' && !value.trim()) ||
      (Array.isArray(value) && value.length < 1) ||
      (typeof value == 'object' && Object.keys(value).length < 1)
    ) {
      errors.require = messages.require;
      isValid = false;
    } else {
      delete errors.require;
    }
  }

  //preg match
  if (rules.match) {
    let regex = new RegExp(rules.match);
    if (value && !regex.test(value)) {
      errors.match = messages.match;
      isValid = false;
    } else {
      delete errors.match;
    }
  }

  //confirmation
  if (rules.confirmation) {
    if (value && extra[rules.confirmation] && value != extra[rules.confirmation]) {
      errors.confirmation = messages.confirmation;
      isValid = false;
    } else {
      delete errors.confirmation;
    }
  }

  //email
  if (rules.email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      errors.email = messages.email;
      isValid = false;
    } else {
      delete errors.email;
    }
  }

  //maxLength
  if (rules.maxLength) {
    if (value && value.toString().length > rules.maxLength) {
      errors.maxLength = messages.maxLength;
      isValid = false;
    } else {
      delete errors.maxLength;
    }
  }

  //domain
  if (rules.domain) {
    let regex = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,10})$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      errors.domain = messages.domain || trans('invalid_domain');
      isValid = false;
    } else {
      delete errors.domain;
    }
  }

  return {
    errors: errors,
    isValid: isValid,
  }
}