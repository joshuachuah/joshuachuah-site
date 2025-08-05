import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import SpotifyRecentlyPlayed from './Spotify';

const Hero = () => {

  return (
    <section id="hero" className="min-h-screen bg-white dark:bg-gray-900 flex items-center pt-[calc(70px+2rem)] pb-8 relative overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 flex flex-col gap-8 items-center">
        <div className="animate-slide-fade w-full">
          <div className="text-3xl sm:text-4xl md:text-5xl text-left sm:text-center text-black dark:text-white mb-4 sm:mb-6">
            <TypeAnimation
              sequence={[
                "hi, joshua here."
              ]}
              wrapper="span"
              speed={50}
            />
          </div>

          <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[600px] sm:mx-auto text-left sm:text-center text-gray-600 dark:text-gray-300">
            I'm a full stack developer based in Kalamazoo, MI.
            I enjoy building things that are both useful and easy to use—from clean, responsive interfaces to solid, dependable backends. Whether it's a small idea or a big project, I love helping bring it to life on the web.
          </p>
        </div>
        
        <div className="w-full">
          <SpotifyRecentlyPlayed />
        </div>
      </div>
    </section>
  );
};

export default Hero; 