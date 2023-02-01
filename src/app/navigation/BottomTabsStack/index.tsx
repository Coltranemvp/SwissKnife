import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTabs} from '../../../shared/ui/atoms/BottomTabs';
import {
  BottomTabsStackParams,
  BottomTabsType,
} from '../../../shared/constants/types/navigation/BottomTabsStackParams';
import {FeedNewScreen} from '../../../screens/FeedNewScreen/ui/FeedNewScreen';
import {ProfileScreen} from '../../../screens/ProfileScreen/ui/ProfileScreen';
import {RatingScreen} from '../../../screens/RatingScreen/ui/RatingScreen';
import {SearchScreen} from '../../../screens/SearchScreen/ui/SearchScreen';

const Tab = createBottomTabNavigator<BottomTabsStackParams>();

export const TabNavigation: React.FC = () => {
  const getBottomTabs = (focused: boolean, routeName: BottomTabsType) => (
    <BottomTabs isFocused={focused} routeName={routeName} />
  );

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={'OrderStack'}
        component={FeedNewScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => getBottomTabs(focused, 'OrderStack'),
        }}
      />

      <Tab.Screen
        name={'SearchOrderStack'}
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => getBottomTabs(focused, 'SearchOrderStack'),
        }}
      />
      <Tab.Screen
        name={'WalletStack'}
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => getBottomTabs(focused, 'WalletStack'),
        }}
      />
      <Tab.Screen
        name={'ProfileScreen'}
        component={RatingScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => getBottomTabs(focused, 'ProfileScreen'),
        }}
      />
    </Tab.Navigator>
  );
};
