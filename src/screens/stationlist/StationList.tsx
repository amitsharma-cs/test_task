import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Colors from '../../assets/color/Color';
import Images from '../../assets/images/Images';
import CustomTextInput from '../../modules/controls/CustomTextInput';
import OpaqueHeader from '../../modules/headers/OpaqueHeader';
import TitleHeader from '../../modules/headers/TitleHeader';
import StationItem from '../../modules/screens/StationItem';
import RouteNames from '../../navigation/RouteNames';
import styles from './Style';
import {useDispatch, useSelector} from 'react-redux';
import {listAction} from '../../redux/actions/ListAction';

export default function StationList(props: any) {
  const listState = useSelector((state: any) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAction());
  }, []);

  return (
    <View style={styles.container}>
      <OpaqueHeader>
        <TitleHeader
          onBackButtonPress={() => ({})}
          title="Select Station"
          backButton={false}
          backButtonIcon={Images.icons.backButtonIcon}
        />
      </OpaqueHeader>
      <View style={styles.view}>
        <CustomTextInput
          textInputStyle={{
            backgroundColor: Colors.lightGreyColor,
            borderRadius: 10,
            paddingLeft: 10,
            borderBottomWidth: 0,
            marginTop: 20,
          }}
          textInputProps={{
            keyboardType: 'email-address',
            placeholder: 'Search by ID, Name, City',
          }}
          icon={Images.icons.searchIcon}
        />
        {listState?.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={listState?.response}
            renderItem={({item}) => (
              <StationItem
                item={item}
                onPress={() => {
                  props.navigation.navigate(RouteNames.details.name);
                }}
              />
            )}
            keyExtractor={(item: any) => item.id}
          />
        )}
      </View>
    </View>
  );
}
