import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    lineHeight: 24,
    marginLeft: 8,
    marginRight: 4,
  },
});

export const useStyles = () => {
  return {
    ...styles,
  };
};
