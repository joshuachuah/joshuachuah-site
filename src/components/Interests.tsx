'use client';

import { motion } from 'framer-motion';
import { interests } from '@/data/interests';

const Interests = () => {
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
            <p className="text-[12px] tracking-widest text-text-dim uppercase">Interests</p>
          </div>
          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10">
              {interests.map((interest, index) => (
                <motion.span
                  key={index}
                  className="text-base font-light text-text-muted hover:text-text-secondary transition-colors duration-500 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8, y: { type: 'spring', stiffness: 200, damping: 25 } }}
                  whileHover={{ y: -3 }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;