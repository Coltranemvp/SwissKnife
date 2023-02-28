import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {useTheme} from '@theme/useTheme';

import {useStyles} from './styles';
import {CustomText} from '../CustomText';

interface AvatarProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const Avatar: React.FC<AvatarProps> = ({title, style}) => {
  const styles = useStyles();
  const {theme} = useTheme();
  return (
    <View style={[styles.container(theme.BG.active), style]}>
      <CustomText style={styles.text(theme.text.primary)}>{title}</CustomText>
    </View>
  );
};
