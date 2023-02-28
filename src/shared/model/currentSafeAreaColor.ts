import {themes} from '@shared/theme/themes';
import {createEvent, restore} from 'effector';

const setSafeAreaColor = createEvent<string>();

const setIsBottomBar = createEvent<boolean>();

const reset = createEvent();

const $currentSafeAreaColor = restore(
  setSafeAreaColor,
  themes.primary.BG.tertiary,
).reset();

const $isBottomBar = restore(setIsBottomBar, false).reset(reset);

export {
  $currentSafeAreaColor,
  setSafeAreaColor,
  $isBottomBar,
  setIsBottomBar,
  reset,
};
