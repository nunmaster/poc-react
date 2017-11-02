import Login from './container/Login';
import Register from './container/Register';
import Home from './container/Home';
import Gallery from './container/Gallery';
import Image from './container/Image';
import Setting from './container/Setting';
import UserProfile from './container/UserProfile';
import Whatsapp from './container/Whatsapp';
import Shop from './container/Shop';
import Firebase from './container/Firebase';
import Karaoke from './container/Karaoke';
import Camera from './container/Camera';
import Contact from './container/Contact';
import ScrollBar from './container/ScrollBar';
import Shadow from './container/Shadow';
import Switch from './container/Switch';
import Copy from './container/Copy';
import Loading from './container/Loading';
import Share from './container/Share';
import Datepicker from './container/Datepicker';
import Dropdown from './container/Dropdown';
import WebView from './container/WebView';
import PhoneMail from './container/PhoneMail';
import QRCode from './container/QRCode';
import CallWebService from './container/CallWebService';
import Fingerprint from './container/Fingerprint';
import GenerateCode from './container/GenerateCode';
import CountDown from './container/CountDown';
import Zoom from './container/Zoom';
import Carousel from './container/Carousel';
import Animation from './container/Animation';
import NativeModule from './container/NativeModule';
import Keyboard from './container/Keyboard';

export default {
  home: {
    title: 'Home',
    Page: Home,
    headerType: 'home',
    cache: true
  },
  gallery: {
    title: 'Gallery',
    Page: Gallery,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  image: {
    title: 'Image',
    Page: Image,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  whatsapp: {
    title: 'Whatsapp',
    Page: Whatsapp,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  shop: {
    title: 'Shop',
    Page: Shop,
    headerType: 'home',
    footerType: 'home',
    cache: true
  },
  setting: {
    title: 'Setting',
    Page: Setting,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  'user/profile': {
    title: 'User Profile',
    Page: UserProfile,
    headerType: 'none',
    cache: true
  },
  login: {
    title: 'Login',
    Page: Login,
    headerType: 'none',
    footerType: 'none'
  },
  register: {
    title: 'Register',
    Page: Register,
    headerType: 'none',
    footerType: 'none'
  },
  firebase: {
    title: 'Firebase',
    Page: Firebase,
    headerType: 'back',
    footerType: 'none'
  },
  karaoke: {
    title: 'Karaoke',
    Page: Karaoke,
    headerType: 'back',
    footerType: 'none'
  },
  camera: {
    title: 'Camera',
    Page: Camera,
    headerType: 'back',
    footerType: 'none'
  },
  scrollbar: {
    title: 'ScrollBar',
    Page: ScrollBar,
    headerType: 'back',
    footerType: 'none'
  },
  shadow: {
    title: 'Shadow',
    Page: Shadow,
    headerType: 'back',
    footerType: 'none'
  },
  switch: {
    title: 'Switch',
    Page: Switch,
    headerType: 'back',
    footerType: 'none'
  },
  copy: {
    title: 'Copy',
    Page: Copy,
    headerType: 'back',
    footerType: 'none'
  },
  loading: {
    title: 'Loading',
    Page: Loading,
    headerType: 'back',
    footerType: 'none'
  },
  share: {
    title: 'Share',
    Page: Share,
    headerType: 'back',
    footerType: 'none'
  },
  datepicker: {
    title: 'Datepicker',
    Page: Datepicker,
    headerType: 'back',
    footerType: 'none',
  },
  dropdown: {
    title: 'Dropdown',
    Page: Dropdown,
    headerType: 'back',
    footerType: 'none',
  },
  webview: {
    title: 'WebView',
    Page: WebView,
    headerType: 'back',
    footerType: 'none',
  },
  notFound: {
    title: 'Login',
    Page: Login,
    headerType: 'none',
    footerType: 'none'
  },
  contact: {
    title: 'Contact',
    Page: Contact,
    headerType: 'back',
    footerType: 'none'
  },
  phonemail: {
    title: 'Phone & Mail',
    Page: PhoneMail,
    headerType: 'back',
    footerType: 'none'
  },
  qrcode: {
    title: 'Scan Code',
    Page: QRCode,
    headerType: 'back',
    footerType: 'none'
  },
  generate: {
    title: 'Generate Code',
    Page: GenerateCode,
    headerType: 'back',
    footerType: 'none'
  },
  webservice: {
    title: 'Call Web Service',
    Page: CallWebService,
    headerType: 'back',
    footerType: 'none'
  },
  fingerprint: {
    title: 'Finger Print',
    Page: Fingerprint,
    headerType: 'back',
    footerType: 'none'
  },
  countdown: {
    title: 'Count Down',
    Page: CountDown,
    headerType: 'back',
    footerType: 'none'
  },
  zoom: {
    title: 'Zoom In/Out',
    Page: Zoom,
    headerType: 'back',
    footerType: 'none'
  },
  carousel: {
    title: 'Carousel',
    Page: Carousel,
    headerType: 'back',
    footerType: 'none'
  },
  animation: {
    title: 'Animation',
    Page: Animation,
    headerType: 'back',
    footerType: 'none'
  },
  nativemodule: {
    title: 'NativeModule',
    Page: NativeModule,
    headerType: 'back',
    footerType: 'none'
  },
  keyboard: {
    title: 'Keyboard',
    Page: Keyboard,
    headerType: 'back',
    footerType: 'none'
  }
};
