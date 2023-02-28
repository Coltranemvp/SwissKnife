import React from 'react';
import {Pressable} from 'react-native';

import {CustomText} from '@shared/ui/atoms/CustomText';

import {useStyles} from './styles';

interface YearsItemProps {
  title?: string;
  isSelected: boolean;
  onPress: () => void;
}

export const YearsItem: React.FC<YearsItemProps> = ({
  title,
  onPress,
  isSelected,
}) => {
  const styles = useStyles();
  return (
    <Pressable style={styles.container(isSelected)} onPress={onPress}>
      <CustomText
        fontWeight={isSelected ? '700' : '400'}
        style={styles.title(isSelected)}>{`${title}`}</CustomText>
    </Pressable>
  );
};
