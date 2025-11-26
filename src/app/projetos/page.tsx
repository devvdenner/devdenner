import ProjectsView from '@/modules/portfolio/views/ProjectsView';
import { MockAPI } from '@/_shared/services/api';
import { Navbar } from '@/_shared/components/Navbar';
import { Footer } from '@/_shared/components/Footer';

export default async function ProjectsPage() {
    const projects = await MockAPI.getProjects();

    return (
        <div className="min-h-screen bg-background text-slate-300 font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <ProjectsView projects={projects} />
            <Footer />
        </div>
    );
}
