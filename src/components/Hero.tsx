import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="intro" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-subtitle">
            <TypeAnimation
              sequence={[
                "hi, joshua here."
              ]}
              wrapper="span"
              speed={50}
            />
          </div>

          <p className="hero-description">
            I build exceptional digital experiences that make an impact.
            Specializing in creating beautiful, functional, and user-centered websites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 