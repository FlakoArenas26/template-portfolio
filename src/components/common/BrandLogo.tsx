import React from 'react';

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "" }) => (
  <span className={`logo-text ${className}`}>
    RafArenas<span className="logo-dot">.</span>dev
  </span>
);

export default BrandLogo;