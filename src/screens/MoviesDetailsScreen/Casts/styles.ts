import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },

  castersGap: {
    flex: 1,
    gap: 5,
  },

  box: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    paddingTop: 7,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
  },

  iconBorder: {
    borderRadius: 50,
    borderWidth: 4,
    position: 'absolute',
  },

  icon: {
    borderRadius: 50,
    overflow: 'hidden',
    width: 50,
    borderWidth: 1,
  },

  textCaster: {
    fontSize: 14,
    marginLeft: 66,
    paddingRight: 15,
  },
});

export const useStyles = () => ({
  ...styles,
  textContainer: (backgroundColor: string, borderColor: string) => ({
    ...styles.textContainer,
    backgroundColor,
    borderColor,
  }),
  iconBorder: (borderColor: string) => ({
    ...styles.iconBorder,
    borderColor,
  }),
  icon: (borderColor: string) => ({
    ...styles.icon,
    borderColor,
  }),
  textCaster: (color: string) => ({
    ...styles.textCaster,
    color,
  }),
});
