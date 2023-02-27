import {NavigationContainer} from '@react-navigation/native';
import {
  $currentSafeAreaColor,
  $isBottomBar,
} from '@shared/model/currentSafeAreaColor';
import {withProviders} from '@shared/providers/withNavigation';
import {useTheme} from '@shared/theme/useTheme';
import {useStore} from 'effector-react';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainStack} from './navigation';
import {useStyles} from './styles';

const App: React.FC = () => {
  const safeAreaBackgroundColor = useStore($currentSafeAreaColor);
  const isBottomBar = useStore($isBottomBar);
  const styles = useStyles();
  const {theme} = useTheme();
  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={styles.safeArea(
          isBottomBar ? theme.BG.tertiary : safeAreaBackgroundColor,
        )}
      />

      <MainStack />

      <SafeAreaView
        edges={['bottom']}
        style={styles.safeArea(safeAreaBackgroundColor)}
      />
    </>
  );
};

export default withProviders(App);
