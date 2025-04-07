import React from 'react';
import profileImage from '../../assets/profile.png';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="glitch-text">
          Hola, soy <span className="highlight">Rafael Arenas</span>
        </h1>
        <h2 className="subtitle">
          <span className="neon-text">Desarrollador FullStack</span>
        </h2>
        <p className="hero-description">
          Tecnólogo en Análisis y Desarrollo de Sistemas de Información con experiencia full-stack. 
          Combino habilidades en frontend (Angular, React), backend (Node.js, Laravel) y bases de 
          datos para crear soluciones digitales completas.
        </p>
        <div className="cta-container">
          <button 
            className="cta-button primary"
            onClick={() => window.open('mailto:rafarenas.dev@gmail.com?subject=Cotización de servicios&body=Estimado Rafael,%0D%0A%0D%0AMe interesa conocer más sobre sus servicios profesionales...')}
          >
            <i className="fas fa-envelope"></i> Solicitar Cotización
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => window.open('https://wa.me/573132653515?text=Hola Rafael, me interesa agendar una reunión', '_blank')}
          >
            <i className="fab fa-whatsapp"></i> Agendar Reunión
          </button>
        </div>
        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/in/rafael-arenas-dev" 
            className="social-icon"
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com/RafArenasDev" 
            className="social-icon" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="arc-reactor-container">
          <div className="avatar-center">
            <img src={profileImage} alt="Rafael Arenas" loading="lazy"/>
          </div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`arc-segment arc-segment-${i+1}`}></div>
          ))}
          <div className="arc-ring arc-ring-1"></div>
          <div className="arc-ring arc-ring-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;