import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Obtener idioma actual
  const currentLang = i18n.language;

  // Definir idioma a cambiar (opuesto)
  const toggleLang = currentLang === 'en' ? 'es' : 'en';

  const handleClick = () => {
    i18n.changeLanguage(toggleLang);
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 border rounded bg-[#4A90E2] text-white hover:bg-[#357ABD] transition"
      aria-label="Switch language"
    >
      {toggleLang.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
