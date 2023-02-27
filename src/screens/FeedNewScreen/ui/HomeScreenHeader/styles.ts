import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    marginHorizontal: 16,
  },
});

export const useStyles = () => ({
  ...styles,
});
