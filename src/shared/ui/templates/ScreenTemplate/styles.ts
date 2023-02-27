import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wholePage: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    minHeight: '100%',
  },
  safeArea: {
    flex: 1,
  },
});

export const useStyles = () => ({
  ...styles,
  wholePage: (backgroundColor: string) => ({
    ...styles.wholePage,
    backgroundColor,
  }),

  safeArea: (backgroundColor: string) => ({
    ...styles.safeArea,
    backgroundColor,
  }),
});
