import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useStore} from 'effector-react';

import {BottomTabs} from '@shared/ui/organisms/BottomTabs';
import {$isScrolledOnBottomTab} from '@shared/model/scrollingContentOnBottomTabs';
import {useOffsetWithTiming} from '@shared/lib/useOffsetWithTiming';
import {FeedNewScreen} from '@screens/FeedNewScreen';
import {BottomTabsStackParams} from '@shared/types/navigation/BottomTabsStackParams';

import {ProfileScreen} from '@screens/ProfileScreen';
import {RatingScreen} from '@screens/RatingScreen';
import {SearchScreen} from '@screens/SearchScreen';

const Tab = createBottomTabNavigator<BottomTabsStackParams>();

export const TabNavigation: React.FC = () => {
  const isScrolledOnBottomTab = useStore($isScrolledOnBottomTab);

  const animatedStyles = useOffsetWithTiming(isScrolledOnBottomTab);

  const getTabBar = ({state}: BottomTabBarProps) => {
    return (
      <BottomTabs
        focused={state.index}
        routeNames={state.routeNames}
        style={animatedStyles}
      />
    );
  };

  return (
    <Tab.Navigator
      key="BottomTabs"
      tabBar={getTabBar}
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
