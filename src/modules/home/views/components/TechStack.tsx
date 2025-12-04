import React from 'react';

interface TechStackProps {
    technologies: string[];
}

export const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
    return (
        <div className="mx-auto mt-12 max-w-6xl border-t border-slate-800 px-6 py-12">
            <div className="flex flex-wrap items-center justify-between gap-6 opacity-60 transition-opacity hover:opacity-100">
                {technologies.map((tech) => (
                    <span key={tech} className="cursor-default text-sm font-semibold uppercase tracking-wider text-slate-500 transition-colors hover:text-primary md:text-base">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};
