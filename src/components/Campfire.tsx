'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Generate consistent embers
const generateEmbers = (count: number) => {
  const embers = [];
  for (let i = 0; i < count; i++) {
    embers.push({
      id: i,
      width: (i % 2 === 0) ? '2px' : '3px',
      height: (i % 3 === 0) ? '2px' : '3px',
      left: `${50 + (i * 7.3 - 50)}%`,
      background: i % 3 === 0 ? '#FDE047' : i % 3 === 1 ? '#FB923C' : '#FCA5A5',
      yEnd: -120 - (i * 11.7) % 80,
      xStart: (i * 5.7 - 7.5) % 30,
      xEnd: (i * 9.3 - 12.5) % 50,
      duration: 2 + (i * 3.7) % 2.5,
      delay: (i * 2.1) % 2,
    });
  }
  return embers;
};

// Generate consistent smoke particles
const generateSmoke = (count: number) => {
  const smoke = [];
  for (let i = 0; i < count; i++) {
    smoke.push({
      id: i,
      left: `${45 + i * 10}%`,
      xStart: (i * 7.3 - 10) % 20,
      xEnd: (i * 11.7 - 20) % 40,
      duration: 4 + (i * 5.3) % 2,
      delay: i * 0.8,
    });
  }
  return smoke;
};

const Campfire = () => {
  const embers = useMemo(() => generateEmbers(15), []);
  const smokeParticles = useMemo(() => generateSmoke(3), []);
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow effect - enhanced */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-80 h-80 rounded-full bg-orange-400/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 flex items-end gap-8">
        {/* Person sitting by the fire - Realistic with hoodie and glasses */}
        <div className="relative mb-8">
          <motion.div
            className="relative"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Hoodie */}
            <div className="relative">
              {/* Hood */}
              <div className="w-20 h-16 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-t-[3rem] relative shadow-2xl border-2 border-gray-900">
                {/* Hood shadow/depth */}
                <div className="absolute inset-x-3 top-2 h-12 bg-black/30 rounded-t-[2rem]" />

                {/* Head inside hood */}
                <div className="absolute left-1/2 -translate-x-1/2 top-3 w-11 h-11 rounded-full bg-gradient-to-br from-amber-800 to-amber-900 shadow-lg" />

                {/* Glasses */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 flex gap-1 items-center z-10">
                  {/* Left lens */}
                  <div className="w-4 h-3.5 rounded-lg border-2 border-gray-900 bg-gradient-to-br from-cyan-100/40 to-blue-100/30 shadow-sm" />
                  {/* Bridge */}
                  <div className="w-1 h-0.5 bg-gray-900" />
                  {/* Right lens */}
                  <div className="w-4 h-3.5 rounded-lg border-2 border-gray-900 bg-gradient-to-br from-cyan-100/40 to-blue-100/30 shadow-sm" />
                </div>

                {/* Glasses arms */}
                <div className="absolute left-2 top-6 w-2 h-0.5 bg-gray-900 -rotate-45" />
                <div className="absolute right-2 top-6 w-2 h-0.5 bg-gray-900 rotate-45" />
              </div>

              {/* Hoodie body */}
              <div className="w-20 h-24 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 relative shadow-2xl border-x-2 border-gray-900">
                {/* Hoodie strings */}
                <div className="absolute left-7 top-1 w-0.5 h-8 bg-gray-600 rounded-full" />
                <div className="absolute right-7 top-1 w-0.5 h-8 bg-gray-600 rounded-full" />

                {/* String tips */}
                <div className="absolute left-7 top-9 w-1 h-1 bg-gray-500 rounded-full" />
                <div className="absolute right-7 top-9 w-1 h-1 bg-gray-500 rounded-full" />

                {/* Hoodie pocket */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-8 border-2 border-gray-900/50 rounded-b-xl bg-black/20" />
              </div>

              {/* Arms resting */}
              <div className="absolute -left-5 top-20 w-14 h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full rotate-[25deg] shadow-lg border-2 border-gray-900" />
              <div className="absolute -right-5 top-20 w-14 h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full -rotate-[25deg] shadow-lg border-2 border-gray-900" />

              {/* Hands */}
              <div className="absolute -left-1 top-28 w-3.5 h-3.5 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full shadow-md" />
              <div className="absolute -right-1 top-28 w-3.5 h-3.5 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full shadow-md" />
            </div>

            {/* Lower body - sitting */}
            <div className="flex gap-2 justify-center mt-1">
              {/* Legs in jeans */}
              <div className="w-6 h-10 bg-gradient-to-b from-blue-800 to-blue-900 rounded-b-xl shadow-lg border-2 border-blue-950" />
              <div className="w-6 h-10 bg-gradient-to-b from-blue-800 to-blue-900 rounded-b-xl shadow-lg border-2 border-blue-950" />
            </div>

            {/* Shoes */}
            <div className="flex gap-2 justify-center -mt-1">
              <div className="w-7 h-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full shadow-lg border border-gray-950" />
              <div className="w-7 h-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full shadow-lg border border-gray-950" />
            </div>
          </motion.div>

          {/* Sitting log */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 rounded-full shadow-2xl border-2 border-amber-950" />
        </div>

        {/* Fire with more flames */}
        <div className="relative">
          <svg
            width="220"
            height="300"
            viewBox="0 0 220 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Back flames - larger and more spread */}
            <motion.path
              d="M60 80 C45 110, 30 140, 35 175 C35 210, 50 245, 70 250 C90 250, 105 210, 105 175 C105 140, 85 110, 60 80Z"
              fill="url(#backFlame1)"
              animate={{
                d: [
                  'M60 80 C45 110, 30 140, 35 175 C35 210, 50 245, 70 250 C90 250, 105 210, 105 175 C105 140, 85 110, 60 80Z',
                  'M60 75 C40 105, 25 135, 32 173 C32 208, 53 243, 70 248 C87 248, 108 208, 108 173 C108 135, 80 105, 60 75Z',
                  'M60 82 C48 112, 33 142, 37 177 C37 212, 48 247, 70 252 C92 252, 103 212, 103 177 C103 142, 88 112, 60 82Z',
                  'M60 80 C45 110, 30 140, 35 175 C35 210, 50 245, 70 250 C90 250, 105 210, 105 175 C105 140, 85 110, 60 80Z',
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.path
              d="M160 80 C145 110, 135 140, 135 175 C135 210, 150 245, 170 250 C190 250, 205 210, 205 175 C205 140, 185 110, 160 80Z"
              fill="url(#backFlame2)"
              animate={{
                d: [
                  'M160 80 C145 110, 135 140, 135 175 C135 210, 150 245, 170 250 C190 250, 205 210, 205 175 C205 140, 185 110, 160 80Z',
                  'M160 77 C140 107, 130 137, 138 173 C138 208, 153 243, 170 248 C187 248, 208 208, 208 173 C208 137, 180 107, 160 77Z',
                  'M160 83 C148 113, 138 143, 133 178 C133 213, 148 248, 170 253 C192 253, 203 213, 203 178 C203 143, 188 113, 160 83Z',
                  'M160 80 C145 110, 135 140, 135 175 C135 210, 150 245, 170 250 C190 250, 205 210, 205 175 C205 140, 185 110, 160 80Z',
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Main central flame - orange */}
            <motion.path
              d="M110 50 C90 90, 70 130, 70 170 C70 210, 85 250, 110 250 C135 250, 150 210, 150 170 C150 130, 130 90, 110 50Z"
              fill="url(#flameGradient1)"
              animate={{
                d: [
                  'M110 50 C90 90, 70 130, 70 170 C70 210, 85 250, 110 250 C135 250, 150 210, 150 170 C150 130, 130 90, 110 50Z',
                  'M110 45 C85 85, 65 125, 68 168 C68 208, 88 248, 110 248 C132 248, 152 208, 152 168 C152 125, 135 85, 110 45Z',
                  'M110 52 C95 92, 75 132, 72 172 C72 212, 83 252, 110 252 C137 252, 148 212, 148 172 C148 132, 125 92, 110 52Z',
                  'M110 50 C90 90, 70 130, 70 170 C70 210, 85 250, 110 250 C135 250, 150 210, 150 170 C150 130, 130 90, 110 50Z',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Secondary inner flames */}
            <motion.path
              d="M95 90 C85 110, 80 130, 80 150 C80 175, 87 200, 95 200 C103 200, 110 175, 110 150 C110 130, 105 110, 95 90Z"
              fill="url(#flameGradient2)"
              animate={{
                d: [
                  'M95 90 C85 110, 80 130, 80 150 C80 175, 87 200, 95 200 C103 200, 110 175, 110 150 C110 130, 105 110, 95 90Z',
                  'M95 85 C83 105, 77 128, 82 148 C82 173, 89 198, 95 198 C101 198, 108 173, 108 148 C108 128, 107 105, 95 85Z',
                  'M95 92 C87 112, 82 132, 78 152 C78 177, 85 202, 95 202 C105 202, 112 177, 112 152 C112 132, 103 112, 95 92Z',
                  'M95 90 C85 110, 80 130, 80 150 C80 175, 87 200, 95 200 C103 200, 110 175, 110 150 C110 130, 105 110, 95 90Z',
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.path
              d="M125 90 C115 110, 110 130, 110 150 C110 175, 117 200, 125 200 C133 200, 140 175, 140 150 C140 130, 135 110, 125 90Z"
              fill="url(#flameGradient2)"
              animate={{
                d: [
                  'M125 90 C115 110, 110 130, 110 150 C110 175, 117 200, 125 200 C133 200, 140 175, 140 150 C140 130, 135 110, 125 90Z',
                  'M125 87 C113 107, 108 128, 112 148 C112 173, 119 198, 125 198 C131 198, 138 173, 138 148 C138 128, 137 107, 125 87Z',
                  'M125 93 C117 113, 112 133, 108 153 C108 178, 115 203, 125 203 C135 203, 142 178, 142 153 C142 133, 133 113, 125 93Z',
                  'M125 90 C115 110, 110 130, 110 150 C110 175, 117 200, 125 200 C133 200, 140 175, 140 150 C140 130, 135 110, 125 90Z',
                ],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Core bright flame - yellow */}
            <motion.path
              d="M110 80 C100 105, 95 130, 95 155 C95 185, 102 215, 110 215 C118 215, 125 185, 125 155 C125 130, 120 105, 110 80Z"
              fill="url(#flameGradient3)"
              animate={{
                d: [
                  'M110 80 C100 105, 95 130, 95 155 C95 185, 102 215, 110 215 C118 215, 125 185, 125 155 C125 130, 120 105, 110 80Z',
                  'M110 75 C98 100, 92 128, 97 153 C97 183, 104 213, 110 213 C116 213, 123 183, 123 153 C123 128, 122 100, 110 75Z',
                  'M110 82 C102 107, 97 132, 93 157 C93 187, 100 217, 110 217 C120 217, 127 187, 127 157 C127 132, 118 107, 110 82Z',
                  'M110 80 C100 105, 95 130, 95 155 C95 185, 102 215, 110 215 C118 215, 125 185, 125 155 C125 130, 120 105, 110 80Z',
                ],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="backFlame1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#EA580C" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="backFlame2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#EA580C" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="flameGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#F7931E" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FDC830" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="flameGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
                <stop offset="50%" stopColor="#FCD34D" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="flameGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" stopOpacity="1" />
                <stop offset="50%" stopColor="#FDE047" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.85" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logs beneath the fire */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52">
            {/* Log 1 */}
            <div className="absolute bottom-0 left-8 w-36 h-6 bg-gradient-to-r from-amber-900 to-amber-800 rounded-full transform -rotate-12 shadow-xl border-2 border-amber-950" />
            {/* Log 2 */}
            <div className="absolute bottom-1 right-8 w-36 h-6 bg-gradient-to-r from-amber-800 to-amber-900 rounded-full transform rotate-12 shadow-xl border-2 border-amber-950" />
            {/* Log 3 - front */}
            <div className="absolute bottom-2 left-14 w-32 h-7 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 rounded-full shadow-2xl z-10 border-2 border-amber-950" />
          </div>

          {/* Enhanced floating embers - more numerous */}
          {embers.map((ember) => (
            <motion.div
              key={ember.id}
              className="absolute rounded-full"
              style={{
                width: ember.width,
                height: ember.height,
                left: ember.left,
                bottom: '35%',
                background: ember.background,
              }}
              animate={{
                y: [-10, ember.yEnd],
                x: [ember.xStart, ember.xEnd],
                opacity: [1, 0.9, 0.7, 0],
                scale: [1, 1.2, 0.8, 0],
              }}
              transition={{
                duration: ember.duration,
                delay: ember.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Smoke */}
          {smokeParticles.map((smoke) => (
            <motion.div
              key={smoke.id}
              className="absolute w-8 h-8 rounded-full bg-gray-400/20 blur-md"
              style={{
                left: smoke.left,
                bottom: '70%',
              }}
              animate={{
                y: [0, -100],
                x: [smoke.xStart, smoke.xEnd],
                opacity: [0.3, 0.2, 0],
                scale: [0.5, 1.5, 2],
              }}
              transition={{
                duration: smoke.duration,
                delay: smoke.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campfire;
