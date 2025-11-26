import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { cn } from '@/_shared/utils/cn';
import { IFooterModel } from './Footer.model';
import { useFooterViewModel } from './Footer.viewmodel';
import { footerVariants } from './Footer.styles';

export const Footer = (props: IFooterModel) => {
    const { className, ...rest } = useFooterViewModel(props);

    return (
        <footer className={cn(footerVariants(), className)} {...rest}>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Github size={18} /></a>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Linkedin size={18} /></a>
            </div>
        </footer>
    );
};
