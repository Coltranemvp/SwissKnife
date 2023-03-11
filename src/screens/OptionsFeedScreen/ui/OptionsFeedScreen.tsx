import {setScrolledOnBottomTab} from '@shared/lib/setScrolledOnBottomTab';
import {$scrollValue} from '@shared/model/scrollingContentOnBottomTabs';
import {Calendar} from '@widgets/Calendar';
import {ScreenTemplate} from '@shared/ui/templates/ScreenTemplate';
import dayjs from 'dayjs';
import {useStore} from 'effector-react';
import React, {useState} from 'react';
import {HomeScreenHeader} from './HomeScreenHeader';

export const OptionsFeedScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const scrollValue = useStore($scrollValue);
  return (
    <ScreenTemplate
      isScrolled={false}
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
