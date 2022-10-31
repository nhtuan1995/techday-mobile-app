import ChevronLeft from './Icons/ChevronLeft';
import ChevronRight from './Icons/ChevronRight';
import QR from './Icons/QR';
import Message from './Icons/MessageNew';
import Bell from './Icons/BellNew';
import Chair from './Icons/ChairNew';
import Cup from './Icons/CupNew';
import Shark from './Icons/SharkNew';
import CalendarEdit from './Icons/CalendarEditNew';
import Building from './Icons/BuildingNew';
import BookSaved from './Icons/BookSavedNew';
import Home from './Icons/Home';
import HomeActive from './Icons/HomeActive';
import Calendar from './Icons/Calendar';
import CalendarActive from './Icons/CalendarActive';
import Square3D from './Icons/Square3DNew';
import Square3DActive from './Icons/Square3DActive';
import Users from './Icons/Users';
import UsersActive from './Icons/UsersActive';
import TimerFilled from './Icons/TimerFilled';
import LocationFilled from './Icons/LocationFilled';
import Square3DFilled from './Icons/Square3DFilled';
import Location from './Icons/LocationNew';
import Timer from './Icons/Timer';
import IconShare from './Icons/Share';
import IconLongArrowRight from './Icons/LongArrowRight';
import IconArrowRight from './Icons/ArrowRight';
import UnionArrows from './Icons/UnionArrows';
import ArrowRightOrange from './Icons/ArrowRightOrange';
import AngleRight from './Icons/AngleRight';
import FileExcel from './Icons/FileExcel';
import FileDoc from './Icons/FileDoc';
import FilePdf from './Icons/FilePdf';
import FilePpt from './Icons/FilePpt';
import FileImage from './Icons/FileImage';
import PlayVideo from './Icons/PlayVideo';
import Download from './Icons/Download';
import QuestionMess from './Icons/QuestionMess';
import Send from './Icons/Send';
import Check from './Icons/Check';
import CaretDown from './Icons/CaretDown';
import AngleDown from './Icons/AngleDown';
import DownloadOutline from './Icons/DownloadOutline';
import ArrowBackWhite from './Icons/arrowBackWhite';
import CheckedRadio from './Icons/checkedRadio';
import PassEye from './Icons/passEye';
import PassEyeSlash from './Icons/passEyeSlash';

import ArrowLeft from './Icons/ArrowLeft';
import BriefCase from './Icons/BriefCase';
import CalendarFilled from './Icons/CalendarFilled';
import MessageFilled from './Icons/MessageFilled';
import ArchiveBook from './Icons/ArchiveBook';
import Dinner from './Icons/Dinner';
import Map from './Icons/Map';
import MapFilled from './Icons/MapFilled';
import MessageQuestion from './Icons/MessageQuestion';
import Global from './Icons/Global';
import ClipboardText from './Icons/ClipboardText';
import NewFeed from './Icons/NewFeed';
import Reserve from './Icons/Reserve';
import UsersProfile from './Icons/UsersProfile';
import Book from './Icons/Book';
import Union from './Icons/Union';
import TagUser from './Icons/TagUser';
import Clock from './Icons/Clock';
import ClockFilled from './Icons/ClockFilled';
import DashedLine from './Icons/DashedLine';
import IconQRCode from './Icons/QRCode';
import Trophy from './Icons/Trophy';

import Colors from '../../Themes/Colors';




const defaultProps = {
  color: Colors.inactive,
};

const xmls = {
  iconHome: props => Home({ ...defaultProps, ...props }),
  iconHomeActive: props => HomeActive({ ...defaultProps, ...props }),
  iconCalendar: props => Calendar({ ...defaultProps, ...props }),
  iconCalendarActive: props => CalendarActive({ ...defaultProps, ...props }),
  icon3DSquare: props => Square3D({ ...defaultProps, ...props }),
  icon3DSquareActive: props => Square3DActive({ ...defaultProps, ...props }),
  iconUsers: props => Users({ ...defaultProps, ...props }),
  iconUsersActive: props => UsersActive({ ...defaultProps, ...props }),
  iconQR: props => QR(props),
  iconChevronLeft: (props = {}) => ChevronLeft({ ...defaultProps, ...props }),
  iconChevronRight: (props = {}) => ChevronRight({ ...defaultProps, ...props }),
  Message: (props = {}) => Message({ ...defaultProps, ...props }),
  Bell: (props = {}) => Bell({ ...defaultProps, ...props }),
  Chair: (props = {}) => Chair({ ...defaultProps, ...props }),
  Cup: (props = {}) => Cup({ ...defaultProps, ...props }),
  Square3D: (props = {}) => Square3D({ ...defaultProps, ...props }),
  Shark: (props = {}) => Shark({ ...defaultProps, ...props }),
  CalendarEdit: (props = {}) => CalendarEdit({ ...defaultProps, ...props }),
  Building: (props = {}) => Building({ ...defaultProps, ...props }),
  BookSaved: (props = {}) => BookSaved({ ...defaultProps, ...props }),
  Timer: (props = {}) => Timer({ ...defaultProps, ...props }),
  TimerFilled: (props = {}) => TimerFilled({ ...defaultProps, ...props }),
  Location: (props = {}) => Location({ ...defaultProps, ...props }),
  LocationFilled: (props = {}) => LocationFilled({ ...defaultProps, ...props }),
  Square3DFilled: (props = {}) => Square3DFilled({ ...defaultProps, ...props }),
  iconShare: (props = {}) => IconShare({ ...defaultProps, ...props }),
  longArrowRight: (props = {}) => IconLongArrowRight({ ...defaultProps, ...props }),
  arrowRight: (props = {}) => IconArrowRight({ ...defaultProps, ...props }),
  iconUnionArrows: (props = {}) => UnionArrows({ ...defaultProps, ...props }),
  iconArrowRightOrange: (props = {}) => ArrowRightOrange({ ...defaultProps, ...props }),
  angleRight: (props = {}) => AngleRight({ ...defaultProps, ...props }),
  fileDoc: () => FileDoc(),
  filePdf: () => FilePdf(),
  filePpt: () => FilePpt(),
  fileExcel: () => FileExcel(),
  fileImage: (props) => FileImage({ ...defaultProps, ...props }),
  playVideo: (props) => PlayVideo({ ...defaultProps, ...props }),
  download: (props) => Download({ ...defaultProps, ...props }),
  questionMess: (props) => QuestionMess({ ...defaultProps, ...props }),
  angleDown: (props) => AngleDown({ ...defaultProps, ...props }),
  downloadOutline: (props) => DownloadOutline({ ...defaultProps, ...props }),
  arrowBackWhite: (props) => ArrowBackWhite({ ...defaultProps, ...props }),
  checkedRadio: (props = {}) =>  CheckedRadio({ ...defaultProps, ...props }),
  passEye: (props = {}) =>  PassEye({ ...defaultProps, ...props }),
  passEyeSlash: (props = {}) =>  PassEyeSlash({ ...defaultProps, ...props }),
  fileImage: (props) => FileImage({...defaultProps, ...props}),
  playVideo: (props) => PlayVideo({...defaultProps, ...props}),
  download: (props) => Download({...defaultProps, ...props}),
  questionMess: (props) => QuestionMess({...defaultProps, ...props}),
  send: (props) => Send({...defaultProps, ...props}),
  check: (props) => Check({...defaultProps, ...props}),
  caretDown: (props) => CaretDown({...defaultProps, ...props}),
  ArrowLeft: (props) => ArrowLeft({...defaultProps, ...props}),
  BriefCase: (props = {}) => BriefCase({...defaultProps, ...props}),
  CalendarFilled: (props = {}) => CalendarFilled({...defaultProps, ...props}),
  MessageFilled: (props = {}) => MessageFilled({...defaultProps, ...props}),
  ArchiveBook: (props = {}) => ArchiveBook({...defaultProps, ...props}),
  Map: (props = {}) => Map({...defaultProps, ...props}),
  MapFilled: (props = {}) => MapFilled({...defaultProps, ...props}),
  MessageQuestion: (props = {}) => MessageQuestion({...defaultProps, ...props}),
  NewFeed: (props = {}) => NewFeed({...defaultProps, ...props}),
  Reserve: (props = {}) => Reserve({...defaultProps, ...props}),
  UsersProfile: (props = {}) => UsersProfile({...defaultProps, ...props}),
  CalendarFilled: (props = {}) => CalendarFilled({...defaultProps, ...props}),
  MessageFilled: (props = {}) => MessageFilled({...defaultProps, ...props}),
  ArchiveBook: (props = {}) => ArchiveBook({...defaultProps, ...props}),
  Dinner: (props) => Dinner({...defaultProps, ...props}),
  ClipboardText: (props = {}) => ClipboardText({...defaultProps, ...props}),
  Global: (props = {}) => Global({...defaultProps, ...props}),
  Book: (props = {}) => Book({...defaultProps, ...props}),
  Union: () => Union(),
  Clock: (props = {}) => Clock({...defaultProps, ...props}),
  ClockFilled: (props = {}) => ClockFilled({...defaultProps, ...props}),
  TagUser: (props = {}) => TagUser({...defaultProps, ...props}),
  DashedLine: (props = {}) => DashedLine({...defaultProps, ...props}),
  IconQRCode: (props = {}) => IconQRCode({...defaultProps, ...props}),
  Trophy: (props = {}) => Trophy({...defaultProps, ...props}),
};

export default xmls;
