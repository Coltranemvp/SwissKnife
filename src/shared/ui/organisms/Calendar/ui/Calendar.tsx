import React, {useState} from 'react';
import {View} from 'react-native';

import dayjs from 'dayjs';

import {CustomButton} from '@shared/ui/atoms/CustomButton';

import {useTheme} from '@shared/theme/useTheme';

import {CalendarGrid} from './CalendarGrid';
import {MonthPicker} from './MonthPicker';
import {YearsGrid} from './YearsGrid';
import {useStyles} from './styles';

interface CalendarProps {
  initialDate?: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
  setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

export const Calendar: React.FC<CalendarProps> = ({
  initialDate,
  selectedDate,
  setSelectedDate,
}) => {
  const initialValue = initialDate || dayjs();
  const [isYearChange, setIsYearChange] = useState(false);
  const [monthPickerState, setMonthPickerState] = useState(
    initialValue.month(),
  );

  const {theme} = useTheme();
  const styles = useStyles();
  return (
    <View style={styles.container(theme.white)}>
      <CustomButton
        height={24}
        viewStyle={styles.button(theme.calendar.buttonColor)}
        text={selectedDate.year().toString()}
        textStyle={styles.buttonText(theme.calendar.active)}
        onPress={() => setIsYearChange(prev => !prev)}
      />
      {isYearChange ? (
        <YearsGrid
          selectedDate={selectedDate}
          initialValue={initialValue}
          setSelectedDate={setSelectedDate}
        />
      ) : (
        <View style={styles.dateContainer}>
          <CalendarGrid
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedMonth={monthPickerState}
          />
          <MonthPicker
            selectedMonth={monthPickerState}
            setSelectedMonth={setMonthPickerState}
          />
        </View>
      )}
    </View>
  );
};
