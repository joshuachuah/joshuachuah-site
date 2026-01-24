'use client';

import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#FAF9F6]">
      <div className="relative">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* Main logo container */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[#2D2D2D]/10 shadow-lg"
          >
            {/* Inner circle with initials */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-2 rounded-full bg-[#FAF9F6] flex items-center justify-center"
            >
              <span className="text-3xl font-bold text-[#2D2D2D]/70">
                JC
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-[#2D2D2D]/50"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
