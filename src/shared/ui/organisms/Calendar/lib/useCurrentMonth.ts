import dayjs from 'dayjs';

export const useCurrentMonth = (selectedDate: dayjs.Dayjs) => {
  if (selectedDate === undefined) {
    return [];
  }

  const countDays = 7;
  const countWeeks = 6;
  const startFromSunday = 2;

  const dateFirstDayMonth = dayjs(
    new Date(selectedDate.year(), selectedDate.month(), 1),
  );

  const firstDayInGrid = dateFirstDayMonth.subtract(
    dateFirstDayMonth.day() - 1,
    'day',
  );

  let index = 0;

  return [...Array(countWeeks).keys()].map(() =>
    [...Array(countDays).keys()].map(() => {
      const result = firstDayInGrid.add(
        firstDayInGrid.day() - startFromSunday + index,
        'day',
      );
      index = index + 1;
      return result;
    }),
  );
};
