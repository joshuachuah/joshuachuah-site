'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

const Experience = () => {
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
            <p className="text-[10px] tracking-widest text-text-dim uppercase">Experience</p>
          </div>
          <div className="lg:col-span-9 space-y-8 sm:space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-2 sm:mb-3">
                  <div className="min-w-0">
                    <p className="text-base sm:text-lg font-light text-text-secondary group-hover:text-text-primary transition-colors duration-500">
                      {exp.role}
                    </p>
                    <p className="text-sm text-text-muted mt-1">{exp.company}</p>
                  </div>
                  <p className="text-[10px] tracking-wider text-text-light uppercase shrink-0 mt-1 sm:mt-0">{exp.period}</p>
                </div>
                <ul className="space-y-1.5">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm text-text-dim leading-relaxed flex items-start gap-3">
                      <span className="text-text-faint mt-1.5 text-[6px]" aria-hidden="true">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;