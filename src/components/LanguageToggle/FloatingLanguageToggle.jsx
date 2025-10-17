import { useLanguage } from "../../context/LanguageContext.jsx";
import { useTranslation } from "../../hooks/useTranslation.js";

const FloatingLanguageToggle = () => {
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary px-4 py-3 text-sm font-bold text-black shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black/50"
    >
      {t("language_toggle_label")}
    </button>
  );
};

export default FloatingLanguageToggle;
