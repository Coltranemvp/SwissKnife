import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {OptionsStackParams} from '@shared/types/navigation/OptionsStack';
import {CalendarScreen} from '@screens/CalendarScreen';
import {Header} from '@shared/ui/organisms/Header';

const Stack = createStackNavigator<OptionsStackParams>();

export const OptionsStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          header: props => (
            <Header withBackButton headerTitle={props.route.name} />
          ),
        };
      }}>
      <Stack.Screen name={'CalendarScreen'} component={CalendarScreen} />
    </Stack.Navigator>
  );
};
