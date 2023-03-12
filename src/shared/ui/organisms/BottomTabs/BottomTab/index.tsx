import React from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

import {IconName} from '@shared/config/iconList';
import {useOffsetWithTiming} from '@shared/lib/useOffsetWithTiming';
import {useTheme} from '@shared/theme/useTheme';
import {CustomText} from '@shared/ui/atoms/CustomText';
import {Icon} from '@shared/ui/atoms/Icon';

import {useStyles} from './styles';

interface BottomTabProps {
  isFocused: boolean;
  iconColor: string;
  iconName: string;
  title: string;
  onPress: () => void;
}
export const BottomTab: React.FC<BottomTabProps> = ({
  isFocused,
  iconColor,
  iconName,
  onPress,
  title,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();
  const animatedStyles = useOffsetWithTiming(
    isFocused,
    {
      duration: 300,
      offsetValue: -15,
    },
    {
      duration: 200,
      offsetValue: 0,
    },
  );

  const currentName = iconName?.toLowerCase() as IconName;

  return (
    <Pressable
      style={styles.tab(theme.bottomTab.secondaryBG)}
      onPress={onPress}>
      <Animated.View style={[styles.icon, animatedStyles]}>
        <Icon color={iconColor} name={currentName} />
      </Animated.View>
      {isFocused && (
        <CustomText style={styles.text(iconColor)}>{title}</CustomText>
      )}
    </Pressable>
  );
};
