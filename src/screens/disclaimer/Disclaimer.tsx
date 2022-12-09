import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Text, View} from 'react-native';
import Colors from '../../assets/color/Color';
import Images from '../../assets/images/Images';
import CustomButton from '../../modules/controls/CustomButton';
import HeaderImage from '../../modules/headers/HeaderImage';
import OpaqueHeader from '../../modules/headers/OpaqueHeader';
import RouteNames from '../../navigation/RouteNames';
import {
  DISCLAIMER_SATSTUS,
  readData,
  storeData,
} from '../../storage/LocalStorage';
import styles from './Style';

export default function Disclaimer(props: any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    checkDisclaimerStatus();
  }, []);

  async function checkDisclaimerStatus() {
    const value = await readData(DISCLAIMER_SATSTUS);
    if (value) {
      if (value === 'true') {
        props.navigation.replace(RouteNames.stationList.name);
      }
    }
    setLoading(false);
  }

  function renderContentView() {
    if (loading) {
      return (
        <View style={styles.view}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.view}>
        <Text style={styles.textDisclaimer}>Disclaimer</Text>
        <Text style={styles.textDisclaimerDescription}>
          The information provided by the Zdaly Fuel Network Optimizer app is
          based on historical data. Data on Zdaly Light is updated once daily at
          8:00 a.m. eastern time. Any prospective information is based on that
          data and should not be relied on as a estimation of future
          performance. Any future product prices are the manufacturer's
          suggested retail price (MSRP) only. Sites are independent operators
          free to set their retail price.
        </Text>
        <CustomButton
          onPress={async () => {
            let status = await storeData(DISCLAIMER_SATSTUS, 'true');
            if (status) {
              props.navigation.replace(RouteNames.stationList.name);
            } else {
              Alert.alert('Something went wrong, Please try again');
            }
          }}
          style={{marginTop: 30}}
          buttonStyle={{width: '50%'}}
          title={'I Accept'}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <OpaqueHeader>
        <HeaderImage image={Images.logo.appLogo} />
      </OpaqueHeader>
      {renderContentView()}
    </View>
  );
}
