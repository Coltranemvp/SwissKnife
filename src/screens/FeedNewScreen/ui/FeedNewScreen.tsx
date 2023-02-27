import {Calendar} from '@shared/ui/organisms/Calendar';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';
import dayjs from 'dayjs';
import React, {useState} from 'react';

export const FeedNewScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <ScreenTemplate>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </ScreenTemplate>
  );
};
