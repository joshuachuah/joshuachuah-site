export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Web Developer',
    company: 'Peak Heating & Cooling',
    period: 'Feb 2025 — Aug 2025',
    description: [
      'Led migration from WordPress to Webflow, enhancing UI/UX and reducing page load time by 15%, resulting in higher user engagement.',
      'Designed and built a React-based job scheduling system integrated with ServiceTitan API, increasing booking efficiency by 10%.',
      'Implemented SEO best practices, improving visibility, increasing site traffic, and boosting lead conversion rates.',
    ],
  },
  {
    role: 'Front-End React Developer Intern',
    company: 'Stealth Startup',
    period: 'Jun 2024 — Oct 2024',
    description: [
      'Resolved 15+ critical UI bugs by refactoring React components and optimizing state management, reducing support tickets by 20%.',
      'Built a dynamic form management system that improved scalability and reduced feature configuration time by 30%.',
      'Performed application testing and version control through Git and CI/CD workflows, improving deployment consistency and reducing downtime.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Western Michigan University',
    period: 'Jan 2024 — Apr 2024',
    description: [
      'Tutored students in WebGL fundamentals.',
      'Graded assignments and provided feedback, increasing grades by 5%.',
      'Held office hours for one-on-one support.',
    ],
  },
];