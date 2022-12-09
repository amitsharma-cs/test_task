import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';

export default function OpaqueHeader(props: any) {
  const childern = props.children;
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroudImage}
        source={Images.bg.backgroundImage}></ImageBackground>
      <View style={styles.coverView}>{childern}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
  },
  backgroudImage: {
    flex: 1,
    opacity: 0.2,
  },
  coverView: {
    top: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
