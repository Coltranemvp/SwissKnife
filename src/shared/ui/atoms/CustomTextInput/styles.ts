import {StyleSheet} from 'react-native';

const viewTextInputStyles = StyleSheet.create({
  View: {
    height: 100,
    //backgroundColor: 'purple',
  },

  ViewFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,
    borderColor: '#e6ffec',
    borderWidth: 3,
    paddingRight: 16,
  },

  text: {
    fontSize: 20,
    color: 'black',
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
    ...viewTextInputStyles,
  };
};
