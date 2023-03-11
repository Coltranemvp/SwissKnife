import {useTranslation} from 'react-i18next';

export const useDaysOfWeek = () => {
  const {t} = useTranslation();

  return [
    t('daysOfWeek.sunday'),
    t('daysOfWeek.monday'),
    t('daysOfWeek.tuesday'),
    t('daysOfWeek.wednesday'),
    t('daysOfWeek.thursday'),
    t('daysOfWeek.friday'),
    t('daysOfWeek.saturday'),
  ];
};
