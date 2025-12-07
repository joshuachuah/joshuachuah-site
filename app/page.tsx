import Navbar from '@/components/NavbarClient';
import Hero from '@/components/HeroClient';
import About from '@/components/AboutClient';
import Projects from '@/components/ProjectsClient';
import Footer from '@/components/Footer';
import Experience from '@/components/ExperienceClient';
import Music from '@/components/MusicClient';
import FallingLeaves from '@/components/FallingLeaves';

export default function Home() {
  return (
    <div className="app min-h-screen bg-theme-cream relative">
      {/* Global Falling Leaves */}
      <FallingLeaves />

      <Navbar />
      <div className="content pt-[60px]">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
