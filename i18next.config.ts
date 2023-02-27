import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import { languageDefault } from './src/constants/locale';

const resources = {
  en: {
    translation: translationEn,
  },
};

i18next.use(initReactI18next).init({
  debug: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  resources,
  lng: languageDefault,
  fallbackLng: [languageDefault],
});
