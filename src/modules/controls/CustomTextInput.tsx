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
} from 'react-native';
import React from 'react';
import Images from '../../assets/images/Images';
import Colors from '../../assets/color/Color';

interface CustomTextInput {
  icon: ImageSourcePropType;
  textInputProps?: TextInputProps;
  textInputStyle?: StyleProp<TextStyle>;
  onChange: (value: any) => void;
}

export default function CustomTextInput(props: CustomTextInput) {
  return (
    <View style={[styles.container, props.textInputStyle]}>
      <Image style={styles.icon} resizeMode="contain" source={props.icon} />
      <TextInput
        onChangeText={text => {
          props.onChange(text);
        }}
        {...props.textInputProps}
        style={[styles.textInput]}
        placeholderTextColor={Colors.greyColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: Colors.lightGreyColor,
    borderBottomWidth: 2,
  },
  textInput: {
    color: Colors.blackColor,
    fontWeight: '400',
    fontSize: 15,
    width: '100%',
    marginLeft: 10,
  },
  icon: {
    height: 20,
    width: 20,
    padding: 4,
  },
});
