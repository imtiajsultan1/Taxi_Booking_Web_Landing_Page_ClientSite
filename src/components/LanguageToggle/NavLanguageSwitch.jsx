import { useLanguage } from "../../context/LanguageContext.jsx";
import { useTranslation } from "../../hooks/useTranslation.js";

const NavLanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const isRussian = language === "ru";

  const baseLabelClass =
    "relative z-10 flex-1 text-center text-[11px] font-semibold uppercase tracking-wide transition-colors duration-200";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isRussian}
      aria-label={t("language_toggle_label")}
      onClick={toggleLanguage}
      className="relative flex h-9 w-28 items-center rounded-full bg-white/10 px-1 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
    >
      <span
        className={`${baseLabelClass} ${
          isRussian ? "text-white/60" : "text-black"
        }`}
      >
        EN
      </span>
      <span
        className={`${baseLabelClass} ${
          isRussian ? "text-black" : "text-white/60"
        }`}
      >
        RU
      </span>
      <span
        aria-hidden="true"
        style={{ width: "calc(50% - 0.5rem)" }}
        className={`pointer-events-none absolute top-1 bottom-1 rounded-full bg-primary transition-all duration-200 ease-out ${
          isRussian ? "right-1" : "left-1"
        }`}
      />
    </button>
  );
};

export default NavLanguageSwitch;
