'use client';

import { Send } from 'lucide-react';
import React from 'react';

import { cn } from '@/_shared/utils/cn';

import { useContactFormViewModel } from './ContactForm.viewmodel';

export const ContactForm = () => {
  const { handleSubmit, styles } = useContactFormViewModel();

  return (
    <form className={cn(styles.form())} onSubmit={handleSubmit}>
      <div className={cn(styles.inputWrapper())}>
        <input
          type="text"
          placeholder="Seu Nome"
          className={cn(styles.input())}
          id="name"
        />
        <label
          htmlFor="name"
          className={cn(styles.label())}
        >
          Nome
        </label>
      </div>

      <div className={cn(styles.inputWrapper())}>
        <input
          type="email"
          placeholder="Seu Email"
          className={cn(styles.input())}
          id="email"
        />
        <label
          htmlFor="email"
          className={cn(styles.label())}
        >
          Email
        </label>
      </div>

      <div className={cn(styles.inputWrapper())}>
        <textarea
          rows={4}
          placeholder="Sua Mensagem"
          className={cn(styles.textarea())}
          id="message"
        ></textarea>
        <label
          htmlFor="message"
          className={cn(styles.label())}
        >
          Mensagem
        </label>
      </div>

      <button className={cn(styles.button())}>
        Enviar Mensagem
        <Send size={18} className={cn(styles.icon())} />
      </button>
    </form>
  );
};
