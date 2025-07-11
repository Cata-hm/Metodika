// src/components/Services.tsx
// This component displays a list of services offered by the application with animations.
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const servicesData = [
  { titleKey: 'services.items.projectManagement.title', descriptionKey: 'services.items.projectManagement.description' },
  { titleKey: 'services.items.automation.title', descriptionKey: 'services.items.automation.description' },
  { titleKey: 'services.items.teamLeadership.title', descriptionKey: 'services.items.teamLeadership.description' },
  { titleKey: 'services.items.consulting.title', descriptionKey: 'services.items.consulting.description' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-[#4A90E2] mb-12">{t('services.title')}</h3>
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {servicesData.map(({ titleKey, descriptionKey }, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#4A90E2]"
              variants={itemVariants}
            >
              <h4 className="text-2xl font-semibold text-[#4A90E2] mb-3">{t(titleKey)}</h4>
              <p className="text-gray-700 leading-relaxed">{t(descriptionKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
