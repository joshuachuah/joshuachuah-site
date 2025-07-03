import React from 'react';
import profilePic from '/images/2.webp';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiWebflow } from 'react-icons/si';

const About = () => {
  const technologies = [
    { name: 'Webflow', icon: SiWebflow },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React.js', icon: FaReact },
    { name: 'JavaScript ES6+', icon: FaJs },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Python', icon: FaPython }
  ];

  // Detect if user is on mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <section id="about" className="mx-auto max-w-6xl min-h-[50vh] pt-[100px] bg-white dark:bg-gray-900 px-4 sm:px-8">
      {/* Header with animated underline */}
      <motion.div 
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center w-md">
          <h2 className="text-xl md:text-3xl font-bold text-black dark:text-white mr-4 whitespace-nowrap">&lt;/ about me</h2>
          <div className="flex-1 h-px bg-gray-500 opacity-30"></div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left side - Content Cards */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          {/* Main intro card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-rose-400 rounded-full mr-3"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Current Role</h3>
            </div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am currently a <span className="text-rose-500 font-semibold">Web Developer</span> at{' '}
              <span className="text-rose-400 font-semibold">ONTRAC Marketing</span>, crafting scalable 
              websites that drive business growth and user engagement.
            </p>
          </motion.div>

          {/* Technologies card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Technologies I Work With</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <tech.icon 
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-300"
                  />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Beyond Code</h3>
            </div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I read about the latest <span className="text-green-500 font-semibold">Cybersecurity</span> news, specifically in malware. I also
              enjoy playing <span className="text-purple-500 font-semibold">video games</span>, and binge-watch{' '}
              <span className="text-pink-500 font-semibold">K-dramas</span>.
            </p>
          </motion.div>
        </div>

        {/* Right side - Profile Image with floating elements */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8}}
          >
            {/* Main image */}
            <div className="relative group">
              <img
                src={profilePic}
                alt="Joshua Chuah"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl sm:rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;