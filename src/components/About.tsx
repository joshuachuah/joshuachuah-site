'use client';

import { motion } from 'framer-motion';

const About = () => {
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
            <p className="text-xs tracking-widest text-text-dim uppercase">About</p>
          </div>
          <div className="lg:col-span-9 space-y-6 sm:space-y-8 lg:space-y-10">
            <p className="text-lg sm:text-xl font-light text-text-secondary leading-relaxed">
              A full-stack developer passionate about crafting seamless digital experiences.
              I turn complex problems into elegant, user-friendly solutions.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 sm:gap-8 pt-2 sm:pt-4">
              <div>
                <p className="text-[12px] tracking-wider text-text-faint uppercase mb-2">Location</p>
                <p className="text-[14px] text-text-secondary">Kalamazoo, Michigan</p>
              </div>
              <div>
                <p className="text-[12px] tracking-wider text-text-faint uppercase mb-2">Education</p>
                <p className="text-[14px] text-text-secondary">Western Michigan University</p>
                <p className="text-[14px] text-text-dim mt-1">B.S. Computer Science</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;