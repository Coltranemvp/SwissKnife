import React, {ReactElement} from 'react';
import {
  Text as NativeText,
  TextStyle,
  TextProps as NativeTextProps,
} from 'react-native';
import {useStyles} from './styles';
import {useTheme} from '@theme/useTheme';

export type TextProps = Pick<
  TextStyle,
  'fontWeight' | 'fontSize' | 'color' | 'lineHeight' | 'fontFamily'
> & {style?: TextStyle} & {config?: NativeTextProps} & {
  children?: string | ReactElement;
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
            color: color || theme.black,
            fontSize,
            fontWeight,
            lineHeight,
          }),
          style,
        ]}>
        {children}
      </NativeText>
    );
  },
);
