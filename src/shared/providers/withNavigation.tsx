import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../lib/rootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {compose} from '@shared/lib/compose';

const withNavigation = (children: Function) => () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {children()}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export const withProviders = compose(withNavigation);
