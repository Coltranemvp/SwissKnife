import {RoundButtonType} from '@shared/types/RoundButtonType';

export const useActionButtonsData = (isGetNotification: boolean) => {
  return [
    {
      iconName: 'search',
      isGetNotification: false,
      onPress: () => {},
    },
    {
      iconName: 'order',
      isGetNotification: isGetNotification,
      onPress: () => {},
    },
  ] as RoundButtonType[];
};
