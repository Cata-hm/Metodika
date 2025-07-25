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
    <section
      id="contact"
      className="py-16 px-6 bg-black text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide bg-gradient bg-clip-text text-transparent"
          initial={{ opacity: 0, rotate: -8 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {t('contact.title')}
        </motion.h3>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <input
            type="text"
            name="name"
            placeholder={t('contact.namePlaceholder')}
            className="w-full p-4 rounded-lg border border-[#5A6B8A] bg-[#1E293B] placeholder-[#8CA0B3] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.emailPlaceholder')}
            className="w-full p-4 rounded-lg border border-[#5A6B8A] bg-[#1E293B] placeholder-[#8CA0B3] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <textarea
            name="message"
            placeholder={t('contact.messagePlaceholder')}
            className="w-full p-4 rounded-lg border border-[#5A6B8A] bg-[#1E293B] placeholder-[#8CA0B3] text-white h-36 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-300"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient font-semibold shadow-lg hover:brightness-110 transition duration-300"
          >
            {t('contact.button')}
          </button>
        </motion.form>

        {status && (
          <p
            className={`mt-6 text-center text-sm ${
              status === t('contact.status.success')
                ? 'text-green-400'
                : status === t('contact.status.error') || status === t('contact.status.serverError')
                ? 'text-red-400'
                : 'text-yellow-300'
            } drop-shadow-lg font-semibold`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
