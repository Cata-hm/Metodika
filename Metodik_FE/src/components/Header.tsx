// Metodik_FE/src/components/Header.tsx
// This component renders the header of the Metodika application, including the logo, navigation links
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BRAND_NAME } from '../config/constants';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // 🧠 Scroll effect to detect if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500); // Cambia a blanco si baja más de 500px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 shadow transition-colors duration-300 ${
        isScrolled ? 'bg-gray-100' : 'bg-black'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="Logo" className="h-6" />
          {/* Brand name */}
          <h1 className="text-xl font-bold tracking-wide text-gradient-nohover">
            {BRAND_NAME}
          </h1>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className={`transition ${
      isScrolled ? 'text-gradient-black' : 'text-gradient'
    }`}>
            {t('about.title')}
          </a>
          <a href="#services" className={`transition ${
      isScrolled ? 'text-gradient-black' : 'text-gradient'
    }`}>
            {t('services.title')}
          </a>
          <a href="#contact" className={`transition ${
      isScrolled ? 'text-gradient-black' : 'text-gradient'
    }`}>
            {t('contact.title')}
          </a>
          <button
            onClick={toggleLanguage}
            className={`ml-4 px-3 py-1 rounded-lg text-sm transition ${
    isScrolled
      ? 'text-gradient-black border-black'
      : 'text-gradient border-gradient'
  }`}>
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>

        {/* Mobile hamburger icon */}
        <button
          className="md:hidden flex flex-col rounded-lg justify-center items-center gap-1"
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
