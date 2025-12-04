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
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-32 md:pt-48">
      {/* Background Blob Effect */}
      <div className="absolute right-0 top-20 -z-10 -mr-20 size-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 -z-10 -ml-20 size-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="animate-fade-in-up space-y-6">
          <p className="font-mono text-lg font-medium text-primary">Olá, meu nome é</p>
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            {profile.name}
            <span className="text-primary">.</span>
          </h1>
          <h2 className="text-3xl font-bold text-slate-400 md:text-5xl">{profile.role}</h2>
          <p className="max-w-md pt-4 text-lg leading-relaxed text-slate-400">
            {profile.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="rounded bg-primary px-8 py-3 font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-1 hover:bg-[#ff5252]"
            >
              Vamos conversar?
            </a>
            <a
              href="#"
              className="rounded border border-slate-600 px-8 py-3 font-medium text-white transition-colors hover:border-primary hover:text-primary"
            >
              Ver Currículo
            </a>
          </div>
        </div>

        <div className="group relative flex justify-center md:justify-end">
          <div className="relative size-64 md:size-80">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-full border-2 border-primary transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-surface bg-surface shadow-2xl">
              {/* Placeholder Image using a gradient/pattern if no user image */}
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 text-slate-500">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
