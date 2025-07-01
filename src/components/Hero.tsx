import React from 'react';
import { TypeAnimation } from 'react-type-animation';
// import SpotifyRecentlyPlayed from './SpotifyRecentlyPlayed';

const Hero = () => {

  return (
    <section id="hero" className="min-h-screen bg-white dark:bg-gray-900 flex items-center pt-[calc(70px+2rem)] pb-8 relative overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-8 flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="animate-slide-fade w-full">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center text-black dark:text-white mb-4 sm:mb-6 px-4">
            <TypeAnimation
              sequence={[
                "hi, joshua here."
              ]}
              wrapper="span"
              speed={50}
            />
          </div>

          <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[600px] mx-auto text-center text-gray-600 dark:text-gray-300 px-4">
            I'm a web developer based in Kalamazoo, MI.
            I combine thoughtful design with a strong foundation for growth to create digital experiences that not only look great—but also support your long-term goals.
          </p>
        </div>
        
        {/* <div className="mt-4">
          <SpotifyRecentlyPlayed />
        </div> */}
      </div>
    </section>
  );
};

export default Hero; 