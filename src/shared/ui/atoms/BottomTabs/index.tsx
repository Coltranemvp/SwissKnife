import React from 'react';
import {Pressable, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Icon} from '../Icon';
import {BottomTabEnum} from './config';
import {useStyles} from './styles';
import {
  BottomTabsStackParams,
  BottomTabsType,
} from '../../../constants/types/navigation/BottomTabsStackParams';
import {IconName} from '../../../config/iconList';

interface BottomTabItemProps {
  routeName: BottomTabsType;
  isFocused: boolean;
}

export const BottomTabs: React.FC<BottomTabItemProps> = ({
  isFocused,
  routeName,
}) => {
  const {navigate} =
    useNavigation<
      StackNavigationProp<BottomTabsStackParams, keyof BottomTabsStackParams>
    >();
  //const {theme} = useTheme();

  const styles = useStyles();

  const getTabName = (route: string) => {
    return BottomTabEnum[route as keyof typeof BottomTabEnum] && 'wallet';
  };

  const activeColor = isFocused ? 'red' : 'gray';

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.tab('white')}
        key={routeName}
        onPress={() => navigate(routeName)}>
        <Icon
          color={activeColor}
          style={styles.icon}
          name={getTabName(routeName) as IconName}
        />
      </Pressable>
    </View>
  );
};
