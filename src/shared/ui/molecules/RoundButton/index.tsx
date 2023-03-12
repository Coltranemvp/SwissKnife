import React from 'react';
import {Pressable, StyleProp, View, ViewStyle} from 'react-native';

import {IconName} from '@shared/config/iconList';
import {Icon} from '@shared/ui/atoms/Icon';

import {useTheme} from '@theme/useTheme';

import {useStyles} from './styles';

interface RoundButtonProps {
  iconName: IconName;
  isGetNotification: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  iconName,
  isGetNotification,
  style,
  onPress,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();
  return (
    <View style={style}>
      <Pressable style={styles.container} onPress={onPress}>
        <Icon
          height={20}
          width={20}
          name={iconName}
          color={theme.icon.primary}
        />
      </Pressable>
      {isGetNotification && <View style={styles.dot(theme.text.active)} />}
    </View>
  );
};
