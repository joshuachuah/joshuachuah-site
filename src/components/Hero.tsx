import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';

// Generate consistent particle positions
const generateParticles = (count: number) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      left: (i * 37.5 + 12.3) % 100,
      top: (i * 43.7 + 8.9) % 100,
      xOffset: (i * 17.3) % 20 - 10,
      duration: 3 + (i * 7.1) % 4,
      delay: (i * 5.3) % 2,
    });
  }
  return particles;
};

const taglines = [
  "Building impactful and innvative digital experiences ✨",
  "Turning caffeine into code ☕",
  "Crafting pixels with purpose 🎨",
  "Making the web a better place 🌐",
  "One commit at a time 🚀",
];

const Hero = () => {
  const particles = useMemo(() => generateParticles(20), []);
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="h-screen bg-theme-cream flex items-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dot grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(204, 213, 174, 0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-theme-sage/20 to-theme-tan/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-theme-tan/20 to-theme-sage/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        ></motion.div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-theme-tan/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="inline-block px-4 py-2 bg-white/40 backdrop-blur-md border-2 border-theme-sage/30 rounded-full text-sm font-light text-theme-tan shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/50 hover:border-theme-tan/40 transition-all duration-500">
                Full Stack Developer ☕
              </span>
            </motion.div>

            {/* Main heading with typing animation */}
            <div className="space-y-2">
              <motion.p
                className="text-lg sm:text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              >
                Hello, I'm
              </motion.p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#D4A373]">
                Joshua Chuah
              </h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Based in Kalamazoo, MI. I develop seamless digital experiences with clean, responsive interfaces and robust backends.
              Passionate about turning ideas into impactful web solutions.
            </motion.p>

            {/* Animated Tagline */}
            <motion.div
              className="relative max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="relative h-16 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTagline}
                    className="text-xl sm:text-2xl font-light text-theme-tan italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    "{taglines[currentTagline]}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Progress dots */}
              <div className="flex gap-2 mt-4">
                {taglines.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTagline(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTagline
                        ? 'bg-theme-tan w-6'
                        : 'bg-theme-sage/40 hover:bg-theme-sage/60'
                    }`}
                    aria-label={`Go to tagline ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with animated border */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Profile image flip card */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 [perspective:1000px] group">
                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front side - Profile image */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] [backface-visibility:hidden]">
                    <img
                      src="/images/3.webp"
                      alt="Joshua Chuah"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back side - Cozy emoji */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-theme-sage via-theme-tan to-theme-tan flex items-center justify-center">
                    <span className="text-8xl sm:text-9xl lg:text-[10rem]">🌙</span>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-theme-sage to-theme-tan rounded-full blur-xl opacity-60"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-theme-tan to-theme-sage rounded-full blur-xl opacity-60"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={() => {
          const nextSection = document.querySelector('#hero')?.nextElementSibling;
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 border-theme-tan/50 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-theme-tan rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">Scroll</p>
      </motion.div>
    </section>
  );
};

export default Hero; 