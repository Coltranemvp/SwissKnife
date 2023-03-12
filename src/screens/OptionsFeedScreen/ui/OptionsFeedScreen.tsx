import React from 'react';
import {Pressable, View} from 'react-native';

import {useStore} from 'effector-react';

import {setScrolledOnBottomTab} from '@shared/lib/setScrolledOnBottomTab';
import {$scrollValue} from '@shared/model/scrollingContentOnBottomTabs';
import {CustomText} from '@shared/ui/atoms/CustomText';
import {Icon} from '@shared/ui/atoms/Icon';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';

import {useOptions} from '../lib/useOptions';
import {OptionsHeader} from './OptionsHeader';

export const OptionsFeedScreen: React.FC = () => {
  const scrollValue = useStore($scrollValue);

  const options = useOptions();
  return (
    <ScreenTemplate
      scrollProps={{
        onScroll: nativeEvent =>
          setScrolledOnBottomTab(nativeEvent, scrollValue),
        scrollEventThrottle: 32,
      }}>
      <OptionsHeader />
      <View>
        {options.map(item => (
          <Pressable key={`${item.iconName}`} onPress={item.onPress}>
            <Icon height={40} width={40} name={item.iconName} color={'red'} />
            <CustomText>{item.title}</CustomText>
          </Pressable>
        ))}
      </View>
    </ScreenTemplate>
  );
};
