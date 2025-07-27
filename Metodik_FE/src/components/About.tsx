// src/components/About.tsx
// This component displays information about the author and the project.
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { BRAND_NAME } from '../config/constants';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-6 bg-black text-metallic">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className=" rounded-full p-1 bg-gradient">
          <motion.img
            src="/images/profile.JPG"
            alt="Catalina Hernández"
            className="w-full h-full rounded-full object-cover shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
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
          <p className="text-lg leading-relaxed text-metallic">
            <Trans i18nKey="about.paragraph1" values={{ name: 'Catalina Hernández Mejía' }} components={{ strong: <strong className="font-semibold text-gradient" /> }} />
          </p>
          <p className="text-lg leading-relaxed mt-4 text-metallic">
            {t('about.paragraph2')}
          </p>
          <p className="text-lg leading-relaxed mt-4 text-metallic">
            <Trans i18nKey="about.paragraph3" values={{ name: BRAND_NAME }} components={{ strong: <strong className="font-semibold text-gradient" /> }} />
          </p>
          <p className="text-lg leading-relaxed mt-4 text-metallic">
            {t('about.paragraph4')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
