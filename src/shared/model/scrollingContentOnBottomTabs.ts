import {createEvent, restore} from 'effector';

const setIsScrolledOnBottomTab = createEvent<boolean>();

const $isScrolledOnBottomTab = restore(setIsScrolledOnBottomTab, false);

export {$isScrolledOnBottomTab, setIsScrolledOnBottomTab};
