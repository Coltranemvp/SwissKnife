import {IconName} from '@shared/config/iconList';

export type RoundButtonType = {
  iconName: IconName;
  isGetNotification: boolean;
  onPress: () => void;
};
