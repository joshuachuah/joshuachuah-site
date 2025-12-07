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
    website: 'https://joshuachuah.github.io/unofficial-website/',
  },
  {
    title: 'StatsPicksNBA',
    description: 'A Django web application leveraging machine learning algorithms to help make predictions related to NBA betting over/under lines for player and team props.',
    image: '/images/nba-logo.webp',
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
    image: '/images/music-notes.webp',
    tech: [
      { name: 'C', color: "indigo" },
    ],
    github: 'https://github.com/joshuachuah/Broken-Song',
  },
  {
    title: 'Hearthstone Card Parser',
    description: 'A program that parses a .csv file full of Hearthstone card data. It will also de-duplicate, sort and then nicely print out the cards.',
    image: '/images/Hearthstone.webp',
    tech: [
      { name: 'C', color: "indigo" },
    ],
    github: 'https://github.com/joshuachuah/hearthstone-parser',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl min-h-[50vh] pt-[100px] bg-theme-cream px-4 sm:px-8">
      <div className="relative z-10 py-12 sm:py-20">

        {/* Header with cozy handwritten feel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-theme-tan/40 to-theme-tan/60 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-medium text-theme-tan/90">
              Things I've Built
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-theme-tan/60 via-theme-tan/40 to-transparent rounded-full" />
          </div>
          <p className="text-center text-gray-600/80 text-sm font-light italic">
            A cozy collection of my favorite projects
          </p>
        </motion.div>

        {/* Cozy staggered grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}
            >
              <div className={`flex flex-col md:flex-row gap-6 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}>

                {/* Image side with cozy border */}
                <motion.div
                  className="md:w-1/2 relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] bg-white p-2">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Warm overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-theme-tan/5 to-transparent mix-blend-multiply" />
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-theme-tan/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-theme-sage/15 rounded-full blur-2xl" />
                </motion.div>

                {/* Content side */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <motion.div
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-theme-sage/20 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                    whileHover={{
                      borderColor: "rgba(212, 163, 115, 0.3)",
                      boxShadow: "0 12px 40px rgba(212, 163, 115, 0.12)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Title with cozy underline */}
                    <h3 className="text-xl font-medium text-gray-800 mb-3 relative inline-block">
                      {project.title}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-theme-tan/60 to-theme-tan/20 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                        viewport={{ once: true }}
                      />
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed mb-5 font-light">
                      {project.description}
                    </p>

                    {/* Cozy tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15 + i * 0.08 }}
                          viewport={{ once: true }}
                          className="px-3 py-1.5 text-xs font-medium bg-gradient-to-br from-theme-sage/15 to-theme-sage/10 text-theme-sage/90 rounded-full border border-theme-sage/25 shadow-sm"
                        >
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links with warm buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-theme-tan/20 to-theme-tan/10 border-2 border-theme-tan/30 rounded-xl text-theme-tan font-medium text-sm hover:from-theme-tan/30 hover:to-theme-tan/20 hover:border-theme-tan/40 transition-all duration-300 shadow-sm"
                        whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(212, 163, 115, 0.2)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                      {project.website && (
                        <motion.a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-theme-sage/20 to-theme-sage/10 border-2 border-theme-sage/30 rounded-xl text-theme-sage font-medium text-sm hover:from-theme-sage/30 hover:to-theme-sage/20 hover:border-theme-sage/40 transition-all duration-300 shadow-sm"
                          whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(163, 177, 138, 0.2)" }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                          <span>Visit</span>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects; 