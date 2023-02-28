import React, {ReactElement, useState} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {useStyles} from './styles';

interface CustomInputProps {
  title: string;
  styleCustomInputView?: StyleProp<ViewStyle>;
  styleCustomInputText?: StyleProp<TextStyle>;
  placeholder?: string;
  rightContent?: ReactElement | ReactElement[];
}

export const CustomTextInput: React.FC<CustomInputProps> = ({
  title,
  styleCustomInputView,
  styleCustomInputText,
  placeholder,
  rightContent,
}) => {
  const viewTextInputStyles = useStyles();

  return (
    <View style={(viewTextInputStyles.View, styleCustomInputView)}>
      <Text style={styleCustomInputText || viewTextInputStyles.text}>
        {title}
      </Text>
      <View style={viewTextInputStyles.ViewFlex}>
        <TextInput
          style={viewTextInputStyles.input}
          placeholder={placeholder}
        />
        <View>{rightContent}</View>
      </View>
    </View>
  );
};
