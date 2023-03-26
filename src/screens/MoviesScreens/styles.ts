import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  textHeader: {
    fontSize: 28,
    textAlign: 'center',
  },

  headerView: {
    paddingHorizontal: 60,
    paddingTop: 102,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },

  moviesInputStyle: {
    borderRadius: 12,
  },

  moviesTextInputStyle: {
    backgroundColor: 'red',
    margin: 0,
    padding: 0,
    height: 0,
  },

  textBody: {
    fontSize: 17,
    padding: 7,
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },

  scrollView: {
    flex: 1,
  },
});

export const useStyles = () => {
  return {
    ...styles,
    moviesInputStyle: (backgroundColor: string) => ({
      ...styles.moviesInputStyle,
      backgroundColor,
    }),
    textBody: (color: string) => ({
      ...styles.textBody,
      color,
    }),
    container: (backgroundColor: string) => ({
      ...styles.container,
      backgroundColor,
    }),
    textHeader: (color: string) => ({
      ...styles.textHeader,
      color,
    }),
  };
};
