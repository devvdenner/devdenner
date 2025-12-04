'use client';

import { Send } from 'lucide-react';
import React from 'react';

export const ContactForm = () => {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <input
          type="text"
          placeholder="Seu Nome"
          className="peer w-full border-b border-slate-700 bg-transparent py-3 text-slate-300 transition-colors placeholder:text-transparent focus:border-primary focus:outline-none"
          id="name"
        />
        <label
          htmlFor="name"
          className="absolute -top-3.5 left-0 text-sm text-slate-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
        >
          Nome
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder="Seu Email"
          className="peer w-full border-b border-slate-700 bg-transparent py-3 text-slate-300 transition-colors placeholder:text-transparent focus:border-primary focus:outline-none"
          id="email"
        />
        <label
          htmlFor="email"
          className="absolute -top-3.5 left-0 text-sm text-slate-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          rows={4}
          placeholder="Sua Mensagem"
          className="peer w-full resize-none border-b border-slate-700 bg-transparent py-3 text-slate-300 transition-colors placeholder:text-transparent focus:border-primary focus:outline-none"
          id="message"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute -top-3.5 left-0 text-sm text-slate-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
        >
          Mensagem
        </label>
      </div>

      <button className="group flex w-full items-center justify-center gap-2 rounded bg-primary px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-[#ff5252] md:w-auto">
        Enviar Mensagem
        <Send size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
};
