import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import {SCREEN_HEIGHT} from '@shared/constants/screenSize';
import {setIsScrolledOnBottomTab} from '@shared/model/scrollingContentOnBottomTabs';

export const setScrolledOnBottomTab = ({
  nativeEvent,
}: NativeSyntheticEvent<NativeScrollEvent>) => {
  const isScrolled = nativeEvent.contentOffset.y > SCREEN_HEIGHT / 10;

  setIsScrolledOnBottomTab(isScrolled);
};
