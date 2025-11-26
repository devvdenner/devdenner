'use client';

import React from 'react';
import { Send } from 'lucide-react';

export const ContactForm = () => {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full bg-transparent border-b border-slate-700 py-3 text-slate-300 focus:border-primary focus:outline-none transition-colors peer placeholder-transparent"
                    id="name"
                />
                <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                >
                    Nome
                </label>
            </div>

            <div className="relative">
                <input
                    type="email"
                    placeholder="Seu Email"
                    className="w-full bg-transparent border-b border-slate-700 py-3 text-slate-300 focus:border-primary focus:outline-none transition-colors peer placeholder-transparent"
                    id="email"
                />
                <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                >
                    Email
                </label>
            </div>

            <div className="relative">
                <textarea
                    rows={4}
                    placeholder="Sua Mensagem"
                    className="w-full bg-transparent border-b border-slate-700 py-3 text-slate-300 focus:border-primary focus:outline-none transition-colors peer placeholder-transparent resize-none"
                    id="message"
                ></textarea>
                <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                >
                    Mensagem
                </label>
            </div>

            <button className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded shadow-lg hover:bg-[#ff5252] transition-all flex items-center justify-center gap-2 group">
                Enviar Mensagem
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    );
};
