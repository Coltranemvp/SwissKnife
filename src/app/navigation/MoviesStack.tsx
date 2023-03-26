import React from 'react';

import {StackHeaderProps, createStackNavigator} from '@react-navigation/stack';

import {MoviesStackParams} from '@shared/types/navigation/MoviesStack';
import {Header} from '@shared/ui/organisms/Header';

import MoviesDetailsScreen from '@screens/MoviesDetailsScreen/MoviesDetailsScreen';
import MoviesScreens from '@screens/MoviesScreens/MoviesScreens';

const Stack = createStackNavigator<MoviesStackParams>();

export const MoviesStack: React.FC = () => {
  const getHeader = (props: StackHeaderProps) => (
    <Header withBackButton headerTitle={props.route.name} />
  );

  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          header: getHeader,
        };
      }}>
      <Stack.Screen name={'MoviesScreens'} component={MoviesScreens} />
      <Stack.Screen
        name={'MoviesDetailScreen'}
        component={MoviesDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
