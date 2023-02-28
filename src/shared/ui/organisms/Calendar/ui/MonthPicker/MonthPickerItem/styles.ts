import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export const useStyles = () => {
  return {
    ...styles,
    container: (size: number) => ({
      ...styles.container,
      height: size,
      width: size,
    }),
  };
};
