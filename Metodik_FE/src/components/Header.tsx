// src/components/Header.tsx
// This component renders the header of the application with navigation links and language toggle.
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-[#4A90E2]">Methodika</h1>
        <nav className="space-x-6 flex items-center">
          <a href="#about" className="hover:text-[#4A90E2]">{t('about.title')}</a>
          <a href="#services" className="hover:text-[#4A90E2]">{t('services.title')}</a>
          <a href="#contact" className="hover:text-[#4A90E2]">{t('contact.title')}</a>
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 border rounded text-sm text-[#4A90E2] border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition"
          >
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
