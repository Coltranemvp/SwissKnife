import React, {ReactElement, useCallback} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import {setSafeAreaColor} from '@shared/model/currentSafeAreaColor';
import {useStyles} from '@shared/ui/templates/ScreenTemplate/styles';

import {useTheme} from '@theme/useTheme';

interface ScreenTemplateProps {
  backgroundColor?: string;
  children: ReactElement | ReactElement[];
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
}

export const ScreenTemplate: React.FC<ScreenTemplateProps> = ({
  children,
  backgroundColor,
  style,
  safeAreaStyle,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();

  const defaultColor = theme.BG.primary;

  useFocusEffect(
    useCallback(() => {
      setSafeAreaColor(backgroundColor || defaultColor);
    }, [backgroundColor, defaultColor]),
  );
  return (
    <View
      style={[styles.safeArea(backgroundColor || defaultColor), safeAreaStyle]}>
      <View style={[styles.wholePage(backgroundColor || defaultColor), style]}>
        {children}
      </View>
    </View>
  );
};
