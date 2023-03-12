import 'i18next';

import {resources} from './i18n';
import EN from './translations/en-us.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'EN';
    resources: (typeof resources)['en'];
  }
}
