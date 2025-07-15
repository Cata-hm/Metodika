// Metodik_FE/src/components/Header.tsx
// This component renders the header of the Metodika application, including the logo, navigation links
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BRAND_NAME from '../config/constants';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-[#4A90E2]">{BRAND_NAME}</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
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

        {/* Icono hamburguesa móvil */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#4A90E2] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#4A90E2] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-[#4A90E2] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md px-6 pb-4 flex flex-col space-y-4">
          <a href="#about" className="hover:text-[#4A90E2]" onClick={() => setMenuOpen(false)}>{t('about.title')}</a>
          <a href="#services" className="hover:text-[#4A90E2]" onClick={() => setMenuOpen(false)}>{t('services.title')}</a>
          <a href="#contact" className="hover:text-[#4A90E2]" onClick={() => setMenuOpen(false)}>{t('contact.title')}</a>
          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="self-start px-3 py-1 border rounded text-sm text-[#4A90E2] border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition"
          >
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
