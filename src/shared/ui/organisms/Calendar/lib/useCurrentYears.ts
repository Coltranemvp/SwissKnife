import dayjs from 'dayjs';

export const useCurrentYears = (initialValue: dayjs.Dayjs) => {
  const currentYear = initialValue.year();
  const countItems = 4;

  let index = countItems * countItems - 1;

  return [...Array(countItems).keys()].map(() =>
    [...Array(countItems).keys()].map(() => {
      const result = currentYear - index;
      index = index - 1;
      return result;
    }),
  );
};
