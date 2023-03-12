import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';
import {Calendar} from '@widgets/Calendar';
import dayjs from 'dayjs';
import React, {useState} from 'react';

export const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  return (
    <ScreenTemplate isScrolled={false}>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </ScreenTemplate>
  );
};
