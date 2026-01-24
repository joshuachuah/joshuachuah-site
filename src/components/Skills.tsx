'use client';

import { motion } from 'framer-motion';
import { technologies } from '@/data/technologies';

const Skills = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
          className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16"
        >
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-widest text-text-dim uppercase">Technologies</p>
          </div>
          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-3 sm:gap-y-4 lg:gap-y-5">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="text-sm font-light text-text-muted hover:text-text-secondary transition-colors duration-500 cursor-default"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  whileHover={{ x: 3, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;