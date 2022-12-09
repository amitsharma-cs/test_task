import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
interface HeaderImageProps {
  image: ImageSourcePropType;
}
export default function HeaderImage(props: HeaderImageProps) {
  return (
    <Image resizeMode="contain" style={styles.image} source={props.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '30%',
  },
});
