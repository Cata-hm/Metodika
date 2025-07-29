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
      className="bg-gray-100 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight bg-gradient bg-clip-text text-transparent">
          {t('services.title')}
        </h3>

        <motion.div
          className="grid gap-10 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {servicesData.map(({ titleKey, descriptionKey }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group p-[2px] rounded-3xl 
                         bg-gradient-to-tr from-[#a78bfa] via-[#ec4899] to-[#60a5fa] 
                         shadow-[0_0_15px_rgba(167,139,250,0.3)] hover:shadow-[0_0_25px_rgba(167,139,250,0.5)] transition-shadow duration-300"
            >
              <div className="bg-black rounded-3xl p-8 h-full">
                <h4 className="text-xl md:text-2xl font-extrabold mb-4 bg-gradient bg-clip-text text-transparent">
                  {t(titleKey)}
                </h4>
                <p className="text-gray-300 text-base leading-relaxed">
                  {t(descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
