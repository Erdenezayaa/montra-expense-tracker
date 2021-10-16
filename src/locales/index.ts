import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '@app/locales/en.json';
import mn from '@app/locales/mn.json';

export const resources = {
  en: {
    locales: en,
  },
  mn: {
    locales: mn,
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['locales'],
  defaultNS: 'locales',
  resources,
});

export default i18n;
