import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 34,
    paddingTop: 23,
    paddingBottom: 26,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    display: 'flex',
  },

  tab: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const useStyles = () => {
  return {
    ...styles,
    tab: (backgroundColor: string) => ({
      ...styles.tab,
      backgroundColor,
    }),
  };
};
