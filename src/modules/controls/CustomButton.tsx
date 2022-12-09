import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';
import Colors from '../../assets/color/Color';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  icon?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <View style={[props.style, {alignItems: 'center'}]}>
      <TouchableOpacity
        onPress={() => {
          props.onPress && props.onPress();
        }}
        style={[styles.container, props.buttonStyle]}>
        <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
        {props.icon ? (
          <Image style={styles.icon} resizeMode="contain" source={props.icon} />
        ) : (
          <View />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.redPrimary,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.whiteColor,
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    height: 20,
    width: 20,
    padding: 4,
    marginLeft: 10,
  },
});
