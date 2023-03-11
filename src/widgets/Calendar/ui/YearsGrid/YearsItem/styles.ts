import {StyleSheet} from 'react-native';

import {useTheme} from '@shared/theme/useTheme';

const styles = StyleSheet.create({
  container: {
    height: 34,
    width: 77,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  title: {
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 14,
  },
});

export const useStyles = () => {
  const {theme} = useTheme();
  return {
    ...styles,
    container: (isSelected: boolean) => ({
      ...styles.container,
      backgroundColor: isSelected
        ? theme.calendar.active
        : theme.calendar.activeText,
    }),
    title: (isSelected: boolean) => ({
      ...styles.title,
      color: isSelected
        ? theme.calendar.activeText
        : theme.calendar.primaryText,
    }),
  };
};
