import { MockAPI } from '@/_shared/services/api';
import { Navbar } from '@/_shared/components/Navbar';
import { Footer } from '@/_shared/components/Footer';
import HomeView from '@/modules/home/views/HomeView';
import AboutView from '@/modules/about/views/AboutView';
import ProjectsView from '@/modules/portfolio/views/ProjectsView';
import ContactView from '@/modules/contact/views/ContactView';

export default async function Home() {
  const profile = await MockAPI.getProfile();
  const techStack = await MockAPI.getTechStack();
  const services = await MockAPI.getServices();
  const stats = await MockAPI.getStats();
  const projects = await MockAPI.getProjects();

  return (
    <div className="min-h-screen bg-background text-slate-300 font-sans selection:bg-primary selection:text-white">
      <Navbar />

      <HomeView profile={profile} techStack={techStack} />
      <AboutView services={services} stats={stats} />
      <ProjectsView projects={projects} />
      <ContactView profile={profile} />

      <Footer />
    </div>
  );
}
