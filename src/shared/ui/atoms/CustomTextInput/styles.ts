import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,
    borderWidth: 1,
    paddingRight: 16,
  },

  text: {
    fontSize: 20,
    padding: 10,
  },

  input: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    height: 40,

    flex: 1,
  },
});

export const useStyles = () => {
  return {
    ...styles,
    viewFlex: (borderColor: string) => ({
      ...styles.inputContainer,
      borderColor,
    }),
    text: (color: string) => ({
      ...styles.text,
      color,
    }),
  };
};
