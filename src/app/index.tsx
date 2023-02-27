import {initI18next} from '@shared/config/locales/i18n';

import {
  $currentSafeAreaColor,
  $isBottomBar,
} from '@shared/model/currentSafeAreaColor';
import {withProviders} from '@shared/providers/withNavigation';
import {useStore} from 'effector-react';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainStack} from './navigation';
import {useStyles} from './styles';

const App: React.FC = () => {
  const safeAreaBackgroundColor = useStore($currentSafeAreaColor);
  const isBottomBar = useStore($isBottomBar);

  useEffect(() => {
    initI18next();
  }, []);

  const styles = useStyles();
  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={styles.safeArea(safeAreaBackgroundColor)}
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
