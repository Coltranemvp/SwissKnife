import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useStore} from 'effector-react';

import '@shared/config/locales/i18n';
import {
  $currentSafeAreaColor,
  $isBottomBar,
} from '@shared/model/currentSafeAreaColor';
import {withProviders} from '@shared/providers/withNavigation';
import {useTheme} from '@shared/theme/useTheme';

import {MainStack} from './navigation/MainStack';
import {useStyles} from './styles';

const App: React.FC = () => {
  const safeAreaBackgroundColor = useStore($currentSafeAreaColor);
  const isBottomBar = useStore($isBottomBar);
  const styles = useStyles();
  const {theme} = useTheme();

  linter check

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
