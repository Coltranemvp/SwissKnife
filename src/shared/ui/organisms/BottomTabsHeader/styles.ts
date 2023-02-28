import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  roundButton: {
    marginLeft: 8,
  },
  divider: {flex: 1},
});

export const useStyles = () => {
  return {
    ...styles,
  };
};
