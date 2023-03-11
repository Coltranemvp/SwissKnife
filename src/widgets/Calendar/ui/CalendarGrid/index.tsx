import React from 'react';
import {View} from 'react-native';

import dayjs from 'dayjs';

import {useCurrentMonth} from '../../lib/useCurrentMonth';
import {useDaysOfWeek} from '../../lib/useDaysOfWeek';
import {CalendarItem} from './CalendarItem/CalendarItem';
import {useStyles} from './styles';

interface CalendarGridProps {
  selectedDate: dayjs.Dayjs;
  selectedMonth: number;
  setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  selectedDate,
  selectedMonth,
  setSelectedDate,
}) => {
  const gridData = useCurrentMonth(selectedDate.month(selectedMonth));
  const dayOfWeekData = useDaysOfWeek();
  const styles = useStyles();
  return (
    <View>
      <View style={styles.container}>
        {dayOfWeekData.map(item => (
          <CalendarItem key={item} title={item} />
        ))}
      </View>
      {gridData?.map((column, index) => (
        <View key={index} style={styles.container}>
          {column?.map(item => (
            <CalendarItem
              key={`${item.date()}}`}
              onPress={() => setSelectedDate(item)}
              isDisable={item.month() !== selectedMonth}
              isSelected={
                item.month() === selectedMonth &&
                item.date() === selectedDate.date() &&
                item.month() === selectedDate.month()
              }
              title={`${item.date()}`}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
