// src/components/Testimonials.tsx
// This component displays testimonials from users with animations and responsive design.
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  feedback: string;
};

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = t('testimonials.items', {
    returnObjects: true,
  }) as Testimonial[];

  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-[#4A90E2] mb-12">
          {t('testimonials.title')}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, company, feedback }, index) => (
            <motion.div
              key={index}
              className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col"
              style={{ minHeight: '260px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-gray-700 italic flex-grow">“{feedback}”</p>
              <footer className="mt-6 text-sm font-semibold text-gray-800">
                {name}
                <span className="block text-gray-600 font-normal">
                  {role} at <span className="font-semibold">{company}</span>
                </span>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

