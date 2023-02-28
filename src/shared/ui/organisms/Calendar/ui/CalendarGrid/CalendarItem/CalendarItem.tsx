import React from 'react';
import {Pressable, View} from 'react-native';

import {CustomText} from '@shared/ui/atoms/CustomText';

import {useStyles} from './styles';

interface CalendarItemProps {
  title: string;
  isSelected?: boolean;
  isDisable?: boolean;
  onPress?: () => void;
}

export const CalendarItem: React.FC<CalendarItemProps> = ({
  title,
  isSelected = false,
  isDisable = false,
  onPress,
}) => {
  const styles = useStyles();
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={isDisable}>
      <View style={styles.button(isSelected)}>
        <CustomText style={styles.title(isSelected, isDisable)}>
          {title}
        </CustomText>
      </View>
    </Pressable>
  );
};
