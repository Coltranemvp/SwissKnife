import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    height: 80,
  },

  icon: {
    alignItems: 'center',
  },
});

export const useStyles = () => ({
  ...styles,
});
