import React from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

import {StackActions, useNavigation} from '@react-navigation/native';

import {navigationRef} from '@shared/lib/rootNavigation';
import {useTheme} from '@shared/theme/useTheme';
import {Icon} from '@shared/ui/atoms/Icon';

interface BackButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  isBackDisabled?: boolean;
}

export const BackButton: React.FC<BackButtonProps> = ({
  style,
  onPress,
  isBackDisabled,
}) => {
  const {dispatch} = useNavigation();
  const popAction = StackActions.pop(1);

  const {theme} = useTheme();

  const handleOnPress = () => {
    onPress && onPress();
    if (navigationRef.getState().index === 0) {
      dispatch({...StackActions.replace('TabNavigation')});
    } else {
      dispatch(popAction);
    }
  };

  return (
    <Pressable onPress={handleOnPress} style={style} disabled={isBackDisabled}>
      <Icon
        name="backArrow"
        height={16}
        width={16}
        color={isBackDisabled ? theme.icon.disable : theme.icon.active}
      />
    </Pressable>
  );
};
