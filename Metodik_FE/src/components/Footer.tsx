// src/components/Footer.tsx
// This component renders the footer of the application.
import { useTranslation } from 'react-i18next';
import { BRAND_NAME } from '../config/constants';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black border-t border-gray-800 py-6 text-center text-sm select-none">
      <p className="mb-1 text-white">
        © {new Date().getFullYear()}{' '}
        <span
          className="font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                     bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(180,100,255,0.9)]"
        >
          {BRAND_NAME}
        </span>{' '}
        — {t('footer.rights')}
      </p>
      <p className="text-white font-medium flex justify-center items-center gap-1 select-text">
        Designed & Managed with passion{' '}
        <span role="img" aria-label="heart" className="drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]">
          ❤️
        </span>
      </p>
    </footer>
  );
};

export default Footer;
