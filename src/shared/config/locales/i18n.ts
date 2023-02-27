import i18next, {i18n} from 'i18next';
import {initReactI18next, TFunction} from 'react-i18next';
import EN from './locales/en-us.json';

const resources = {
  en: {
    translation: EN,
  },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export interface Customi18n extends i18n {
  t: TFunction;
}

export default i18next as Customi18n;
