import {useNavigation} from '@react-navigation/native';
import {IconName} from '@shared/config/iconList';

type OptionType = {
  iconName: IconName;
  title: string;
  description?: string;
  onPress: () => void;
};

export const useOptions = (): OptionType[] => {
  const {navigation} = useNavigation();
  return [
    {
      iconName: 'calendar',
      title: 'calendar',
      onPress: () => {},
    },
  ];
};
