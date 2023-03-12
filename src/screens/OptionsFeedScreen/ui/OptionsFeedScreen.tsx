import {setScrolledOnBottomTab} from '@shared/lib/setScrolledOnBottomTab';
import {$scrollValue} from '@shared/model/scrollingContentOnBottomTabs';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';
import {useStore} from 'effector-react';
import React from 'react';
import {OptionsHeader} from './OptionsHeader';
import {useOptions} from '../lib/useOptions';
import {Pressable, View} from 'react-native';
import {Icon} from '@shared/ui/atoms/Icon';
import {CustomText} from '@shared/ui/atoms/CustomText';

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
