import React from 'react';
import {Pressable, StyleProp, View, ViewStyle} from 'react-native';

import {Avatar} from '@shared/ui/atoms/Avatar';
import {CustomText} from '@shared/ui/atoms/CustomText';
import {Icon} from '@shared/ui/atoms/Icon';

import {useTheme} from '@theme/useTheme';

import {useStyles} from './styles';

interface UserActionButtonProps {
  avatarTitle: string;
  userName: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const UserActionButton: React.FC<UserActionButtonProps> = ({
  userName,
  avatarTitle,
  style,
  onPress,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();
  return (
    <View style={[styles.container, style]}>
      <Avatar title={avatarTitle} />
      <Pressable style={styles.container} onPress={onPress}>
        <CustomText style={styles.title}>{userName}</CustomText>
        <Icon
          height={16}
          width={16}
          name="nextArrow"
          color={theme.icon.secondary}
        />
      </Pressable>
    </View>
  );
};
