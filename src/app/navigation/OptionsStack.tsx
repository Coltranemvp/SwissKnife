import React from 'react';

import {StackHeaderProps, createStackNavigator} from '@react-navigation/stack';

import {OptionsStackParams} from '@shared/types/navigation/OptionsStack';
import {Header} from '@shared/ui/organisms/Header';

import {CalendarScreen} from '@screens/CalendarScreen';

const Stack = createStackNavigator<OptionsStackParams>();

export const OptionsStack: React.FC = () => {
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
      <Stack.Screen name={'CalendarScreen'} component={CalendarScreen} />
    </Stack.Navigator>
  );
};
