import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  navigation: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 50,
    margin: 10,
  },

  image: {
    marginHorizontal: 0,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  imageContainer: {
    marginTop: 5,
    width: '100%',
    height: '60%',
  },

  textHeader: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 150,
    marginTop: 370,
    textShadowRadius: 10,
    textShadowColor: 'black',
  },

  header: {
    flexDirection: 'row',
  },

  play: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
    marginTop: 355,
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 50,
  },

  text: {
    fontSize: 17,
    padding: 7,
    textAlign: 'center',
  },

  genre: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginLeft: 21,
  },

  customStarRating: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  hrLine: {
    height: 2,
    width: 290,
    marginHorizontal: 30,
  },

  textCasts: {
    fontSize: 17,
    padding: 7,
  },

  viewCaster: {
    flex: 1,
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});

export const useStyles = () => ({
  ...styles,
  container: (backgroundColor: string) => ({
    ...styles.container,
    backgroundColor,
  }),
  textHeader: (color: string) => ({
    ...styles.textHeader,
    color,
  }),
  text: (color: string) => ({
    ...styles.text,
    color,
  }),
  textCasts: (color: string) => ({
    ...styles.textCasts,
    color,
  }),
  hrLine: (backgroundColor: string) => ({
    ...styles.hrLine,
    backgroundColor,
  }),
  navigation: (backgroundColor: string, borderColor: string) => ({
    ...styles.navigation,
    backgroundColor,
    borderColor,
  }),
  play: (backgroundColor: string, borderColor: string) => ({
    ...styles.play,
    backgroundColor,
    borderColor,
  }),
});
