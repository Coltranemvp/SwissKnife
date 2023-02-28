import {TextStyle} from 'react-native';

export const useStyles = () => ({
  text: ({
    color,
    fontWeight = '400',
    fontSize = 14,
    lineHeight,
    fontFamily,
  }: TextStyle) => ({
    fontSize,
    fontWeight,
    lineHeight,
    color,
    fontFamily,
  }),
});
