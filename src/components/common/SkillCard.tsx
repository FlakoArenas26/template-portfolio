import React from 'react';
import { SkillCardProps } from '../../interfaces/types';

const SkillCard: React.FC<SkillCardProps> = ({ 
  icon, 
  title, 
  level, 
  levelText, 
  description, 
  highlight = false 
}) => {
  return (
    <div className={`skill-card ${highlight ? 'highlight-card' : ''}`}>
      <div className="skill-icon">
        <i className={icon}></i>
      </div>
      <h3 className="skill-title">{title}</h3>
      <div className="skill-level">
        <span className="skill-badge">{level}%</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${level}%` }}></div>
        </div>
        <span className="skill-level-text">{levelText}</span>
      </div>
      <p className="skill-description">{description}</p>
    </div>
  );
};

export default SkillCard;