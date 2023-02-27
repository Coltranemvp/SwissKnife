import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import EN from './translations/en-us.json';

const resources = {
  en: {
    translation: EN,
  },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  ns: [],
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18next;
