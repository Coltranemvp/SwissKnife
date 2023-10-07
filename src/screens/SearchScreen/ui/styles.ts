import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  toDoInputStyle: {
    padding: 10,
  },

  toDoTextInputStyle: {
    padding: 10,
  },

  toDoActionButton: {
    padding: 5,
  },
});

export const useStyles = () => {
  return {
    ...styles,
  };
};
