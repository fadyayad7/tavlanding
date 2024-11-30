import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { Features } from '@/components/features';
import { AppsSection } from '@/components/apps-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Features />
      <AppsSection />
    </main>
  );
}