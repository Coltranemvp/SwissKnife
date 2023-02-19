import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';

const viewButtonDefaultStyles = StyleSheet.create({
  viewButtonDefaultStyles: {
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
});

const styles = {
  primaryView: (backgroundColor: string, height: number | string) => ({
    ...viewButtonDefaultStyles.viewButtonDefaultStyles,
    backgroundColor,
    height,
  }),
  secondaryView: (borderColor: string, height: number | string) => ({
    ...viewButtonDefaultStyles.viewButtonDefaultStyles,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor,
    height,
  }),
  text: (color: string) => ({
    ...viewButtonDefaultStyles.text,
    color,
  }),
};

export const getButtonDefaultStyle = ({
  buttonType,
  isDisabled,
  primaryBackgroundColor,
  secondaryBorderColor,
  primaryTextColor,
  secondaryTextColor,
  height,
}: {
  buttonType?: 'primary' | 'secondary';
  isDisabled?: boolean;
  primaryBackgroundColor: string;
  secondaryBorderColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  height: number | string;
}): {view: StyleProp<ViewStyle>; text: StyleProp<TextStyle>} => {
  const isButtonPrimaryType = buttonType === 'primary';
  const opacity = isDisabled ? 0.5 : 1;
  const viewStyle = isButtonPrimaryType
    ? styles.primaryView(primaryBackgroundColor, height)
    : styles.secondaryView(secondaryBorderColor, height);
  const textStyle = isButtonPrimaryType
    ? styles.text(primaryTextColor)
    : styles.text(secondaryTextColor);

  return {
    view: [{opacity}, viewStyle],
    text: [textStyle],
  };
};
