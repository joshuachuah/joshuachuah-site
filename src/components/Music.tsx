'use client';

import { motion } from 'framer-motion';
import SpotifyRecentlyPlayed from '@/components/SpotifyClient';

const Music = () => {
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
            <p className="text-[10px] tracking-widest text-text-dim uppercase">Music</p>
          </div>
          <div className="lg:col-span-9">
            <SpotifyRecentlyPlayed />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;