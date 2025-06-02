import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="intro" className="min-h-screen flex items-center pt-[calc(70px+2rem)] pb-8 relative overflow-hidden">
      <div className="max-w-container mx-auto px-8 flex gap-16 items-center">
        <div className="animate-slide-fade">
          <div className="text-5xl mb-6">
            <TypeAnimation
              sequence={[
                "hi, joshua here."
              ]}
              wrapper="span"
              speed={50}
            />
          </div>

          <p className="text-lg leading-relaxed text-steel-blue mb-8 max-w-[600px] lg:text-left text-center">
            I build exceptional digital experiences that make an impact.
            Specializing in creating beautiful, functional, and user-centered websites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 