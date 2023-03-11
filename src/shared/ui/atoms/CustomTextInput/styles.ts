import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    height: 100,
  },

  viewFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,
    borderWidth: 3,
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
    ViewFlex: (borderColor: string) => ({
      ...styles.viewFlex,
      borderColor,
    }),
    Text: (color: string) => ({
      ...styles.text,
      color,
    }),
  };
};
