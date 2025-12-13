import { getLocale } from 'next-intl/server';

import { Locale } from '@/_shared/contracts/locale.contract';
import { MockAPI } from '@/_shared/services/api';
import { AboutView } from '@/modules/about/views/AboutView.view';
import { HomeView } from '@/modules/home/views/HomeView.view';
import { ProjectsView } from '@/modules/projects/views/ProjectsView.view';

export default async function Home() {
  const locale = (await getLocale()) as Locale;

  const profile = await MockAPI.getProfile(locale);
  const techStack = await MockAPI.getTechStack();
  const services = await MockAPI.getServices(locale);
  const stats = await MockAPI.getStats(locale);
  const projects = await MockAPI.getProjects(locale);

  return (
    <div className="min-h-screen bg-background font-sans text-slate-300 selection:bg-primary selection:text-white">
      <HomeView profile={profile} techStack={techStack} />
      <ProjectsView projects={projects} />
      <AboutView services={services} stats={stats} />
    </div>
  );
}
