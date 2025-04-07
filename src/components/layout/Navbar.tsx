import React from 'react';
import BrandLogo from '../common/BrandLogo';

interface NavbarProps {
  scrollToSection: (id: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, activeSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <BrandLogo />
      </div>
      <ul className="navbar-links">
        {['home', 'about', 'skills', 'projects'].map((section) => (
          <li key={section}>
            <button 
              onClick={() => scrollToSection(section)}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              aria-label={`Ir a ${section === 'home' ? 'Inicio' : section}`}
            >
              {section === 'home' ? 'Inicio' : 
              section === 'about' ? 'Sobre mí' : 
              section === 'skills' ? 'Habilidades' : 'Proyectos'}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;