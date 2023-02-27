import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import EN from './locales/en-us.json';

export const resources = {
  en: {
    translation: EN,
  },
};

export const initI18next = () =>
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });
