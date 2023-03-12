import {setScrolledOnBottomTab} from '@shared/lib/setScrolledOnBottomTab';
import {$scrollValue} from '@shared/model/scrollingContentOnBottomTabs';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';
import {useStore} from 'effector-react';
import React from 'react';
import {OptionsHeader} from './OptionsHeader';
import {useOptions} from '../lib/useOptions';
import {Pressable} from 'react-native';
import {Icon} from '@shared/ui/atoms/Icon';

export const OptionsFeedScreen: React.FC = () => {
  const scrollValue = useStore($scrollValue);

  const options = useOptions();
  return (
    <ScreenTemplate
      isScrolled={false}
      scrollProps={{
        onScroll: nativeEvent =>
          setScrolledOnBottomTab(nativeEvent, scrollValue),
        scrollEventThrottle: 32,
      }}>
      <OptionsHeader />
      <>
        {options.map(item => (
          <Pressable onPress={item.onPress}>
            <Icon name={item.iconName} color={'red'} />
          </Pressable>
        ))}
      </>
    </ScreenTemplate>
  );
};
