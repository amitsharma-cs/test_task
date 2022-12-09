import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/color/Color';
import Images from '../../assets/images/Images';

interface StationItemProps {
  item: any;
  onPress: () => void;
}

export default function StationItem(props: StationItemProps) {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        marginTop: 30,
        borderColor: Colors.lightGreyColor,
      }}>
      <Image
        style={{height: 40, width: 50}}
        resizeMode="contain"
        source={{uri: props.item.avatar}}
      />
      <View style={{marginLeft: 10}}>
        <Text
          style={{color: Colors.blackColor, fontWeight: 'bold', fontSize: 18}}>
          {props?.item?.first_name}
        </Text>
        <Text
          style={{color: Colors.blackColor, fontWeight: '300', fontSize: 15}}>
          {props?.item?.last_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
