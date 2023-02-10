import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#6868ea',

    height: 58,
    borderRadius: 12,

    padding: 16,
    margin: 16,
  },
});

export const useStyles = () => {
  return {
    ...styles,
  };
};
