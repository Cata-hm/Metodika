// src/components/Hero.tsx
// This component displays the hero section of the application with a title, subtitle, and call-to
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      ref={ref}
      className="bg-[#4A90E2] text-white text-center min-h-screen flex flex-col justify-center py-24 px-6"
    >
      <motion.h2
        className="text-4xl font-bold mb-4 drop-shadow-lg"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {t('hero.title')}
      </motion.h2>
      <motion.p
        className="text-lg mb-6 max-w-xl mx-auto drop-shadow-md"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        {t('hero.subtitle')}
      </motion.p>
      <motion.a
        href="#contact"
        className="bg-white text-[#4A90E2] font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition-colors duration-300 inline-block mx-auto"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        {t('hero.button')}
      </motion.a>
    </section>
  );
};

export default Hero;

