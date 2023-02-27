import i18next, {i18n, TFunction} from 'i18next';
import {initReactI18next} from 'react-i18next';
import EN from './locales/en-us.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: EN,
  },
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // debug: true,
    resources,
  });

export interface Customi18n extends i18n {
  t: TFunction;
}

export default i18next as Customi18n;
