// src/components/about/AboutSection.tsx
import React, { useEffect, useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { AboutService } from '../../services/about.service';
import { IAboutData } from '../../interfaces/about.interface';

const AboutSection: React.FC = () => {
  const [aboutData, setAboutData] = useState<IAboutData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setIsLoading(true);
        const data = await AboutService.getAboutData();
        setAboutData(data);
      } catch (err) {
        setError('Error al cargar los datos');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const handleDownloadCV = async () => {
    try {
      await AboutService.downloadCV();
      // Aquí podrías añadir un toast de confirmación
    } catch (err) {
      console.error("Error al descargar CV", err);
    }
  };

  if (isLoading) return <div className="loading-spinner">Cargando...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!aboutData) return null;

  return (
    <section id="about" className="about-section">
      <SectionHeader 
        title={aboutData.title} 
        highlightWord={aboutData.highlightWord} 
      />
      
      <div className="about-content">
        <div className="about-text">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p 
              key={`para-${index}`} 
              className="about-paragraph"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
          
          <div className="expertise-areas">
            <h3 className="expertise-title">{aboutData.expertise.title}</h3>
            <ul className="expertise-list">
              {aboutData.expertise.items.map((item, index) => (
                <li key={`expertise-${index}`} className="expertise-item">
                  <i className={`${item.icon} expertise-icon`}></i>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <p 
            className="final-paragraph"
            dangerouslySetInnerHTML={{ __html: aboutData.finalParagraph }}
          />
          
          <div className="cta-buttons">
            <button 
              className="download-cv-button"
              onClick={handleDownloadCV}
            >
              <i className="fas fa-file-download"></i>
              {aboutData.downloadCvText}
            </button>
          </div>
        </div>
        
        <div className="stats-container">
          <div className="about-stats">
            {aboutData.stats.map((stat, index) => (
              <div key={`stat-${index}`} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-text">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;