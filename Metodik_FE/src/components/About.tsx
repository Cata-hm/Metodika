// src/components/About.tsx
// This component displays information about the author and the project.
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { BRAND_NAME } from '../config/constants';


const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-6 bg-[#E6F0FA]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <motion.img
          src="/images/profile.JPG"
          alt="Catalina Hernández"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-[#4A90E2]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-center md:text-left text-[#4A90E2]">
            {t('about.title')}
          </h3>
          <p className="text-lg text-[#2E3C5D] leading-relaxed">
            <Trans i18nKey="about.paragraph1" values={{ name: 'Catalina Hernández Mejía' }} components={{ strong: <strong /> }} />
          </p>
          <p className="text-lg text-[#2E3C5D] leading-relaxed mt-4">
            {t('about.paragraph2')}
          </p>
          <p className="text-lg text-[#2E3C5D] leading-relaxed mt-4">
            <Trans i18nKey="about.paragraph3" values={{ name: BRAND_NAME }} components={{ strong: <strong /> }} />
          </p>
          <p className="text-lg text-[#2E3C5D] leading-relaxed mt-4">
            {t('about.paragraph4')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
