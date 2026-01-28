'use client';

import { motion } from 'framer-motion';
import { RefObject } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface HeroProps {
  heroOpacity: any;
  heroY: any;
  heroRef: RefObject<HTMLElement>;
}

const Hero = ({ heroOpacity, heroY, heroRef }: HeroProps) => {
  return (
    <motion.section
      ref={heroRef}
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 relative pt-20 sm:pt-0"
      style={{ opacity: heroOpacity }}
    >
      {/* Decorative vertical line - hidden on mobile */}
      <motion.div
        className="absolute left-4 sm:left-6 md:left-8 lg:left-16 top-0 w-px bg-border-subtle hidden sm:block"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <motion.div className="max-w-5xl mx-auto w-full pt-16 sm:pt-24" style={{ y: heroY }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
        >
          {/* Left spacer */}
          <div className="lg:col-span-1 hidden lg:block" />

          {/* Main content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left w-full">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] tracking-wider text-text-dim uppercase">Available for opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2 }}
            >
              <p className="text-[12px] tracking-wide-tight text-text-dim uppercase mb-4 sm:mb-6">
                Full Stack Developer
              </p>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
                Joshua
                <br />
                <span className="text-text-secondary">Chuah</span>
              </h1>
            </motion.div>

            {/* Zen line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
              className="h-px bg-border-subtle mx-auto lg:mx-0"
            />

            <motion.p
              className="text-base sm:text-lg font-light text-text-secondary max-w-md leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Developing seamless digital experiences with clean,
              responsive interfaces and robust backends.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-4 xs:gap-6 sm:gap-8 pt-2 sm:pt-4"
            >
              <a
                href="#contact"
                className="group flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50 rounded"
              >
                <span className="tracking-tight uppercase">Get in touch</span>
                <FaArrowRight aria-hidden="true" className="text-xs group-hover:translate-x-1 transition-transform duration-500" />
              </a>
              <a
                href="#work"
                className="text-sm tracking-tight uppercase text-text-dim hover:text-text-secondary transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/50 rounded"
              >
                View work
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end mb-6 lg:mb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border border-subtle" />
              <Image
                src="/images/3.webp"
                alt="Joshua Chuah"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;