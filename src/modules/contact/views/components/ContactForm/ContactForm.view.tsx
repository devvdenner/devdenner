'use client';

import { PaperPlaneTilt } from '@phosphor-icons/react';
import { useTranslations } from 'next-intl';

import { motion } from '@/_shared/adapters/motion';
import { cn } from '@/_shared/utils/cn';

import { useContactFormViewModel } from './ContactForm.viewmodel';

export const ContactForm = () => {
  const { handleSubmit, styles } = useContactFormViewModel();
  const t = useTranslations('Contact.form');

  return (
    <form className={cn(styles.form())} onSubmit={handleSubmit}>
      <div className={cn(styles.inputWrapper())}>
        <input
          type="text"
          placeholder={t('name')}
          className={cn(styles.input())}
          id="name"
        />
        <label htmlFor="name" className={cn(styles.label())}>
          {t('nameLabel')}
        </label>
      </div>

      <div className={cn(styles.inputWrapper())}>
        <input
          type="email"
          placeholder={t('email')}
          className={cn(styles.input())}
          id="email"
        />
        <label htmlFor="email" className={cn(styles.label())}>
          {t('emailLabel')}
        </label>
      </div>

      <div className={cn(styles.inputWrapper())}>
        <textarea
          rows={4}
          placeholder={t('message')}
          className={cn(styles.textarea())}
          id="message"
        />
        <label htmlFor="message" className={cn(styles.label())}>
          {t('messageLabel')}
        </label>
      </div>

      <motion.button
        className={cn(styles.button())}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
      >
        {t('submit')}
        <PaperPlaneTilt size={18} weight="bold" className={cn(styles.icon())} />
      </motion.button>
    </form>
  );
};
