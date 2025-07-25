// src/components/Services.tsx
// This component displays a list of services offered by the application with animations.
// src/components/Services.tsx
import { motion, easeOut } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const servicesData = [
  {
    titleKey: 'services.items.projectManagement.title',
    descriptionKey: 'services.items.projectManagement.description',
    borderColor: 'from-[#4A90E2] to-[#6BCBFF]',
  },
  {
    titleKey: 'services.items.automation.title',
    descriptionKey: 'services.items.automation.description',
    borderColor: 'from-[#8E8FFA] to-[#D1C4FF]',
  },
  {
    titleKey: 'services.items.teamLeadership.title',
    descriptionKey: 'services.items.teamLeadership.description',
    borderColor: 'from-[#6DD5FA] to-[#A1E3FF]',
  },
  {
    titleKey: 'services.items.consulting.title',
    descriptionKey: 'services.items.consulting.description',
    borderColor: 'from-[#A7C7E7] to-[#E0F7FF]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-16 tracking-tight">
          {t('services.title')}
        </h3>

        <motion.div
          className="grid gap-10 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {servicesData.map(({ titleKey, descriptionKey, borderColor }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group p-[2px] rounded-3xl bg-gradient-to-tr 
                         from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 
                         shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <div className="bg-[#0a0a0a] rounded-3xl p-6 md:p-8 h-full">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {t(titleKey)}
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {t(descriptionKey)}
                </p>
              </div>
              <div
                className={`absolute inset-0 rounded-3xl z-0 opacity-10 blur-xl bg-gradient-to-tr ${borderColor}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
