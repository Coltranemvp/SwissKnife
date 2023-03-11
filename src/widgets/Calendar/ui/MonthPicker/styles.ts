import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 66,
    paddingHorizontal: 10,
    paddingTop: 10,
    height: 220,
    alignItems: 'center',
  },
  divider: {
    position: 'absolute',
    width: '100%',
    height: 1,
    zIndex: 2,
  },
  dividerTop: {
    marginTop: 100,
  },
  dividerBottom: {
    marginTop: 130,
  },
});

export const useStyles = () => {
  return {
    ...styles,
    divider: (backgroundColor: string) => ({
      ...styles.divider,
      backgroundColor,
    }),
  };
};
