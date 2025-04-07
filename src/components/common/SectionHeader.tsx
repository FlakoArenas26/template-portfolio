import React from 'react';

interface SectionHeaderProps {
  title: string;
  highlightWord: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlightWord }) => {
  const parts = title.split(highlightWord);
  
  return (
    <div className="section-header">
      <h2 className="section-title">
        {parts[0]}
        <span className="highlight">{highlightWord}</span>
        {parts[1]}
      </h2>
      <div className="underline"></div>
    </div>
  );
};

export default SectionHeader;