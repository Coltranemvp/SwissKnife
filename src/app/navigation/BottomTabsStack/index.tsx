import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useStore} from 'effector-react';

import {BottomTabsStackParams} from '../../../shared/types/navigation/BottomTabsStackParams';
import {FeedNewScreen} from '../../../screens/FeedNewScreen/ui/FeedNewScreen';
import {ProfileScreen} from '../../../screens/ProfileScreen/ui/ProfileScreen';
import {RatingScreen} from '../../../screens/RatingScreen/ui/RatingScreen';
import {SearchScreen} from '../../../screens/SearchScreen/ui/SearchScreen';
import {BottomTabs} from '@shared/ui/organisms/BottomTabs';
import {$isScrolledOnBottomTab} from '@shared/model/scrollingContentOnBottomTabs';
import {useOffsetWithTiming} from '@shared/lib/useOffsetWithTiming';

const Tab = createBottomTabNavigator<BottomTabsStackParams>();

export const TabNavigation: React.FC = () => {
  const isScrolledOnBottomTab = useStore($isScrolledOnBottomTab);

  const animatedStyles = useOffsetWithTiming(isScrolledOnBottomTab);

  return (
    <Tab.Navigator
      key="BottomTabs"
      tabBar={({state}: BottomTabBarProps) => {
        return (
          <BottomTabs
            focused={state.index}
            routeNames={state.routeNames}
            style={animatedStyles}
          />
        );
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'OrderStack'} component={FeedNewScreen} />
      <Tab.Screen name={'SearchOrderStack'} component={SearchScreen} />
      <Tab.Screen name={'WalletStack'} component={ProfileScreen} />
      <Tab.Screen name={'ProfileScreen'} component={RatingScreen} />
    </Tab.Navigator>
  );
};
