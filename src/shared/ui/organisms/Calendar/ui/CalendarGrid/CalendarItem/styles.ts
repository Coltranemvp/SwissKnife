import {StyleSheet} from 'react-native';

import {useTheme} from '@shared/theme/useTheme';

const styles = StyleSheet.create({
  container: {
    height: 34,
    width: 34,
    padding: 5,
  },
  button: {
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    lineHeight: 18,
    marginVertical: 3,
    fontWeight: '400',
    fontSize: 14,
  },
});

export const useStyles = () => {
  const {theme} = useTheme();
  return {
    ...styles,
    button: (isSelected: boolean) => ({
      ...styles.button,
      backgroundColor: isSelected
        ? theme.calendar.active
        : theme.calendar.activeText,
    }),
    title: (isSelected: boolean, isDisable: boolean) => ({
      ...styles.title,
      color: (() => {
        if (isDisable) {
          return theme.calendar.disableText;
        }

        if (isSelected) {
          return theme.calendar.activeText;
        }

        return theme.calendar.primaryText;
      })(),
    }),
  };
};
