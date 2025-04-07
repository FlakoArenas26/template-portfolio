import React from 'react';
import BrandLogo from '../common/BrandLogo';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <BrandLogo />
        </div>
        <div className="footer-links">
          <a href="#home" onClick={() => scrollToSection('home')}>Inicio</a>
          <a href="#about" onClick={() => scrollToSection('about')}>Sobre mí</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Habilidades</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Proyectos</a>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/rafael-arenas-dev" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/RafArenasDev" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <BrandLogo />. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;