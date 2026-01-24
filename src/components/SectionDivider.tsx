'use client';

import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
      <motion.div
        className="h-px w-full bg-border-subtle"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </div>
  );
};

export default SectionDivider;