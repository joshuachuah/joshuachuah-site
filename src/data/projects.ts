export interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Premier League Match Predictor',
    description: 'AI-powered Premier League match predictions',
    tech: ['JavaScript', 'FPL API', 'Machine Learning'],
    year: '2025',
    link: 'https://www.premierprophet.dev/',
  },
  {
    title: 'StatsPicksNBA',
    description: 'Machine learning NBA betting predictions',
    tech: ['Django', 'Python', 'Machine Learning'],
    year: '2024',
    link: 'https://github.com/joshuachuah/StatsPicksNBA',
  },
  {
    title: 'Augmented Reality Application',
    description: 'Augmented Reality (AR) application to assist EMS in reducing prehospital pediatric medication errors',
    tech: ['Unity', 'C#'],
    year: '2024',
    link: 'https://drive.google.com/file/d/1qPvmkj0809qPSLHydZ07sqvT5RGNwFLd/view?usp=sharing',
  },
  {
    title: '(G)I-DLE Website',
    description: 'Unofficial website for Kpop girl group',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2023',
    link: 'https://joshuachuah.github.io/unofficial-website/',
  },
  {
    title: 'Broken Song',
    description: 'Directory traversal to reconstruct MP3 files',
    tech: ['C'],
    year: '2023',
    link: 'https://github.com/joshuachuah/Broken-Song',
  },
  {
    title: 'Hearthstone Parser',
    description: 'Parses and sorts Hearthstone card data',
    tech: ['C'],
    year: '2023',
    link: 'https://github.com/joshuachuah/hearthstone-parser',
  },
];