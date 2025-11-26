import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-8 bg-background text-center border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-2">
                Designed & Built by Jensen Omega
            </p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Github size={18} /></a>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Linkedin size={18} /></a>
            </div>
        </footer>
    );
};
