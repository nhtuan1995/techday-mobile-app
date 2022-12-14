import { basicRequest } from './Api';
import moment from 'moment';

const getAgendas = async () => {
  let results = [];
  for (let i = 1; i < 15; i++) {
    results.push({
      "_id": "6350ff569838532e8bd22087" + i,
      "title": "Welcome " + i,
      "title_live": 'Overcome Uncertainties With Business Transformation',
      "description": "Welcoming guests to the event",
      "location": "Grand Hall",
      "date": "2022-07-20T17:00:00.000Z",
      "start_time": moment().set('hours', 7).set('minutes', 0).add(i, 'hours').toISOString(),
      "end_time": moment().set('hours', 7).set('minutes', 0).add(i + 1, 'hours').toISOString(),
    });
    if (i < 5) {
      for (let j = 1; j < 3; j++) {
        results.push({
          "_id": "6350ff569838532e8bd22087" + i + '' + j,
          "title": "Welcome " + i + '---' + j,
          "title_live": "Overcome Uncertainties With Business Transformation",
          "description": "Welcoming guests to the event",
          "location": "Grand Hall",
          "date": "2022-07-20T17:00:00.000Z",
          "start_time": moment().set('hours', 7).set('minutes', 0).add(i, 'hours').toISOString(),
          "end_time": moment().set('hours', 7).set('minutes', 0).add(i + 1, 'hours').toISOString(),
        });
      }
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        agendas: groupAgendas(results),
        total: results.length,
      });
    }, 1000);
  });
}

const groupAgendas = (items) => {
  let results = {};
  items.map(item => {
    let startTime = moment(item.start_time).format('YYYY-MM-DD_HH:mm');
    if (typeof results[startTime] === 'undefined') {
      results[startTime] = [];
    }
    results[startTime].push({ ...item, timeKey: startTime });
  });
  return results;
}

const getDetail = async (id) => {
  return {
    "_id": "6350ff569838532e8bd22087",
    "title": "Seminar 1",
    "title_live": "Overcome Uncertainties With Business Transformation",
    "link_live": "https://www.youtube.com/watch?v=asaVCDvLfRE",
    "description": `Trong su???t 34 n??m, FPT ???? v?? ??ang ti???p t???c t???n l???c ???ng d???ng khoa h???c c??ng ngh??? ????? n??ng t???m v?? ph???ng s??? cu???c s???ng c???a con ng?????i. 
\nV???i s??? ??a d???ng v?? b??? d??y kinh nghi???m ch??ng t??i mong mu???n ?????ng h??nh v???i qu?? kh??ch h??ng c??ng ??i ?????n th??nh c??ng.`,
    "location": "Grand Hall",
    "date": "2022-07-20T17:00:00.000Z",
    "start_time": "2022-11-01T03:00:00.000Z",
    "end_time": "2022-11-01T06:00:00.000Z",
    "document_link": "https://i.ibb.co/GQKL1Kr/Rectangle-30006.png",
    "category": {
      "_id": "634e1d374cc14b6e48f650ef",
      "category_name": "Departure",
      "category_description": "Begin your voyage on the FPT sailboat and explore the modern, remarkable design of FPT tower that provides a world-class environment for our employees.",
      "createdAt": "2022-10-18T03:27:51.440Z",
      "updatedAt": "2022-10-18T04:05:55.704Z",
      "__v": 0,
      "id": "634e1d374cc14b6e48f650ef"
    },
    "image_share": {
      "_id": "6350ff569838532e8bd2207d",
      "name": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.png",
      "type": 1,
      "link": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.png",
      "createdAt": "2022-10-20T07:57:10.975Z",
      "updatedAt": "2022-10-20T07:57:10.975Z",
      "__v": 0,
      "id": "6350ff569838532e8bd2207d"
    },
    "banner_home": {
      "_id": "6350ff569838532e8bd2207f",
      "type": 2,
      "link": "https://i.ibb.co/GQKL1Kr/Rectangle-30006.png",
    },
    "banner": [
      {
        "_id": "6350ff569838532e8bd22081",
        "name": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.png",
        "type": 2,
        "link": "https://i.ibb.co/GQKL1Kr/Rectangle-30006.png",
      }
    ],
    "document": [
      {
        "_id": "6350ff569838532e8bd22081",
        "name": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.png",
        "link": "https://i.ibb.co/GQKL1Kr/Rectangle-30006.png",
      },
      {
        "_id": "6350ff569838532e8bd22082",
        "name": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.pdf",
        "link": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.pdf",
      },
      {
        "_id": "6350ff569838532e8bd22083",
        "name": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.ppt",
        "link": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.ppt",
      },
      {
        "_id": "6350ff569838532e8bd22084",
        "name": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.xlsx",
        "link": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.xlsx",
      },
      {
        "_id": "6350ff569838532e8bd22085",
        "name": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.doc",
        "link": "storage/agenda/July2022/hsyNlWHmJLLufV4x1h3x.doc",
      },
    ],
    "image": [
      {
        "_id": "6350ff569838532e8bd22082",
        "type": 1,
        "name": "storage/agenda/July2022/Rectangle-1.png",
        "link": "https://i.ibb.co/GQKL1Kr/Rectangle-30006.png",
      },
      {
        "_id": "6350ff569838532e8bd22083",
        "type": 1,
        "name": "storage/agenda/July2022/Rectangle-2.png",
        "link": "https://i.ibb.co/JrnDFQV/Rectangle-30012.png",
      },
      {
        "_id": "6350ff569838532e8bd22084",
        "type": 1,
        "name": "storage/agenda/July2022/Rectangle-3.png",
        "link": "https://i.ibb.co/GWYyM9T/Rectangle-29969.png",
      },
      {
        "_id": "6350ff569838532e8bd22085",
        "type": 1,
        "name": "storage/agenda/July2022/Rectangle-4.png",
        "link": "https://i.ibb.co/GQKL1Kr/Rectangle-30006.png",
      },
      {
        "_id": "6350ff569838532e8bd22086",
        "type": 1,
        "name": "storage/agenda/July2022/Rectangle-5.png",
        "link": "https://i.ibb.co/GQKL1Kr/Rectangle-30006.png",
      },
      {
        "_id": "6350ff569838532e8bd22087",
        "type": 1,
        "name": "storage/agenda/July2022/Rectangle-6.png",
        "link": "https://i.ibb.co/GQKL1Kr/Rectangle-30006.png",
      },
    ],
    "speakers": [
      {
        "_id": "634f6833a7246c1fb1da0853",
        "email": "cuongnm122@fpt.com.vn",
        "account": "cuongnm122",
        "name": "DR. N??? M??? C?????ng",
        job_title_en: 'Fouder and Chairman, FPT Corporation',
      },
      {
        "_id": "634f6833a7246c1fb1da0854",
        "email": "cuongnm122@fpt.com.vn",
        "account": "cuongnm122",
        "name": "MR. Nguy???n V??n Khoa",
        job_title_en: 'CEO, FPT Corporation',
      },
    ],
    "important": 1,
    "createdAt": "2022-10-20T07:57:10.988Z",
    "updatedAt": "2022-10-20T07:57:10.988Z",
  };
}

const isPreSession = (event) => {
  const now = moment().format('YYYY-MM-DD HH:mm');
  const startTime = moment(event.start_time).format('YYYY-MM-DD HH:mm');
  return now < startTime;
}

const isDuringSession = (event) => {
  const now = moment().format('YYYY-MM-DD HH:mm');
  const startTime = moment(event.start_time).format('YYYY-MM-DD HH:mm');
  const endTime = moment(event.end_time).format('YYYY-MM-DD HH:mm');
  return startTime <= now && now <= endTime;
}

const isPastSession = (event) => {
  const now = moment().format('YYYY-MM-DD HH:mm');
  const endTime = moment(event.end_time).format('YYYY-MM-DD HH:mm');
  return endTime < now;
}

const saveQuestion = async (values = {}) => {
  return {};
}

const addToSchedule = async () => {
  return {};
}

export {
  getAgendas,
  getDetail,
  isPreSession,
  isDuringSession,
  isPastSession,
  saveQuestion,
  addToSchedule,
}