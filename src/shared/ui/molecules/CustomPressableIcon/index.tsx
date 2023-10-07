import React from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

import {IconName} from '@shared/config/iconList';
import {useTheme} from '@shared/theme/useTheme';
import {Icon} from '@shared/ui/atoms/Icon';

import {useStyles} from './styles';

interface PressableIconProps {
  name: IconName;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const CustomPressableIcon: React.FC<PressableIconProps> = ({
  name,
  style,
  onPress,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();

  return (
    <Pressable
      style={style || styles.container(theme.BG.fifthly, theme.BG.sixthly)}
      onPress={onPress}>
      <Icon name={name} color={'white'} />
    </Pressable>
  );
};

export default CustomPressableIcon;
