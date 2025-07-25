// Metodik_FE/src/components/Header.tsx
// This component renders the header of the Metodika application, including the logo, navigation links
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BRAND_NAME } from '../config/constants';

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
    <header className="bg-black shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand name with gradient text */}
        <h1 className="text-xl font-bold tracking-wide text-gradient">
          {BRAND_NAME}
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-gradient hover:text-white transition">
            {t('about.title')}
          </a>
          <a href="#services" className="text-gradient hover:text-white transition">
            {t('services.title')}
          </a>
          <a href="#contact" className="text-gradient hover:text-white transition">
            {t('contact.title')}
          </a>
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 rounded text-sm text-gradient border-gradient border transition hover:bg-white hover:text-black"
          >
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>

        {/* Mobile hamburger icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gradient rounded transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gradient rounded transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gradient rounded transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full md:hidden bg-black shadow-md px-6 pb-4 flex flex-col space-y-4 z-50">
          <a
            href="#about"
            className="text-gradient hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            {t('about.title')}
          </a>
          <a
            href="#services"
            className="text-gradient hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            {t('services.title')}
          </a>
          <a
            href="#contact"
            className="text-gradient hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            {t('contact.title')}
          </a>
          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="self-center px-3 py-1 border rounded text-sm text-gradient border-gradient hover:bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 hover:text-white transition"
          >
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
