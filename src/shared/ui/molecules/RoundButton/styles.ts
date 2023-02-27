import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    marginLeft: 25,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});

export const useStyles = () => {
  return {
    ...styles,
    dot: (backgroundColor: string) => ({...styles.dot, backgroundColor}),
  };
};
