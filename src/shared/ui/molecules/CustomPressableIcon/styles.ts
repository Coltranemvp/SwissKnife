import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 50,
    margin: 5,
  },
});

export const useStyles = () => ({
  ...styles,
  container: (backgroundColor: string, borderColor: string) => ({
    ...styles.container,
    backgroundColor,
    borderColor,
  }),
});
