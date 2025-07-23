import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    company: 'Peak Heating and Cooling',
    role: 'Web Developer',
    date: 'FEB 2025 - PRESENT',
    duration: 'Current',
    description: [
      "Rebuilt and migrated the company website from WordPress to Webflow, modernizing the design and improving load times by 15% for a smoother user experience.",
      "Developed a custom job scheduling system using ReactJS and the ServiceTitan API, increasing booking efficiency by 10%.",
      "Implemented SEO best practices, boosting organic traffic, improving search visibility, and increasing lead generation for HVAC services."
    ],
    color: 'rose'
  },
  {
    company: 'Stealth Startup',
    role: 'Software Developer Intern',
    date: 'JUN 2024 - OCT 2024',
    duration: '4 months',
    description: [
      "Resolved 15+ critical UI bugs, enhancing responsiveness and reducing support tickets by 20%.",
      "Developed and integrated a dynamic Flex Forms management system, increasing the scalability of form-based features and allowing users to configure needs 30% faster.",
      "Conducted thorough testing to ensure cross-browser compatibility, improving system stability."
    ],
    color: 'blue'
  },
  {
    company: 'Western Michigan University',
    role: 'Teaching Assistant',
    date: 'JAN 2024 - APR 2024',
    duration: '4 months',
    description: [
      "Provided one-on-one tutoring sessions to students, improving their understanding of WebGL.",
      "Graded assignments and exams with detailed feedback, helping students improve by 15% on future assignments and supporting their academic success"
    ],
    color: 'green'
  },
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(experiences[0].company);

  const selectedExperience = experiences.find(exp => exp.company === selectedCompany);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      rose: 'bg-rose-500 text-rose-500',
      blue: 'bg-blue-500 text-blue-500',
      green: 'bg-green-500 text-green-500'
    };
    return colorMap[color] || colorMap.rose;
  };

  return (
    <section id="experience" className="mx-auto max-w-6xl min-h-[50vh] pt-[100px] bg-white dark:bg-gray-900 mt-12 px-4 sm:px-8">
      <motion.div 
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center w-md">
          <h2 className="text-xl md:text-3xl font-bold text-black dark:text-white mr-4 whitespace-nowrap">&lt;/ experience</h2>
          <div className="flex-1 h-px bg-gray-500 opacity-30"></div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left side - Company Timeline */}
        <div className="lg:col-span-1">
          <div className="relative flex flex-col items-start">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden lg:block absolute left-2 top-2 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 z-0" style={{height: `calc(100% - 1.5rem)`}} />
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start mb-6 lg:mb-8 z-10 w-full"
                onClick={() => setSelectedCompany(exp.company)}
                style={{ cursor: 'pointer' }}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className={`hidden lg:block w-5 h-5 rounded-full flex items-center justify-center mt-1 mr-4 transition-all duration-300 border-4 ${
                  selectedCompany === exp.company
                    ? getColorClasses(exp.color).split(' ')[0] + ' border-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                }`} />
                {/* Company info */}
                <div className="w-full">
                  <h3 className={`font-bold text-lg transition-colors duration-300 ${
                    selectedCompany === exp.company
                      ? getColorClasses(exp.color).split(' ')[1]
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {exp.company}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {exp.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side - Experience Details */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {selectedExperience && (
              <motion.div
                key={selectedExperience.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Header */}
                <motion.div
                  className="pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                      {selectedExperience.role}
                    </h3>
                    <span className={`w-auto self-start sm:self-auto px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${
                      getColorClasses(selectedExperience.color).split(' ')[0] + ' text-white'
                    }`}>
                      {selectedExperience.duration}
                    </span>
                  </div>
                  <h4 className={`text-lg sm:text-xl font-semibold ${getColorClasses(selectedExperience.color).split(' ')[1]}`}>
                    @ {selectedExperience.company}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {selectedExperience.date}
                  </p>
                  <div className="space-y-3 sm:space-y-4 mt-4">
                    {selectedExperience.description.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 sm:space-x-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 sm:mt-3 flex-shrink-0 ${getColorClasses(selectedExperience.color).split(' ')[0]}`} />
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience; 