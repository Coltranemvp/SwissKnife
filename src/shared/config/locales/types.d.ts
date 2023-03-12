import 'react-i18next';

import EN from './translations/en-us.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'EN';
    resources: {
      EN: typeof EN;
    };
  }
}
