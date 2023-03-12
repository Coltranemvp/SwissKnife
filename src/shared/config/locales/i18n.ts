import {initReactI18next} from 'react-i18next';

import i18next from 'i18next';

import EN from './translations/en-us.json';

// the translations
// (tip move them in a JSON file and import them)
export const resources = {
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

export default i18next;
