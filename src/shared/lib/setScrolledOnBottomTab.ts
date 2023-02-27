import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import {
  setIsScrolledOnBottomTab,
  setScrollValue,
} from '@shared/model/scrollingContentOnBottomTabs';

export const setScrolledOnBottomTab = (
  {nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>,
  prevValue = 0,
) => {
  if (
    prevValue > nativeEvent.contentOffset.y ||
    nativeEvent.contentOffset.y <= 0
  ) {
    setIsScrolledOnBottomTab(false);
    setScrollValue(nativeEvent.contentOffset.y);
    return;
  }
  setScrollValue(nativeEvent.contentOffset.y);
  setIsScrolledOnBottomTab(true);
};
