import React, { useState, useEffect } from 'react';
import CloudinaryImage from '@/components/CloudinaryImage'

const Intro = () => {
    const greetings = [
        { text: "Hi 👋🏻", language: "English", animation: "bounceIn" },
        { text: "你好 👋🏻", language: "Chinese", animation: "flipIn" },
        { text: "Hola 👋🏻", language: "Spanish", animation: "slideAndFade" },
        { text: "Bonjour 👋🏻", language: "French", animation: "popUp" },
        { text: "こんにちは 👋🏻", language: "Japanese", animation: "rotateIn" },
        { text: "안녕하세요 👋🏻", language: "Korean", animation: "wave" },
        { text: "Ciao 👋🏻", language: "Italian", animation: "rubberBand" },
        { text: "Hallo 👋🏻", language: "German", animation: "swing" },
    ];
    
    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentGreetingIndex((prevIndex) => 
            (prevIndex + 1) % greetings.length
          );
        }, 2000);
    
        return () => clearInterval(intervalId);
    }, []);

    return (
      <section id="intro" className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="profile-image">
            <CloudinaryImage 
              publicId="profile-picture_du9nci"
              alt="Joshua's profile picture"
              width={500}
              height={500}
              className="profile-pic"
            />
            </div>
            <div className="intro-content">
              <div className="greeting-container">
                <h3>
                  <span className={`greeting ${greetings[currentGreetingIndex].animation}`}>
                    {greetings[currentGreetingIndex].text}
                  </span>
                </h3>
                <h3>
                  <span className="name-text">I'm <span className="highlight-name">Joshua</span></span>
                </h3>
              </div>

              <div className="about-me">
                <p>
                  I'm a passionate Full-Stack Developer based in Kalamazoo, MI. 
                </p>
                <br></br>
                <p>
                I’m a team player who loves solving problems and making things work better and simpler.
                I bring fresh energy, a problem-solving mindset, and a commitment to learning and contributing meaningfully to any team I’m part&nbsp;of.
                </p>
              </div>
              <div className="button-container">
                <button 
                  className="contact-btn"
                  onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default Intro;