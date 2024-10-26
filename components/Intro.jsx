import { useState, useEffect } from 'react';

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
            <div className="intro-profile">
              <div className="profile-text">
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
                <p>
                  I'm a passionate Full-Stack Developer based in Kalamazoo, MI. 
                </p>
                <p>
                I love turning complex problems into simple, beautiful, and intuitive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default Intro;