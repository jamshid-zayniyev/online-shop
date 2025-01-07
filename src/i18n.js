import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en/translation.json';
import ru from './lang/ru/translation.json';
import uz from './lang/uz/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
