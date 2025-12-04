import { Footer } from '@/_shared/components/Footer';
import { Navbar } from '@/_shared/components/Navbar';
import { MockAPI } from '@/_shared/services/api';
import AboutView from '@/modules/about/views/AboutView';
import ContactView from '@/modules/contact/views/ContactView';
import HomeView from '@/modules/home/views/HomeView';
import ProjectsView from '@/modules/projects/views/ProjectsView';

export default async function Home() {
  const profile = await MockAPI.getProfile();
  const techStack = await MockAPI.getTechStack();
  const services = await MockAPI.getServices();
  const stats = await MockAPI.getStats();
  const projects = await MockAPI.getProjects();

  return (
    <div className="min-h-screen bg-background font-sans text-slate-300 selection:bg-primary selection:text-white">
      <HomeView profile={profile} techStack={techStack} />
      <AboutView services={services} stats={stats} />
      <ProjectsView projects={projects} />
      <ContactView profile={profile} />
    </div>
  );
}
