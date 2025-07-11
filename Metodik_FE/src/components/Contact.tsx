// src/components/Contact.tsx
// This component provides a contact form for users to reach out.
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { API_BASE_URL } from '../config';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t('contact.status.sending'));

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus(t('contact.status.success'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(t('contact.status.error'));
      }
    } catch (error) {
      setStatus(t('contact.status.serverError'));
    }
  };

  return (
    <section id="contact" className="bg-[#4A90E2] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {t('contact.title')}
        </motion.h3>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <input
            type="text"
            name="name"
            placeholder={t('contact.namePlaceholder')}
            className="w-full p-3 rounded border border-white bg-transparent placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.emailPlaceholder')}
            className="w-full p-3 rounded border border-white bg-transparent placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t('contact.messagePlaceholder')}
            className="w-full p-3 rounded border border-white bg-transparent placeholder-white text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-white text-[#4A90E2] font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition-colors duration-300 w-full"
          >
            {t('contact.button')}
          </button>
        </motion.form>

        {status && <p className="mt-4 text-sm drop-shadow-md">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
