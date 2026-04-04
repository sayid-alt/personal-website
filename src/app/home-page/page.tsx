import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSkillsSection from './components/AboutSkillsSection';
import ExperienceEducationSection from './components/ExperienceEducationSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main className="relative bg-[#070B14] min-h-screen overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 noise-overlay z-0 opacity-60 pointer-events-none" />

      <Header />

      <HeroSection />
      <ProjectsSection />
      <AboutSkillsSection />
      <ExperienceEducationSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
