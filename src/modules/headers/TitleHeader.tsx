import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';
import Colors from '../../assets/color/Color';

interface TitleHeaderProps {
  title?: string;
  backButton?: boolean;
  backButtonIcon?: ImageSourcePropType;
  onBackButtonPress: () => void;
}

export default function TitleHeader(props: TitleHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>

      {props.backButton && (
        <TouchableOpacity
          onPress={() => props.onBackButtonPress()}
          style={styles.backIconTouch}>
          <Image
            style={styles.backIconImage}
            resizeMode="contain"
            source={props.backButtonIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  titleText: {
    color: Colors.blackColor,
    fontWeight: 'bold',
    fontSize: 22,
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  },
  backIconTouch: {
    height: 20,
    padding: 4,
  },
  backIconImage: {
    flex: 1,
  },
});
