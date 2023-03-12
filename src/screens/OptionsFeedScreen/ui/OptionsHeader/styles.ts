import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 16,
  },
});

export const useStyles = () => ({
  ...styles,
});
