import {StyleSheet} from 'react-native';
import Colors from '../../assets/color/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  view: {
    backgroundColor: Colors.whiteColor,
    flex: 1,
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    padding: 20,
    marginTop: -24,
  },
  textDisclaimer: {
    color: Colors.blackColor,
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
  },
  textDisclaimerDescription: {
    color: Colors.blackColor,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 20,
    lineHeight: 24,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
