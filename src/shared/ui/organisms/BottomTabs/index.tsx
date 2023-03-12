import React, {useCallback} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {setIsBottomBar} from '@shared/model/currentSafeAreaColor';
import {useTheme} from '@shared/theme/useTheme';

import {BottomTab} from './BottomTab';
import {BottomTabIcon, BottomTabName} from './config';
import {useStyles} from './styles';

interface BottomTabItemProps {
  routeNames: string[];
  focused: number;
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}

export const BottomTabs: React.FC<BottomTabItemProps> = ({
  focused,
  routeNames,
  style,
}) => {
  const navigation = useNavigation();
  const {theme} = useTheme();

  useFocusEffect(
    useCallback(() => {
      setIsBottomBar(true);
      return () => {
        setIsBottomBar(false);
      };
    }, []),
  );

  const styles = useStyles();

  const getTabName = (route: string) => {
    return BottomTabName[route as keyof typeof BottomTabName];
  };

  const getIconName = (route: string) => {
    return BottomTabIcon[route as keyof typeof BottomTabIcon]?.toLowerCase();
  };

  const getIconColor = (index: number) => {
    return focused === index
      ? theme.bottomTab.primary
      : theme.bottomTab.disable;
  };

  return (
    <Animated.View style={[styles.container, style]}>
      {routeNames.map((item, index) => {
        return (
          <BottomTab
            key={index}
            onPress={() => {
              navigation.navigate(item);
            }}
            isFocused={focused === index}
            iconColor={getIconColor(index)}
            iconName={getIconName(item)}
            title={getTabName(item)}
          />
        );
      })}
    </Animated.View>
  );
};
