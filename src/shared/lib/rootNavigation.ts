import {
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

import {createEffect} from 'effector';

type NavigateFxType = {
  screen: never | string;
  params?: never;
};

export const navigationRef = createNavigationContainerRef();

export function goBack() {
  if (navigationRef.isReady()) {
    const popAction = StackActions.pop(1);
    navigationRef.dispatch(popAction);
  }
}

export function getNavigationStackKey() {
  if (navigationRef.isReady()) {
    return navigationRef.current?.getState()?.key;
  }
  return null;
}

export const navigateFx = createEffect(({screen, params}: NavigateFxType) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen, params);
  }
});

export function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
