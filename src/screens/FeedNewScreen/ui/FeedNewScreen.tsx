import {setScrolledOnBottomTab} from '@shared/lib/setScrolledOnBottomTab';
import {$scrollValue} from '@shared/model/scrollingContentOnBottomTabs';
import {Calendar} from '@shared/ui/organisms/Calendar';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';
import dayjs from 'dayjs';
import {useStore} from 'effector-react';
import React, {useState} from 'react';
import {HomeScreenHeader} from './HomeScreenHeader';

export const FeedNewScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const scrollValue = useStore($scrollValue);
  return (
    <ScreenTemplate
      scrollProps={{
        onScroll: nativeEvent =>
          setScrolledOnBottomTab(nativeEvent, scrollValue),
        scrollEventThrottle: 32,
      }}>
      <HomeScreenHeader />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </ScreenTemplate>
  );
};
