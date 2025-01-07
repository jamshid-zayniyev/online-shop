import { createContext, useContext, useState } from "react";

// Til fayllarini import qilish
import enTranslations from "../lang/en/translation";
import ruTranslations from "../lang/ru/translation";
import uzTranslations from "../lang/uz/translation";

const translations = {
  en: enTranslations,
  ru: ruTranslations,
  uz: uzTranslations
};

const LanguageContext = createContext();

// Tilni tanlash uchun context provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Tilni olish uchun xususiy hook
export const useLanguage = () => useContext(LanguageContext);

// Tarjima olish uchun hook
export const useTranslation = () => {
  const { language } = useLanguage();
  return (key) => translations[language][key] ;
};
