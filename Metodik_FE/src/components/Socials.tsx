import { useTranslation } from 'react-i18next';

const Socials = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-8 text-center">
      <h4 className="text-xl font-semibold mb-6 text-[#4A90E2] drop-shadow-md">
        {t('socials.title')}
      </h4>
      <div className="flex justify-center space-x-10">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/catalina-hernandez-mejia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4A90E2] hover:text-[#FF6F61] flex items-center transition-colors duration-300 font-medium text-lg"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.98 2.98 2.98h.02c1.65 0 2.98-1.35 2.98-2.98C7.98 4.84 6.64 3.5 4.98 3.5zM2.4 8.98h5.16v12.02H2.4V8.98zM9.48 8.98h4.94v1.6h.07c.69-1.31 2.37-2.7 4.88-2.7 5.22 0 6.18 3.44 6.18 7.9v9.18h-5.16v-8.12c0-1.94-.03-4.44-2.71-4.44-2.71 0-3.13 2.12-3.13 4.3v8.26H9.48V8.98z" />
          </svg>
          {t('socials.linkedin')}
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Cata-hm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-[#FF6F61] flex items-center transition-colors duration-300 font-medium text-lg"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.236 1.84 1.236 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.304.76-1.605-2.665-.3-5.466-1.33-5.466-5.933 0-1.31.467-2.38 1.235-3.22-.124-.302-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.138 3.003.403 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.63-5.475 5.922.43.372.823 1.104.823 2.227 0 1.61-.015 2.91-.015 3.31 0 .32.218.697.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
          </svg>
          {t('socials.github')}
        </a>
      </div>
    </section>
  );
};

export default Socials;
