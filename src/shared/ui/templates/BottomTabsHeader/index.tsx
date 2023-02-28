import React, {ReactElement} from 'react';
import {View} from 'react-native';

import {useStyles} from './styles';

interface BottomTabsHeaderTemplateProps {
  children: ReactElement | ReactElement[];
}

export const BottomTabsHeaderTemplate: React.FC<
  BottomTabsHeaderTemplateProps
> = ({children}) => {
  const styles = useStyles();

  return <View style={styles.container()}>{children}</View>;
};
