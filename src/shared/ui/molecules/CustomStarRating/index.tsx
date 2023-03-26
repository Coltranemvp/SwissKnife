import React, {useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Icon} from '@shared/ui/atoms/Icon';

import {useRatingData} from './lib/useRatingData';
import {useStyles} from './styles';

interface CustomStarRatingProps {
  count?: number;
  defaultRating?: number;
  style?: StyleProp<ViewStyle>;
}

export const CustomStarRating: React.FC<CustomStarRatingProps> = ({
  count,
  defaultRating,
  style,
}) => {
  const styles = useStyles();
  const [selectRating, setSelectRating] = useState(defaultRating || 3);
  const starData = useRatingData(count);

  return (
    <View style={[styles.container, style]}>
      {starData.map((item, key) => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={item}
          onPress={() => setSelectRating(item)}>
          <Icon
            name={item <= selectRating ? 'starMovieUp' : 'starMovieNotUp'}
            width={15}
            height={15}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomStarRating;
