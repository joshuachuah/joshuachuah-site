import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Peak Heating and Cooling',
    role: 'Web Developer',
    date: 'FEB 2025 - AUG 2025',
    duration: '6 months',
    emoji: '🔥',
    description: [
      "Rebuilt and migrated the company website from WordPress to Webflow, modernizing the design and improving load times by 15% for a smoother user experience.",
      "Developed a custom job scheduling system using ReactJS and the ServiceTitan API, increasing booking efficiency by 10%.",
      "Implemented SEO best practices, boosting organic traffic, improving search visibility, and increasing lead generation for HVAC services."
    ],
    tags: ['React', 'Webflow', 'ServiceTitan API', 'SEO']
  },
  {
    id: 2,
    company: 'Stealth Startup',
    role: 'Software Developer Intern',
    date: 'JUN 2024 - OCT 2024',
    duration: '4 months',
    emoji: '💡',
    description: [
      "Resolved 15+ critical UI bugs, enhancing responsiveness and reducing support tickets by 20%.",
      "Developed and integrated a dynamic Flex Forms management system, increasing the scalability of form-based features and allowing users to configure needs 30% faster.",
      "Conducted thorough testing to ensure cross-browser compatibility, improving system stability."
    ],
    tags: ['TypeScript', 'React', 'UI/UX', 'Testing']
  },
  {
    id: 3,
    company: 'Western Michigan University',
    role: 'Teaching Assistant',
    date: 'JAN 2024 - APR 2024',
    duration: '4 months',
    emoji: '📚',
    description: [
      "Provided one-on-one tutoring sessions to students, improving their understanding of WebGL.",
      "Graded assignments and exams with detailed feedback, helping students improve by 15% on future assignments and supporting their academic success"
    ],
    tags: ['WebGL', 'Teaching', 'Mentorship']
  },
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(experiences[0].company);

  const selectedExperience = experiences.find(exp => exp.company === selectedCompany);

  return (
    <section id="experience" className="mx-auto max-w-6xl min-h-[50vh] pt-[100px] pb-20 bg-theme-cream px-4 sm:px-8">
      {/* Header */}
      <motion.div
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center w-full overflow-hidden">
          <h2 className="text-xl md:text-3xl font-medium text-theme-tan mr-4 whitespace-nowrap">Work Experience 💼</h2>
          <div className="flex-1 h-px bg-theme-sage/30"></div>
        </div>
      </motion.div>

      {/* Folder Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {experiences.map((exp, index) => {
            const isSelected = selectedCompany === exp.company;

            return (
              <motion.button
                key={exp.company}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCompany(exp.company)}
                className={`relative px-4 sm:px-6 py-3 font-medium text-sm sm:text-base transition-all duration-300 ${
                  isSelected
                    ? 'text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={isSelected ? {
                  clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
                } : {}}
              >
                {/* Background - only for active tab */}
                {isSelected && (
                  <div
                    className="absolute inset-0 transition-all duration-300 bg-white/50 border-2 border-theme-tan/40 border-b-0 shadow-[0_-4px_20px_rgba(212,163,115,0.1)]"
                    style={{
                      clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
                    }}
                  />
                )}

                {/* Tab content */}
                <div className="relative flex items-center gap-2">
                  <span className="text-xl">{exp.emoji}</span>
                  <span className="hidden sm:inline">{exp.company}</span>
                  <span className="sm:hidden">{exp.company.split(' ')[0]}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Content Card */}
      <AnimatePresence mode="wait">
        {selectedExperience && (
          <motion.div
            key={selectedExperience.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/50 backdrop-blur-md border-2 border-theme-tan/40 rounded-3xl rounded-tl-none p-6 sm:p-8 lg:p-10
                      shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                      hover:shadow-[0_8px_40px_rgb(212,163,115,0.15)]
                      transition-all duration-500"
          >
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <h3 className="text-2xl sm:text-3xl font-medium text-gray-800">
                  {selectedExperience.role}
                </h3>
                <span className="w-fit px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light bg-theme-tan/20 backdrop-blur-md border-2 border-theme-tan/30 text-theme-tan shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  {selectedExperience.duration}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-medium text-theme-tan mb-2">
                @ {selectedExperience.company}
              </h4>
              <p className="text-sm text-gray-500 font-light">
                {selectedExperience.date}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3 mb-6">
              {selectedExperience.description.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-theme-tan mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-theme-sage/20">
              {selectedExperience.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-2 sm:px-3 py-1 rounded-full text-xs font-light bg-theme-tan/20 backdrop-blur-md border-2 border-theme-tan/30 text-theme-tan shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience; 