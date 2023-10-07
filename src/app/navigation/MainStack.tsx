import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {MainStackParams} from '../../shared/types/navigation/MainStack';
import {TabNavigation} from './BottomTabsStack';
import {MoviesStack} from './MoviesStack';
import {OptionsStack} from './OptionsStack';

const Stack = createStackNavigator<MainStackParams>();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'BottomTabsStack'} component={TabNavigation} />
      <Stack.Screen name={'OptionsStack'} component={OptionsStack} />
      <Stack.Screen name={'MoviesStack'} component={MoviesStack} />
    </Stack.Navigator>
  );
}
