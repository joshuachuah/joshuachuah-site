export interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: '(G)I-DLE Website',
    description: 'Unofficial website for Kpop girl group',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2024',
    link: 'https://joshuachuah.github.io/unofficial-website/',
  },
  {
    title: 'StatsPicksNBA',
    description: 'Machine learning NBA betting predictions',
    tech: ['Django', 'Python', 'ML'],
    year: '2024',
    link: 'https://github.com/joshuachuah/StatsPicksNBA',
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