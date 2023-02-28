import {createEvent, restore} from 'effector';

const setIsScrolledOnBottomTab = createEvent<boolean>();

const $isScrolledOnBottomTab = restore(setIsScrolledOnBottomTab, false);

const setScrollValue = createEvent<number>();

const $scrollValue = restore(setScrollValue, 0);

export {
  $isScrolledOnBottomTab,
  setIsScrolledOnBottomTab,
  setScrollValue,
  $scrollValue,
};
