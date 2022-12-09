import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../assets/images/Images';
import CustomButton from '../../modules/controls/CustomButton';
import OpaqueHeader from '../../modules/headers/OpaqueHeader';
import TitleHeader from '../../modules/headers/TitleHeader';
import styles from './Style';

export default function Details(props: any) {
  return (
    <View style={styles.container}>
      <OpaqueHeader>
        <TitleHeader
          onBackButtonPress={() => {
            props?.navigation?.goBack();
          }}
          title="Details"
          backButton={true}
          backButtonIcon={Images.icons.backButtonIcon}
        />
      </OpaqueHeader>
      <View style={styles.view}>
        <Text style={styles.textDisclaimer}>Station Subscribed</Text>
        <View style={styles.viewDetail}>
          <Text style={styles.text1}>ACTIVE FROM</Text>
          <View style={styles.timerContainer}>
            <View style={styles.timerTextContainer}>
              <Text style={styles.timerText}>9</Text>
              <Text style={styles.secondsText}>seconds</Text>
            </View>
            <View style={styles.stopMainConatiner}>
              <TouchableOpacity style={styles.stopContainer}>
                <Text style={{color: 'white', fontFamily: 'Poppins'}}>
                  Stop
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontFamily: 'Poppins',
              }}>
              MORE INFO
            </Text>
            <Image
              source={Images.icons.arrowDropDown}
              style={{width: 25, height: 25, marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
{
  /* <CustomButton
              onPress={async () => {}}
              style={{marginTop: 30}}
              buttonStyle={{width: '50%'}}
              title={'Stop'}
            /> */
}
