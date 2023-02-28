import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: 32,
  },
  icon: {position: 'absolute'},
  tab: {
    height: 78,
    width: 78,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const useStyles = () => {
  return {
    ...styles,

    text: (color: string) => ({
      ...styles.text,
      color,
    }),
    tab: (backgroundColor: string) => ({
      ...styles.tab,
      backgroundColor,
    }),
  };
};
