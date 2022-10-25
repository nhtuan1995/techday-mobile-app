import BottomNavigation from './BottomNavigation';
import Setting from '../Containers/Setting';
import TreasureHunt from '../Containers/TreasureHunt/index';
import TreasureScan from '../Containers/TreasureHunt/TreasureScan';
import TreasureArchivement from '../Containers/TreasureHunt/TreasureArchivement';
import TreasureDetails from '../Containers/TreasureHunt/TreasureDetails';
import TreasureFinish from '../Containers/TreasureHunt/TreasureFinish';
import BookingMeeting from '../Containers/BookingMeeting/index';
import CreateBookingMeeting from '../Containers/BookingMeeting/CreateBookingMeeting';
import BeforeLogin from '../Containers/Login/BeforeLogin'
import Login from '../Containers/Login/Login'
import TuanSample from '../Containers/TuanSample';
import Survey from '../Containers/Survey/Survey';
import Register from '../Containers/Register/Register';
import RegisterInfo from '../Containers/Register/RegisterInfo'

export default [
  {
    name: 'Main',
    component: BottomNavigation,
  },
  {
    name: 'Setting',
    component: Setting,
  },
  {
    name: 'TreasureHunt',
    component: TreasureHunt,
  },
  {
    name: 'TreasureScan',
    component: TreasureScan,
  },
  {
    name: 'TreasureArchivement', 
    component : TreasureArchivement,
  },
  {
    name: 'TreasureDetails', 
    component : TreasureDetails,
  },
  {
    name: 'TreasureFinish', 
    component : TreasureFinish,
  },
  {
    name: 'BookingMeeting', 
    component : BookingMeeting,
  },
  {
    name: 'CreateBookingMeeting', 
    component : CreateBookingMeeting,
  },
  {
    name: 'BeforeLogin', 
    component : BeforeLogin,
  },
    {
    name: 'Login', 
    component : Login,
  },
  {
    name: 'TuanSample', 
    component : TuanSample,
  },
  {
    name: 'Survey', 
    component : Survey,
  },
  {
    name: 'Register', 
    component : Register,
  },
  {
    name: 'RegisterInfo', 
    component : RegisterInfo,
  },
]




