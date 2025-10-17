import translations from "../JSON/text.json";
import { useLanguage } from "../context/LanguageContext.jsx";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const entry = translations[key];
    if (!entry) {
      if (import.meta.env && import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.warn(`Missing translation for key: ${key}`);
      }
      return key;
    }

    return entry[language] ?? entry.en ?? key;
  };

  return { t, language };
};
