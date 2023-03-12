import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IconName} from '@shared/config/iconList';
import {MainStackParams} from '@shared/types/navigation/MainStack';

type OptionType = {
  iconName: IconName;
  title: string;
  description?: string;
  onPress: () => void;
};

export const useOptions = (): OptionType[] => {
  const {navigate} = useNavigation<StackNavigationProp<MainStackParams>>();
  return [
    {
      iconName: 'calendar',
      title: 'Calendar',
      onPress: () => navigate('OptionsStack'),
    },
  ];
};
