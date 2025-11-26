import React from 'react';


interface HeroViewProps {
    profile: {
        name: string;
        role: string;
        description: string;
    };
}

export const HeroView: React.FC<HeroViewProps> = ({ profile }) => {
    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Background Blob Effect */}
            <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-0 -ml-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in-up">
                    <p className="text-primary font-mono font-medium text-lg">Olá, meu nome é</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        {profile.name}<span className="text-primary">.</span>
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-400">
                        {profile.role}
                    </h2>
                    <p className="max-w-md text-lg leading-relaxed text-slate-400 pt-4">
                        {profile.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-primary text-white font-bold rounded hover:bg-[#ff5252] transition-transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                        >
                            Vamos conversar?
                        </a>
                        <a
                            href="#"
                            className="px-8 py-3 border border-slate-600 text-white font-medium rounded hover:border-primary hover:text-primary transition-colors"
                        >
                            Ver Currículo
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center md:justify-end group">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 border-2 border-primary rounded-full transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="absolute inset-0 bg-surface rounded-full overflow-hidden border-4 border-surface shadow-2xl">
                            {/* Placeholder Image using a gradient/pattern if no user image */}
                            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-slate-500">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
