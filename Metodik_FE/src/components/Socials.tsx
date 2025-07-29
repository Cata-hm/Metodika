// src/components/Socials.tsx
// This component displays social media links with icons and animations.
import { useTranslation } from 'react-i18next';

const Socials = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient py-8 text-center">
      <h4 className="text-xl font-semibold mb-6 text-black">
        {t('socials.title')}
      </h4>
      <div className="flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-10 justify-center">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/metodical"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-100 flex items-center transition-colors duration-300 font-medium text-lg"
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
          className="text-black hover:text-gray-100 flex items-center transition-colors duration-300 font-medium text-lg"
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

        {/* Instagram */}
        <a
          href="https://www.instagram.com/metodical.pm?igsh=MnRteWZrZWFidTk3&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-100 flex items-center transition-colors duration-300 font-medium text-lg"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .4 1.4.8.4.4.7.8.8 1.4.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.4 1-.8 1.4-.4.4-.8.7-1.4.8-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.4-1.4-.8-.4-.4-.7-.8-.8-1.4-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.4-1 .8-1.4.4-.4.8-.7 1.4-.8.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4 .5 3.1.8 2.4 1.2 1.7 1.9.9 2.6.5 3.3.2 4.2.1 5 .1 5.9 0 7.2 0 8.7 0 15.3 0 16.8c.1 1.3.1 2.2.2 3 .3.9.7 1.6 1.5 2.3.7.7 1.4 1.2 2.3 1.5.8.2 1.7.3 3 .4 1.5.1 1.9.1 4.5.1s3 0 4.5-.1c1.3-.1 2.2-.1 3-.4.9-.3 1.6-.7 2.3-1.5.7-.7 1.2-1.4 1.5-2.3.2-.8.3-1.7.4-3 .1-1.5.1-1.9.1-4.5s0-3-.1-4.5c-.1-1.3-.1-2.2-.4-3-.3-.9-.7-1.6-1.5-2.3C21.6 1.2 20.9.8 20 .5c-.8-.2-1.7-.3-3-.4C15.3 0 14.9 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z"/>
          </svg>
          {t('socials.instagram')}
        </a>
      </div>
    </section>
  );
};

export default Socials;
