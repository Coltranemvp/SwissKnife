import {useTheme} from '@shared/theme/useTheme';
import {DefaultTFuncReturn} from 'i18next';
import React, {ReactElement} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {CustomText} from '../CustomText';
import {useStyles} from './styles';

interface CustomInputProps {
  title: string;
  inputStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  placeholder?: string | DefaultTFuncReturn;
  rightContent?: ReactElement | ReactElement[];
  errorText?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomTextInput: React.FC<CustomInputProps> = ({
  title,
  inputStyle,
  textInputStyle,
  placeholder,
  rightContent,
  errorText,
  value,
  onChange,
}) => {
  const styles = useStyles();

  const {theme} = useTheme();

  return (
    <View style={(styles.view, inputStyle)}>
      <Text style={textInputStyle || styles.text(theme.text.secondary)}>
        {title}
      </Text>
      <View
        style={styles.viewFlex(
          errorText ? theme.input.error : theme.input.primary,
        )}>
        <TextInput
          value={value}
          onChangeText={text => onChange(text)}
          style={styles.input}
          placeholder={placeholder || ''}
        />
        <View>{rightContent}</View>
      </View>
      {errorText && <CustomText>{errorText}</CustomText>}
    </View>
  );
};
