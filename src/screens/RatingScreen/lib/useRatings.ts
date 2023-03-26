import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {IconName} from '@shared/config/iconList';
import {MainStackParams} from '@shared/types/navigation/MainStack';

type RatingsType = {
  iconName: IconName;
  title: string;
  description?: string;
  onPress: () => void;
};

export const useRatings = (): RatingsType[] => {
  const {navigate} = useNavigation<StackNavigationProp<MainStackParams>>();
  return [
    {
      iconName: 'star',
      title: 'Movies Screens',
      onPress: () => navigate('MoviesStack'),
    },
  ];
};
