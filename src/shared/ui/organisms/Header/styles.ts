import {TextAlignType} from '@shared/types/ui/TextAlign';
import {FlexAlignType, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  title: {
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },
  rightContent: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  backButton: {
    marginRight: 16,
  },
});

export const useStyles = () => ({
  ...styles,
  container: (backgroundColor: string, height?: number) => ({
    ...styles.container,
    backgroundColor,
    height,
  }),
  content: (alignItems: FlexAlignType) => ({
    ...styles.content,
    alignItems,
  }),
  title: (isCenter: boolean) => ({
    ...styles.title,
    textAlign: isCenter ? 'center' : ('left' as TextAlignType),
  }),
});
