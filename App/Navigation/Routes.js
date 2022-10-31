import BottomNavigation from './BottomNavigation';
import Setting from '../Containers/Setting';
import EventDetail from '../Containers/Agenda/Detail';
import EventMap from '../Containers/Agenda/Map';
import ExhibitionDetail from '../Containers/Exhibition/Detail';
import OurStory from '../Containers/OurStory/index';
import Profile from '../Containers/Profile/index';
import DemoTest from '../Containers/DemoTest/index';
import Survey from '../Containers/Survey/Survey';
import Login from '../Containers/Login/Login'
import Register from '../Containers/Register/Register'
import RegisterInfo from '../Containers/Register/RegisterInfo'
import PasswordChange from '../Containers/Profile/PasswordChange'
import {About, AboutDetail} from '../Containers/About';
import { TreasureHuntIntro , TreasureHuntAchievement } from '../Containers/TreasureHunt';

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
    name: 'EventDetail',
    component: EventDetail,
  },
  {
    name: 'ExhibitionDetail',
    component: ExhibitionDetail,
  },
  {
    name: 'EventMap',
    component: EventMap,
  },
  {
    name: 'OurStory',
    component: OurStory,
  },
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'DemoTest',
    component: DemoTest,
  },
  {
    name: 'Survey',
    component: Survey,
  },
  {
    name: 'Login',
    component: Login,
    
  },
  {
    name: 'AboutDetail',
    component: AboutDetail,
  },
  {
    name: 'About',
    component: About,
  },
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'RegisterInfo',
    component: RegisterInfo,
  },
  {
    name: 'PasswordChange',
    component: PasswordChange,
  },
  {
    name: 'TreasureHuntIntro',
    component: TreasureHuntIntro,
  },
  {
    name: 'TreasureHuntAchievement',
    component: TreasureHuntAchievement,
  }
]