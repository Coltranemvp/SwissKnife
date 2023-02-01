import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainStack} from './navigation';

export const Application: React.FC = () => {
  return (
    <>
      <SafeAreaView edges={['top']} style={{backgroundColor: 'white'}} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
      <SafeAreaView edges={['bottom']} style={{backgroundColor: 'white'}} />
    </>
  );
};
