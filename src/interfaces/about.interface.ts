export interface IExpertiseItem {
  icon: string;
  text: string;
}

export interface IStatItem {
  number: string;
  text: string;
}

export interface IAboutData {
  title: string;
  highlightWord: string;
  paragraphs: string[];
  expertise: {
    title: string;
    items: IExpertiseItem[];
  };
  finalParagraph: string;
  stats: IStatItem[];
  downloadCvText: string;
}
