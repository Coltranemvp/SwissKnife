import React, {useState} from 'react';

import dayjs from 'dayjs';

import {Calendar} from '@widgets/Calendar';

import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';

export const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <ScreenTemplate isScrolled={false}>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </ScreenTemplate>
  );
};
