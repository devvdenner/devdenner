import { MockAPI } from '@/_shared/services/api';
import { AboutView } from '@/modules/about/views/AboutView.view';
import { ContactView } from '@/modules/contact/views/ContactView.view';
import { HomeView } from '@/modules/home/views/HomeView.view';
import { ProjectsView } from '@/modules/projects/views/ProjectsView.view';

export default async function Home() {
  const profile = await MockAPI.getProfile();
  const techStack = await MockAPI.getTechStack();
  const services = await MockAPI.getServices();
  const stats = await MockAPI.getStats();
  const projects = await MockAPI.getProjects();

  return (
    <div className="min-h-screen bg-background font-sans text-slate-300 selection:bg-primary selection:text-white">
      <HomeView profile={profile} techStack={techStack} />
      <ProjectsView projects={projects} />
      <AboutView services={services} stats={stats} />
      {/* <ContactView profile={profile} /> */}
    </div>
  );
}
