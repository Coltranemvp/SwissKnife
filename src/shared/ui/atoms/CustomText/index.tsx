import React, {ReactElement} from 'react';
import {
  Text as NativeText,
  TextProps as NativeTextProps,
  TextStyle,
} from 'react-native';

import {TFunction} from 'i18next';

import {useTheme} from '@theme/useTheme';

import {useStyles} from './styles';

export type TextProps = Pick<
  TextStyle,
  'fontWeight' | 'fontSize' | 'color' | 'lineHeight' | 'fontFamily'
> & {style?: TextStyle} & {config?: NativeTextProps} & {
  children?: string | ReactElement | TFunction;
};

export const CustomText: React.FC<TextProps> = React.memo(
  ({
    color,
    children,
    fontSize,
    fontWeight = '400',
    lineHeight,
    style,
    config,
  }) => {
    const {theme} = useTheme();
    const styles = useStyles();

    return (
      <NativeText
        {...config}
        style={[
          styles.text({
            color: color || theme.text.secondary,
            fontSize,
            fontWeight,
            lineHeight,
          }),
          style,
        ]}>
        <>{children}</>
      </NativeText>
    );
  },
);
