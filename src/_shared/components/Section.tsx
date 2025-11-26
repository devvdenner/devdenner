import React from 'react';
import { cn } from '../utils/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className, ...props }) => {
    return (
        <section id={id} className={cn("py-20 px-6", className)} {...props}>
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </section>
    );
};
