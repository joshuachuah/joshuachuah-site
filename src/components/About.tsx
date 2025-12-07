import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiExpress } from 'react-icons/si';
import Campfire from './Campfire';
import Music from './Music';

const About = () => {
  const technologies = [
    { name: 'Python', icon: FaPython },
    { name: 'Express', icon: SiExpress },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React.js', icon: FaReact },
    { name: 'JavaScript ES6+', icon: FaJs },
    { name: 'Node.js', icon: FaNodeJs },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl min-h-screen pt-32 pb-32 bg-theme-cream px-6 sm:px-12">

      {/* Cozy Header */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[0.25em] text-theme-tan/50 font-medium mb-3">
          Get Cozy
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-theme-tan/90 mb-4">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
          Grab a warm drink and learn a bit about who I am ☕
        </p>
      </motion.div>

      {/* Grid Layout - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mx-auto w-full">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* Campfire - Top Left */}
          <motion.div
            className="min-h-[60vh] bg-white/40 backdrop-blur-md border-2 border-theme-sage/30 rounded-3xl p-8
                        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                        hover:bg-white/50 hover:border-theme-tan/40 hover:shadow-[0_8px_40px_rgb(212,163,115,0.15)]
                        transition-all duration-500 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Campfire />
          </motion.div>

          {/* When I'm Not Coding - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative bg-white/40 backdrop-blur-md border-2 border-theme-sage/30 rounded-3xl p-8
                            shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                            hover:bg-white/50 hover:border-theme-tan/40 hover:shadow-[0_8px_40px_rgb(212,163,115,0.15)]
                            transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">🌙</div>
                <h3 className="text-2xl font-medium text-gray-800 mt-1">
                  When I'm Not Coding
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-xl flex-shrink-0">🔒</div>
                  <p className="text-base text-gray-700 leading-relaxed font-light">
                    Reading about{' '}
                    <span className="font-medium text-gray-900">Cybersecurity</span> and
                    malware analysis
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="text-xl flex-shrink-0">🎮</div>
                  <p className="text-base text-gray-700 leading-relaxed font-light">
                    Playing{' '}
                    <span className="font-medium text-gray-900">video games</span> and
                    exploring virtual worlds
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="text-xl flex-shrink-0">📺</div>
                  <p className="text-base text-gray-700 leading-relaxed font-light">
                    Binge-watching{' '}
                    <span className="font-medium text-gray-900">K-dramas</span> in
                    my downtime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* Hey there! - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative bg-white/40 backdrop-blur-md border-2 border-theme-sage/30 rounded-3xl p-8
                            shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                            hover:bg-white/50 hover:border-theme-tan/40 hover:shadow-[0_8px_40px_rgb(212,163,115,0.15)]
                            transition-all duration-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">👋</div>
                <h3 className="text-2xl font-medium text-gray-800 mt-1">
                  Hey there!
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-[1.8] font-light">
                I'm currently{' '}
                <span className="text-theme-tan font-medium bg-theme-tan/10 px-2 py-0.5 rounded">
                  exploring new opportunities
                </span>{' '}
                where I can contribute my technical expertise and create meaningful digital experiences.
              </p>
            </div>
          </motion.div>

          {/* My Toolbox */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative bg-white/40 backdrop-blur-md border-2 border-theme-sage/30 rounded-3xl p-8
                            shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                            hover:bg-white/50 hover:border-theme-tan/40 hover:shadow-[0_8px_40px_rgb(212,163,115,0.15)]
                            transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl">🛠️</div>
                <h3 className="text-2xl font-medium text-gray-800 mt-1">
                  My Toolbox
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="group/tech flex items-center gap-3 p-3 rounded-2xl
                               bg-gradient-to-br from-theme-cream/50 to-white/50
                               border border-theme-sage/20
                               hover:border-theme-tan/40 hover:shadow-lg hover:shadow-theme-tan/10
                               hover:-translate-y-1
                               transition-all duration-300"
                  >
                    <tech.icon className="text-2xl text-gray-500
                                         group-hover/tech:text-theme-tan group-hover/tech:scale-110
                                         transition-all duration-300" />
                    <span className="text-sm font-medium text-gray-700">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Music - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative bg-white/40 backdrop-blur-md border-2 border-theme-sage/30 rounded-3xl p-8
                            shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                            hover:bg-white/50 hover:border-theme-tan/40 hover:shadow-[0_8px_40px_rgb(212,163,115,0.15)]
                            transition-all duration-500">
              <Music />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
