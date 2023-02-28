import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 21,
    lineHeight: 28,
  },
});

export const useStyles = () => {
  return {
    ...styles,
    container: (backgroundColor: string) => ({
      ...styles.container,
      backgroundColor,
    }),
    text: (color: string) => ({...styles.text, color}),
  };
};
