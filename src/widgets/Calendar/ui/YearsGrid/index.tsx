import React from 'react';
import {View} from 'react-native';

import dayjs from 'dayjs';

import {useCurrentYears} from '../../lib/useCurrentYears';
import {YearsItem} from './YearsItem';
import {useStyles} from './styles';

interface YearsGridProps {
  selectedDate: dayjs.Dayjs;
  initialValue: dayjs.Dayjs;
  setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

export const YearsGrid: React.FC<YearsGridProps> = ({
  selectedDate,
  setSelectedDate,
  initialValue,
}) => {
  const currentYears = useCurrentYears(initialValue);
  const styles = useStyles();
  return (
    <View>
      {currentYears?.map((column, index) => (
        <View
          key={index}
          style={styles.container(index === currentYears.length - 1)}>
          {column?.map(item => (
            <YearsItem
              key={item}
              isSelected={selectedDate.year() === item}
              onPress={() => setSelectedDate(selectedDate.year(item))}
              title={item.toString()}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
