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
    padding: 30,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -24,
  },
  textDisclaimer: {
    color: Colors.blackColor,
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    textAlign: 'left',
    marginLeft: 10,
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
  viewDetail: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    marginTop: 20,
    overflow: 'hidden',
    elevation: 3,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  text1: {
    color: Colors.blackColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text2: {
    color: Colors.blackColor,
    fontWeight: 'bold',
    fontSize: 36,
  },
  text3: {
    color: Colors.blackColor,
    fontWeight: 'bold',
    fontSize: 11,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timerTextContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  timerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  secondsText: {
    marginTop: 5,
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  stopContainer: {
    backgroundColor: 'red',
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  stopMainConatiner: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});
