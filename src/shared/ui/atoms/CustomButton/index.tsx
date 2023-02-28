import React, {ReactElement} from 'react';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';

import {getButtonDefaultStyle} from '@shared/ui/atoms/CustomButton/styles';

import {useTheme} from '@theme/useTheme';

interface ButtonProps {
  text?: string;
  onPress?: () => void;
  buttonType?: 'primary' | 'secondary';
  children?: ReactElement;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isDisabled?: boolean;
  height?: number | string;
  isLoading?: boolean;
}

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  buttonType = 'primary',
  onPress,
  children,
  viewStyle,
  textStyle,
  isDisabled,
  height = 56,
  isLoading = false,
}) => {
  const {theme} = useTheme();
  const styles = getButtonDefaultStyle({
    buttonType,
    isDisabled: isDisabled || isLoading,
    primaryBackgroundColor: theme.primary,
    secondaryBorderColor: theme.primary,
    primaryTextColor: theme.white,
    secondaryTextColor: theme.primary,
    height,
  });
  return (
    <Pressable
      disabled={isDisabled || isLoading}
      onPress={onPress}
      style={[styles.view, viewStyle]}>
      {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : children}
    </Pressable>
  );
};
