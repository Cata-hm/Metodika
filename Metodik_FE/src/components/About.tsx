// src/components/About.tsx
// This component displays information about the author and the project.
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { BRAND_NAME } from '../config/constants';

const About = () => {
  const { t } = useTranslation();

  return (
     <section id="about" className="py-16 px-6 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Nueva imagen rectangular */}
        <motion.img
          src="/images/profile2.jpg"
          alt="Catalina Hernández"
          className="w-full max-w-sm rounded-2xl shadow-xl object-cover bg-gradient"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide bg-gradient bg-clip-text text-transparent">
            {t('about.title')}
          </h3>
          <p className="text-lg leading-relaxed text-metallic text-justify">
            <Trans i18nKey="about.paragraph1" values={{ name: 'Catalina Hernández Mejía' }} components={{ strong: <strong className="font-semibold text-gradient-nohover" /> }} />
          </p>
          <p className="text-lg leading-relaxed mt-4 text-metallic text-justify">
            {t('about.paragraph2')}
          </p>
          <p className="text-lg leading-relaxed mt-4 text-metallic text-justify">
            <Trans i18nKey="about.paragraph3" values={{ name: BRAND_NAME }} components={{ strong: <strong className="font-semibold text-gradient-nohover" /> }} />
          </p>
          <p className="text-lg leading-relaxed mt-4 text-metallic text-justify">
            {t('about.paragraph4')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
