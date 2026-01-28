'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
          className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16"
        >
          <div className="lg:col-span-3">
            <p className="text-xs tracking-widest text-text-dim uppercase">Projects</p>
          </div>
          <div className="lg:col-span-9 space-y-10 sm:space-y-12 lg:space-y-16">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50 rounded"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.8 }}
              >
                <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-1 xs:gap-2 mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-light text-text-secondary group-hover:text-text-primary transition-all duration-500 flex items-center gap-3 min-w-0">
                    <span className="truncate">{project.title}</span>
                    <FaArrowRight aria-hidden="true" className="text-xs opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-500 shrink-0" />
                  </h3>
                  <span className="text-[12px] tracking-wider text-text-faint shrink-0">{project.year}</span>
                </div>
                <p className="text-sm text-text-muted mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[12px] tracking-tight text-text-faint uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <motion.div
                  className="h-px bg-border-subtle mt-6 sm:mt-8 lg:mt-10 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;