import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import Animated from 'react-native-reanimated';

import {useStyles} from './styles';

interface MonthPickerItemProps {
  title: string;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<TextStyle>>>;
  itemSize: number;
}

export const MonthPickerItem: React.FC<MonthPickerItemProps> = ({
  title,
  style,
  itemSize,
}) => {
  const styles = useStyles();
  return (
    <Animated.View style={styles.container(itemSize)}>
      <Animated.Text style={[styles.text, style]}>{title}</Animated.Text>
    </Animated.View>
  );
};
