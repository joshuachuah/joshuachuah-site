import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="intro" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm Joshua</span>
          </h1>
          
          <div className="hero-subtitle">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="hero-description">
            I build exceptional digital experiences that make an impact.
            Specializing in creating beautiful, functional, and user-centered websites.
          </p>
        </div>

        <div className="hero-image">
          <div className="floating-element"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 