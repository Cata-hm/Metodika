// src/components/Footer.tsx
// This component renders the footer of the application.
import { useTranslation } from 'react-i18next';
import BRAND_NAME from '../config/constants';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-[#4A90E2]">{BRAND_NAME}</span> — {t('footer.rights')}
      </p>
      <p className="mt-1 text-[#FF6F61] font-medium flex justify-center items-center gap-1">
        {t('footer.designed')} <span aria-label="heart" role="img">❤️</span>
      </p>
    </footer>
  );
};

export default Footer;
