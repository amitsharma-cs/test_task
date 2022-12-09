import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Images from '../../assets/images/Images';
import CustomButton from '../../modules/controls/CustomButton';
import CustomTextInput from '../../modules/controls/CustomTextInput';
import RouteNames from '../../navigation/RouteNames';
import {loginAction} from '../../redux/actions/LoginAction';
import {resetLoginState} from '../../redux/reducers/LoginReducer';
import styles from './Style';

export default function Login(props: any) {
  const loginState = useSelector((state: any) => state.login);
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });
  function onLoginButtonClick() {
    dispatch(loginAction(loginForm));
  }

  useEffect(() => {
    if (loginState?.response) {
      props.navigation.navigate(RouteNames.disclaimer.name);
      dispatch(resetLoginState());
    }
    if (loginState?.error) {
      alert(loginState?.error);
    }
  }, [loginState]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={Images.bg.fullScreenBg}>
        <View style={styles.viewContainer}>
          <View style={styles.centerContainer}>
            <View style={styles.logoContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={Images.logo.appLogo}
              />
              <Text style={styles.screenLabel}>Login</Text>
            </View>
            <View style={styles.formContainer}>
              <CustomTextInput
                onChange={value => {
                  setLoginForm({...loginForm, email: value});
                }}
                textInputProps={{
                  keyboardType: 'email-address',
                  placeholder: 'E-mail',
                }}
                icon={Images.icons.emailIcon}
              />
              <CustomTextInput
                onChange={value => {
                  setLoginForm({...loginForm, password: value});
                }}
                textInputProps={{
                  keyboardType: 'email-address',
                  placeholder: 'Password',
                }}
                textInputStyle={styles.marginTopTextInput}
                icon={Images.icons.passwordIcon}
              />
              {loginState?.loading ? (
                <ActivityIndicator style={{marginTop: 30}} size="large" />
              ) : (
                <CustomButton
                  buttonStyle={{width: '47%'}}
                  style={{marginTop: 30}}
                  icon={Images.icons.rightPointingArrow}
                  title={'Login'}
                  onPress={() => {
                    onLoginButtonClick();
                  }}
                />
              )}
              <CustomButton
                style={{marginTop: 30}}
                buttonStyle={styles.forgotPasswordButton}
                textStyle={styles.forgotPasswordText}
                title={'Forgot Password?'}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
