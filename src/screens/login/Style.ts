import {StyleSheet} from 'react-native';
import Colors from '../../assets/color/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  viewContainer: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 50,
    flex: 1,
    justifyContent:"center"
  },
  centerContainer: {},
  logoContainer: {alignItems: 'center'},
  screenLabel: {
    fontSize: 21,
    color: Colors.blackColor,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: '40%',
  },
  formContainer: {marginTop: 20},
  marginTopTextInput: {
    marginTop: 15,
  },
  bottomImageView: {
    bottom: 0,
    position: 'absolute',
  },
  bottomImage: {
    flex: 1,
    opacity: 0.5,
  },
  forgotPasswordButton: {
    backgroundColor: Colors.transparent,
    color: Colors.blackColor,
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    color: Colors.blackColor,
    fontSize: 15,
  },
});
