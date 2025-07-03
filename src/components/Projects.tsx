import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    title: 'Unofficial Website for (G)-IDLE',
    description: 'Designed and developed an unofficial website for the Kpop girl group (G)I-DLE',
    image: '/images/GIDLE.webp',
    tech: [
      { name: 'HTML', color: "orange"},
      { name: "CSS 3", color: "teal" },
      { name: "JavaScript", color: "yellow" },
    ],
    github: 'https://github.com/joshuachuah/unofficial-website',
  },
  {
    title: 'StatsPicksNBA',
    description: 'A Django web application leveraging machine learning algorithms to help make predictions related to NBA betting over/under lines for player and team props.',
    image: 'images/NBA Logo.webp',
    tech: [
      { name: 'Django', color: "green" },
      { name: 'Python', color: "blue" },
      { name: 'Machine Learning', color: "purple" },
    ],
    github: 'https://github.com/joshuachuah/StatsPicksNBA',
  },
  {
    title: 'Broken Song',
    description: 'A program that traverses through a directory tree looking for pieces of an mp3',
    image: 'joshuachuah-site/public/images/music notes.webp',
    tech: [
      { name: 'C', color: "indigo" },
    ],
    github: 'https://github.com/joshuachuah/Broken-Song',
  },
  {
    title: 'Hearthstone Card Parser',
    description: 'a program that parses a .csv file full of Hearthstone card data. It will also de-duplicate, sort and then nicely print out the cards.',
    image: 'joshuachuah-site/public/Hearthstone.webp',
    tech: [
      { name: 'C', color: "indigo" },
    ],
    github: 'https://github.com/joshuachuah/hearthstone-parser',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl min-h-[50vh] pt-[100px] bg-white dark:bg-gray-900 px-4 sm:px-8">

      <div className="relative z-10 py-12 sm:py-20">
        {/* Header */}
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center w-md">
            <h2 className="text-xl md:text-3xl font-bold text-black dark:text-white mr-4 whitespace-nowrap">&lt;/ projects</h2>
            <div className="flex-1 h-px bg-gray-500 opacity-30"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
          layout
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-white bg-${tech.color}-500`}
                  >
                    {tech.name}
                  </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 