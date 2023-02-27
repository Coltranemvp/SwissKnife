import React, {ReactElement, useCallback, useRef} from 'react';
import {ScrollViewProps, StyleProp, View, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useFocusEffect} from '@react-navigation/native';

import {scrollTop} from '@shared/lib/scrollTo';
import {setSafeAreaColor} from '@shared/model/currentSafeAreaColor';

import {useTheme} from '@theme/useTheme';
import {useStyles} from './styles';

interface PageTemplateProps {
  backgroundColor?: string;
  children: ReactElement | ReactElement[];
  scrollProps?: ScrollViewProps;
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
}

export const ScreenTemplate: React.FC<PageTemplateProps> = ({
  children,
  backgroundColor,
  scrollProps,
  style,
  safeAreaStyle,
}) => {
  const styles = useStyles();
  const {theme} = useTheme();
  const scrollViewRef = useRef(null);
  const defaultColor = theme.BG.secondary;
  const currentBackgroundColor = backgroundColor || defaultColor;

  useFocusEffect(
    useCallback(() => {
      setSafeAreaColor(currentBackgroundColor);
      return () => {
        setSafeAreaColor(defaultColor);
        scrollTop(scrollViewRef);
      };
    }, [currentBackgroundColor, defaultColor]),
  );
  return (
    <View style={[styles.safeArea(currentBackgroundColor), safeAreaStyle]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollView}
        {...scrollProps}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.wholePage(currentBackgroundColor), style]}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};
