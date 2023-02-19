import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderRadius: 15,
  },
  button: {
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: '700',
  },
  dateContainer: {
    flexDirection: 'row',
  },
});

export const useStyles = () => {
  return {
    ...styles,
    container: (backgroundColor: string) => ({
      ...styles.container,
      backgroundColor,
    }),
    button: (backgroundColor: string) => ({
      ...styles.button,
      backgroundColor,
    }),
    buttonText: (color: string) => ({
      ...styles.buttonText,
      color,
    }),
  };
};
