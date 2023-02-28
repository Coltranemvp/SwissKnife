import {StyleSheet} from 'react-native';

import {useTheme} from '@theme/useTheme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomEndRadius: 24,
    marginHorizontal: -16,
    marginTop: -16,
  },
});

export const useStyles = () => {
  const {theme} = useTheme();
  return {
    ...styles,
    container: () => ({
      ...styles.container,
      backgroundColor: theme.BG.tertiary,
    }),
  };
};
