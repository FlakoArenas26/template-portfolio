// import { useState } from 'react';
import './App.css';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import Footer from './components/layout/Footer';

function App() {
  const { activeSection, setActiveSection } = useActiveSection();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="portfolio">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;