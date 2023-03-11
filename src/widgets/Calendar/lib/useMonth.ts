import {useTranslation} from 'react-i18next';

export const useMonth = (indentCount: number) => {
  const {t} = useTranslation();
  const monthData = [
    t('month.december'),
    t('month.november'),
    t('month.october'),
    t('month.september'),
    t('month.august'),
    t('month.july'),
    t('month.june'),
    t('month.may'),
    t('month.april'),
    t('month.march'),
    t('month.february'),
    t('month.january'),
  ];
  const indentData = [...Array(indentCount).keys()].map(() => '');

  return {
    monthData: [...indentData, ...monthData, ...indentData],
    maxMonthIndex: monthData.length - 1,
  };
};
