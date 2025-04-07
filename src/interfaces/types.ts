export interface SkillCardProps {
  icon: string;
  title: string;
  level: number;
  levelText: string;
  description: string;
  highlight?: boolean;
}

export interface SectionProps {
  scrollToSection: (id: string) => void;
  activeSection: string;
}
