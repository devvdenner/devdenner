import React from 'react';

interface TechStackProps {
    technologies: string[];
}

export const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
    return (
        <div className="max-w-6xl mx-auto mt-20 border-t border-slate-800 pt-8 px-6">
            <div className="flex flex-wrap justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
                {technologies.map((tech) => (
                    <span key={tech} className="text-sm md:text-base font-semibold uppercase tracking-wider text-slate-500 hover:text-primary cursor-default transition-colors">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};
