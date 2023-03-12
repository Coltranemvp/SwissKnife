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
  isScrolled?: boolean;
}

export const ScreenTemplate: React.FC<PageTemplateProps> = ({
  children,
  backgroundColor,
  scrollProps,
  style,
  safeAreaStyle,
  isScrolled = true,
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
  const content = (
    <View style={[styles.wholePage(currentBackgroundColor), style]}>
      {children}
    </View>
  );

  return (
    <View style={[styles.safeArea(currentBackgroundColor), safeAreaStyle]}>
      {isScrolled ? (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollView}
          {...scrollProps}
          showsVerticalScrollIndicator={false}>
          {content}
        </ScrollView>
      ) : (
        <>{content}</>
      )}
    </View>
  );
};
