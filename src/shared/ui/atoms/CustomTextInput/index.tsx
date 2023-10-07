import React, {ReactElement} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {DefaultTFuncReturn} from 'i18next';

import {useTheme} from '@shared/theme/useTheme';

import {CustomText} from '../CustomText';
import {useStyles} from './styles';

interface CustomInputProps {
  title?: string;
  inputStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  placeholder?: string | DefaultTFuncReturn;
  rightContent?: ReactElement | ReactElement[];
  leftContent?: ReactElement | ReactElement[];
  errorText?: string;
  value: string;
  borderColor?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholderTextColor?: string;
}

export const CustomTextInput: React.FC<CustomInputProps> = ({
  title,
  inputStyle,
  textInputStyle,
  placeholder,
  rightContent,
  leftContent,
  errorText,
  value,
  borderColor,
  onChange,
  placeholderTextColor,
}) => {
  const styles = useStyles();

  const {theme} = useTheme();

  const getBorderColor = () => {
    if (errorText) {
      return theme.input.error;
    }

    return borderColor ? borderColor : theme.input.primary;
  };

  return (
    <View style={inputStyle}>
      <Text style={textInputStyle || styles.text(theme.text.secondary)}>
        {title}
      </Text>
      <View style={styles.inputContainer(getBorderColor())}>
        <View>{leftContent}</View>
        <TextInput
          value={value}
          onChangeText={text => onChange(text)}
          style={styles.input}
          placeholder={placeholder || ''}
          placeholderTextColor={placeholderTextColor}
        />
        <View>{rightContent}</View>
      </View>
      {errorText && <CustomText>{errorText}</CustomText>}
    </View>
  );
};
