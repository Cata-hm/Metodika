// src/components/Hero.tsx
// This component renders the hero section of the Metodika application, including a title, subtitle, and call-to-action button
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
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-black text-center min-h-screen flex flex-col justify-center py-24 px-6"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {t('hero.title')}
      </motion.h2>
      <motion.p
        className="text-lg mb-10 max-w-3xl mx-auto drop-shadow-sm"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        {t('hero.subtitle')}
      </motion.p>
      <motion.a
        href="#contact"
        className="inline-block max-w-xs px-8 py-3 font-semibold border-2 border-transparent bg-black hover:brightness-110 transition duration-300 shadow-lg mx-auto text-center"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        <span
          className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          {t('hero.button')}
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
