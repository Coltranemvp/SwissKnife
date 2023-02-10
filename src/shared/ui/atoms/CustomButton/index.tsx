import React from 'react';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import {useStyles} from './style';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  styleCBView?: StyleProp<ViewStyle>;
  styleCBText?: StyleProp<TextStyle>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  styleCBView,
  styleCBText,
}) => {
  const styles = useStyles();

  return (
    <Pressable onPress={onPress} style={[styles.container, styleCBView]}>
      <Text style={styleCBText || styles.text}>{title}</Text>
    </Pressable>
  );
};
