import 'react-i18next';
import EN from './locales/en-us.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'EN';
    resources: {
      EN: typeof EN;
    };
  }
}
