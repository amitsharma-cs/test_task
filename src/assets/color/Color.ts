const darkThemeColor = {
  blackColor: '#000000',
  whiteColor: '#ffffff',
  greyColor: '#ADB7C6',
  lightGreyColor: '#F0F4F5',
  redPrimary: '#DD1D21',
  transparent: 'transparent',
};

function loadColorConfig() {
  //check app theme
  return darkThemeColor;
}

const Colors = loadColorConfig();

export default Colors;
