import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const AppFonts = {
  // CerebriSansPro: {
  //   name: 'CerebriSansPro',
  //   weight: {
  //     regular: 'CerebriSansPro-Regular',
  //     medium: 'CerebriSansPro-Medium',
  //     bold: 'CerebriSansPro-Bold',
  //     extraLight: 'CerebriSansPro-ExtraLight',
  //     black: 'CerebriSansPro-Black',
  //     blackItalic: 'CerebriSansPro-BlackItalic',
  //     boldItalic: 'CerebriSansPro-BoldItalic',
  //     extraBold: 'CerebriSansPro-ExtraBold',
  //     extraBoldItalic: 'CerebriSansPro-ExtraBoldItalic',
  //     extraLightItalic: 'CerebriSansPro-ExtraLightItalic',
  //     italic: 'CerebriSansPro-Italic',
  //     light: 'CerebriSansPro-Light',
  //     heavy: 'CerebriSansPro-Heavy',
  //     lightItalic: 'CerebriSansPro-LightItalic',
  //     meduimItalic: 'CerebriSansPro-MediumItalic',
  //     semiBold: 'CerebriSansPro-SemiBold',
  //     semiBoldItalic: 'CerebriSansPro-SemiBoldItalic',
  //     thin: 'CerebriSansPro-Thin',
  //     thinItalic: 'CerebriSansPro-ThinItalic',
  //   },
  // },
};

const commonColor = {
  white: '#FFFFFF',
  commonBlack: '#000000',
  dullTextColor: '#95AAC9',
  activeColor: '#DE5E69',
  deactiveColor: '#DE5E6950',
  boxActiveColor: '#DE5E6940',
  secondary: '#95AAC9',
  loaderColor: '#00D97E',
  subTitleText: '#95AAC9',
  buttonBg: '#00D97E',
  star: '#F6C343',
  cardShadowColor: '#00000D',
  linkText: '#1E90FF',
  switchColor: '#2C7BE5',
  disabledSwitch: '#E3EBF6',
  secondaryBtnColor: '#B1C2D9',
  secondaryBtnText: '#283E59',
  selectionCheckMarkColor: '#00D97E',
  pincodeTintColor: '#00D97E',
  removeAccessbtnColor: '#E63757',
  darkBlue: '#0177B5',
  grey: 'grey',
  errorTextColor: 'red',
  navBg: '#1362FC',
  sideMenuBg: '#2F4E74',
  sideMenuSelection: '#213650',
  HomeProductCountbg: '#93BF34',
  mediumGrey: '#8A8A8A',
  darkGreen: '#116677',
  lightBlue: '#7FAAC0',
  segmentControlBackground: '#F2F2F2',
  noInternetBannerColor: '#FA5F55',
  blackText: 'black',
  textFieldPlaceholder: 'grey',
  textFieldBackground: '#F2F2F2',
  routeText: '#E63757',
  removeBtnColor: '#E63757',
  applicationMainBlue: '#1362FC',
  shadowColor: '#00000033',
  disabled: '#8D8D8D',
  focusedColor: '#FF844A',
  disabledText: '#9294A9',
  lightGrey: '#E7E7E7',
  roleBg: '#2C7BE533',
  screenBackground: '#FFFFFF',
  cardBackground: '#FFFFFF',
  activePageBg: '#00D97E',
  avatarBorder: '#6E84A3',
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#12263F',
    screenColor: '#12263F',
    text: '#FFFFFF',
    role: '#2C7BE566',
    roleText: 'white',
    settingCardsColor: '#283E59',
    header: '#152E4D',
    menuIcon: '#FFFFFF',
    cardColor: '#132A46',
    seperatorColor: '#94AAC8',
    lockView: '#E6375766',
    unlockView: '#00D97E66',
    pincodeViewBgColor: '#283E59',
    inActivePageBg: '#283E59',
    roldBadgeBg: '#D5E5FA',
    ...commonColor,
  },
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    screenColor: '#F9FBFD',
    primary: '#FFFFFF',
    cardColor: '#FFFFFF',
    text: '#12263F',
    role: '#2C7BE533',
    settingCardsColor: '#FFFFFF',
    roleText: '#2C7BE5',
    lockView: '#E6375733',
    unlockView: '#00D97E33',
    seperatorColor: '#D5E5FA',
    header: '#FFFFFF',
    menuIcon: '#12263F',
    pincodeViewBgColor: 'white',
    roldBadgeBg: '#2C7BE533',
    inActivePageBg: '#D5E5FA',
    ...commonColor,
  },
};

export const AppConfiguration = {
  /**
   * @REQUEST_TIMOUT takes seconds.
   * Axios request time out
   **/
  REQUEST_TIMOUT_INTERVAL: 30,
  PAGE_SIZE: 15,
  /**
   * returns TIME IN @seconds
   * used for the time interval after which app can allow user to resend OTP code
   **/
  DATE_FORMAT: 'yyyy/MM/DD',
  DATETIME_FORMAT: 'yyyy/MM/DD HH:mm',
  UTC_DATE_FORMAT: 'YYYY-MM-DDTHH:mm:ss.SSS',
  TIME_FORMAT: 'HH:mm',
  PROFILE_PHONE_SPLITTER: '-',
  DEFAULT_PHONE_CODE: '+45',
  PIN_CODE_CELL_COUNT: 4,
  MONTH_YEAR_DATE_FORMAT: 'MMM yyyy',
  DATE_TIME_FORMAT: 'MM/DD/YYYY HH:mm',
  REMOTE_CONFIG_FETCH_INTERVAL: 5,
  DATE_HISTORY_FORMAT: 'D. MMMM yyyy',
  MINIMUM_REQUIRED_GUEST_VALIDITY_DIFFERENCE_IN_MINUTES: 10
};

export const HTTP_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHOITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_OFFLINE: 503,
};

// @ts-ignore
String.prototype.replaceAll = function (searchValue, replaceValue) {
  return this.split(searchValue).join(replaceValue).trim();
};

export const AppLinks = {
  android: 'https://play.google.com/store/apps/details?id=com.softoo', //TODO: change it
  ios: 'https://apps.apple.com/us/app/softoo/id00000', //TODO: change it
};


export type TThemeType = 'dark' | 'light'