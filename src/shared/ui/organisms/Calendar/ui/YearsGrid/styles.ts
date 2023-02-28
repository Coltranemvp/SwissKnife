import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export const useStyles = () => {
  return {
    ...styles,
    container: (isSelected: boolean) => ({
      ...styles.container,
      marginBottom: isSelected ? 0 : 25,
    }),
  };
};
