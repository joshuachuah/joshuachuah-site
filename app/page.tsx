'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Interests from '@/components/Interests';
import Music from '@/components/Music';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  const [time, setTime] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 1], [0, 100]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-cream text-text-primary overflow-x-hidden"
    >
      {/* Subtle paper texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Progress line */}
      <motion.div
        className="fixed top-0 left-0 h-px bg-border-subtle z-50"
        style={{ width: lineWidth }}
      />

      {/* Navigation */}
      <Navigation time={time} />

      {/* Hero Section */}
      <Hero 
        heroOpacity={heroOpacity}
        heroY={heroY}
        heroRef={heroRef}
      />

      {/* About Section */}
      <About />
      <SectionDivider />

      {/* Interests Section */}
      <Interests />
      <SectionDivider />

      {/* Music Section */}
      {/* <Music />
      <SectionDivider /> */}

      {/* Skills Section */}
      <Skills />
      <SectionDivider />

      {/* Experience Section */}
      <Experience />
      <SectionDivider />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}