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
      'Rebuilt company website with modern tech stack',
      'Developed job scheduling system for technicians',
      'Integrated payment processing and customer portal',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Stealth Startup',
    period: 'Jun 2024 — Oct 2024',
    description: [
      'Resolved UI bugs and improved user experience',
      'Built dynamic forms system with validation',
      'Collaborated with team using agile methodologies',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Western Michigan University',
    period: 'Jan 2024 — Apr 2024',
    description: [
      'Tutored students in WebGL fundamentals',
      'Graded assignments and provided feedback',
      'Held office hours for one-on-one support',
    ],
  },
];