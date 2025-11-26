import AboutView from '@/modules/about/views/AboutView';
import { MockAPI } from '@/_shared/services/api';
import { Navbar } from '@/_shared/components/Navbar';
import { Footer } from '@/_shared/components/Footer';

export default async function AboutPage() {
    const services = await MockAPI.getServices();
    const stats = await MockAPI.getStats();

    return (
        <div className="min-h-screen bg-background text-slate-300 font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <AboutView services={services} stats={stats} />
            <Footer />
        </div>
    );
}
