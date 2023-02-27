import {NavigationContainer} from '@react-navigation/native';
import {
  $currentSafeAreaColor,
  $isBottomBar,
} from '@shared/model/currentSafeAreaColor';
import {withProviders} from '@shared/providers/withNavigation';
import {useStore} from 'effector-react';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainStack} from './navigation';
import {useStyles} from './styles';

const App: React.FC = () => {
  const safeAreaBackgroundColor = useStore($currentSafeAreaColor);
  const isBottomBar = useStore($isBottomBar);
  const styles = useStyles();
  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={styles.safeArea(safeAreaBackgroundColor)}
      />

      <MainStack />

      {!isBottomBar ? (
        <SafeAreaView
          edges={['bottom']}
          style={styles.safeArea(safeAreaBackgroundColor)}
        />
      ) : null}
    </>
  );
};

export default withProviders(App);
