import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParams} from '../../shared/types/navigation/MainStackParams';
import {TabNavigation} from './BottomTabsStack';

const Stack = createStackNavigator<MainStackParams>();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'BottomTabsStack'} component={TabNavigation} />
    </Stack.Navigator>
  );
}
