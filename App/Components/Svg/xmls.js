import IconChevronLeft from './Icons/ChevronLeft';
import IconLogo from './Icons/logo';
import IconChat from './Icons/chat';
import IconArrowRight from './Icons/arrowRight';
import IconBanner from './Icons/banner';
import IconStamp from './Icons/stamp';
import IconCalendarX from './Icons/calendarX'
import IconBox3D from './Icons/box3D';
import IconRecord from './Icons/record'
import IconVirtualTour from './Icons/virtualTour'
import IconNavigationArrow from './Icons/navigationArrow'
import IconCalendarPlus from './Icons/calendarPlus'
import IconContactWallet from './Icons/contactWallet'
import IconCalendarCheck from './Icons/calendarCheck'
import IconCombinedShape from './Icons/combinedShape'
import IconQR from './Icons/QR';
import IconCalenderChecked from './Icons/calendarChecked';
import PassEye from './Icons/passEye';
import PassEyeSlash from './Icons/passEyeSlash';
import FPTLogo from './Icons/FPTLogo';
import message from './Icons/message';
import ArrowBackWhite from './Icons/arrowBackWhite';
import CheckedRadio from './Icons/checkedRadio';
import LinearBackground from './Icons/LinearBackground';
import LoginHeader from './Icons/loginHeader'
const defaultProps = {
  color: '#ccc',
};

const xmls = {
  iconHome: ({ color = "#98A2B3" }) => {
    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        viewBox="0 0 25 24"
      >
        <path
          fill="${color}"
          d="M9.273 20.773v-3.057c0-.78.637-1.414 1.424-1.414h2.874c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.871.36h1.96a3.46 3.46 0 002.444-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.67-5.29a3.097 3.097 0 00-3.95.072L3.606 7.965a2.474 2.474 0 00-.967 1.902v8.702C2.638 20.464 4.185 22 6.094 22H8.01c.68 0 1.231-.544 1.236-1.218l.027-.009z"
        ></path>
      </svg>
    `
  },

  iconCalendar: ({ color = '#98A2B3' }) => {
    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        viewBox="0 0 25 24"
      >
        <g clipPath="url(#clip0_5238_285)" filter="url(#filter0_b_5238_285)">
          <path
            fill="${color}"
            d="M16.288 2a.753.753 0 01.76.769c.002.423.33.768.744.852 2.335.47 3.832 2.257 3.835 4.869l.011 8.426c.004 3.138-1.968 5.069-5.128 5.074L8.79 22c-3.14.004-5.137-1.973-5.141-5.12l-.01-8.327c-.005-2.629 1.44-4.413 3.764-4.91.415-.09.74-.438.74-.862a.746.746 0 01.76-.771.747.747 0 01.76.769.7.7 0 00.701.698l4.466-.006a.7.7 0 00.698-.7.747.747 0 01.76-.771zm.402 14.192h-.01a.833.833 0 00-.808.852c.001.46.367.838.822.848a.844.844 0 00.837-.851.844.844 0 00-.84-.85zm-8.135 0c-.454.02-.81.402-.809.861.021.46.396.82.85.8.446-.02.8-.402.78-.862a.815.815 0 00-.821-.798zm4.068-.004a.855.855 0 00-.809.86c.02.46.396.82.85.8.444-.022.8-.402.78-.863a.815.815 0 00-.821-.797zM8.55 12.595a.852.852 0 00-.808.86c.02.46.396.82.85.799.445-.02.8-.4.778-.86a.815.815 0 00-.82-.8zm4.069-.035c-.454.02-.81.4-.809.86.02.46.396.819.85.799a.823.823 0 00.78-.86.816.816 0 00-.821-.8zm4.068.005a.828.828 0 00-.809.84v.01c.01.46.385.809.84.799a.823.823 0 00.79-.852.83.83 0 00-.821-.797zm-1.155-6.746a.81.81 0 00-.81-.808l-4.247.005a.809.809 0 00-.807.81c0 .43-.325.77-.76.77a.752.752 0 01-.76-.768c-.001-.412-.361-.741-.759-.633-1.445.393-2.233 1.491-2.23 3.356 0 .171.14.31.311.31l14.288-.019a.35.35 0 00.35-.35c-.037-1.85-.84-2.942-2.297-3.318-.4-.104-.759.23-.758.643a.76.76 0 01-.76.77.752.752 0 01-.76-.768z"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_b_5238_285"
            width="28.222"
            height="30.222"
            x="-1.473"
            y="-3.111"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feGaussianBlur
              in="BackgroundImageFix"
              stdDeviation="2.555"
            ></feGaussianBlur>
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_5238_285"
            ></feComposite>
            <feBlend
              in="SourceGraphic"
              in2="effect1_backgroundBlur_5238_285"
              result="shape"
            ></feBlend>
          </filter>
          <clipPath id="clip0_5238_285">
            <path
              fill="#fff"
              d="M0 0H24V24H0z"
              transform="translate(.638)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    `
  },

  iconHandShake: ({ color = '#98A2B3' }) => {
    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        viewBox="0 0 25 24"
      >
        <path
          fill="${color}"
          d="M12.093 20.137a.76.76 0 01-.731.572.59.59 0 01-.178-.028l-2.831-.703a1.472 1.472 0 01-.62-.328l-2.109-1.837a.744.744 0 01.975-1.125l2.12 1.837 2.821.703a.759.759 0 01.553.91zm12.431-8.925a1.483 1.483 0 01-.759.872l-2.184 1.097-1.397 1.64h-.019c0 .01-.01.01-.01.02h-.009l-3.45 3.45c-.286.28-.669.437-1.068.44a1.483 1.483 0 01-.357-.047l-5.437-1.34a1.425 1.425 0 01-.563-.272L4.21 13.116l-2.25-1.125a1.528 1.528 0 01-.76-.882 1.5 1.5 0 01.104-1.153l2.306-4.415a1.51 1.51 0 011.997-.657l2.1 1.05 4.565-1.33a1.556 1.556 0 011.032.074l3.093 1.406h1.538l2.184-1.097a1.5 1.5 0 011.997.647l2.306 4.416a1.519 1.519 0 01.104 1.162zM18.46 14.42l-2.963-2.157-.759.572a3.77 3.77 0 01-4.5 0l-.506-.384a1.49 1.49 0 01-.16-2.26l3.666-3.674.169-.141-.722-.328-4.566 1.331-2.55 4.894L10.2 15.89l5.428 1.359 2.83-2.831zm1.753-1.94l-2.55-4.895h-3.366l-3.665 3.666.506.384a2.278 2.278 0 002.7 0l1.2-.9a.749.749 0 01.89-.009l3.563 2.588.722-.835z"
        ></path>
      </svg>
    `
  },

  iconUserView: ({ color = '#98A2B3' }) => {
    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        viewBox="0 0 25 24"
      >
        <path
          fill="${color}"
          d="M21.112 3.75h-16.5a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h1.256a.74.74 0 00.675-.431 4.509 4.509 0 018.138 0 .74.74 0 00.675.431h5.756a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zm-10.5 12a3 3 0 113-3 3.009 3.009 0 01-3 3zm10.5 3h-5.306a5.974 5.974 0 00-1.228-1.5h4.284a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75v9a.75.75 0 00.562.722c-.5.436-.924.953-1.256 1.528h-.806V5.25h16.5v13.5z"
        ></path>
      </svg>
    `
  },

  iconQR: (props) => {
    return IconQR({ ...defaultProps, ...props });
  },

  iconChevronLeft: (props = {}) => {
    return IconChevronLeft({ ...defaultProps, ...props });
  },
  iconLogo: (props = {}) => {
    return IconLogo({ ...defaultProps, ...props });
  },
  iconChat: (props = {}) => {
    return IconChat({ ...defaultProps, ...props });
  },
  iconArrowRight: (props = {}) => {
    return IconArrowRight({ ...defaultProps, ...props });
  },
  iconBanner: (props = {}) => {
    return IconBanner({ ...defaultProps, ...props });
  },
  iconStamp: (props = {}) => {
    return IconStamp({ ...defaultProps, ...props });
  },
  iconCalendarX: (props = {}) => {
    return IconCalendarX({ ...defaultProps, ...props });
  },
  iconBox3D: (props = {}) => {
    return IconBox3D({ ...defaultProps, ...props });
  },
  iconRecord: (props = {}) => {
    return IconRecord({ ...defaultProps, ...props });
  },
  iconVirtualTour: (props = {}) => {
    return IconVirtualTour({ ...defaultProps, ...props });
  },
  iconNavigationArrow: (props = {}) => {
    return IconNavigationArrow({ ...defaultProps, ...props });
  },
  iconCalendarPlus: (props = {}) => {
    return IconCalendarPlus({ ...defaultProps, ...props });
  },
  iconContactWallet: (props = {}) => {
    return IconContactWallet({ ...defaultProps, ...props });
  },
  iconCalendarCheck: (props = {}) => {
    return IconCalendarCheck({ ...defaultProps, ...props });
  },
  iconCombinedShape: (props = {}) => {
    return IconCombinedShape({ ...defaultProps, ...props });
  },
  FPTLogo: (props = {}) => {
    return FPTLogo({ ...defaultProps, ...props });
  },

  iconCalenderChecked: (props = {}) => {
    return IconCalenderChecked({ ...defaultProps, ...props });
  },

  passEye: (props = {}) => {
    return PassEye({ ...defaultProps, ...props });
  },
  
  passEyeSlash: (props = {}) => {
    return PassEyeSlash({ ...defaultProps, ...props });
  },
  message: (props = {}) => {
    return message({ ...defaultProps, ...props });
  },
  arrowBackWhite: (props = {}) => {
    return ArrowBackWhite({ ...defaultProps, ...props });
  },
  checkedRadio: (props = {}) => {
    return CheckedRadio({ ...defaultProps, ...props });
  },
  linearBackground: (props = {}) => {
    return LinearBackground({ ...defaultProps, ...props });
  },
  loginHeader: (props = {}) => {
    return LoginHeader({ ...defaultProps, ...props });
  },

}

export default xmls;
