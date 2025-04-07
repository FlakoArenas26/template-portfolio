import React from 'react';
import SectionHeader from '../common/SectionHeader';

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="projects">
            <SectionHeader title="Mis" highlightWord="Proyectos" />
        <div className="projects-message">
          <div className="development-badge">
            <i className="fas fa-tools"></i>
            <span>Portfolio en Desarrollo</span>
          </div>
          <p className="message-text">
            Estoy trabajando activamente en nuevos proyectos. ¡Pronto podrás ver mi trabajo aquí!
          </p>
        </div>
      </section>
    );
};

export default ProjectsSection;