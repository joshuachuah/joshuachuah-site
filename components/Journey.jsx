import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';

const Journey = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove('show');
          } else {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, index * 300);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '50px' 
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const journeyItems = [
    {
      icon: "🎓",
      title: "Computer Science Graduate",
      subtitle: "Western Michigan University, 2024",
      description: "Recently graduated with a strong foundation in software development and problem-solving",
      color: "#4A90E2",
      animation: "slide-right"
    },
    {
      icon: "💻", 
      title: "Full-Stack Development",
      description: "Passionate about creating interactive and user-friendly applications",
      color: "#FF6B6B",
      animation: "slide-left"
    },
    {
      icon: "☁️",
      title: "Cloud Explorer",
      description: "Currently diving into cloud computing and modern development practices",
      color: "#50E3C2",
      animation: "slide-right"
    },
    {
      icon: "🚀",
      title: "Open Source Enthusiast",
      description: "Aiming to contribute to meaningful open-source projects and expand my skill set",
      color: "#F7B731",
      animation: "slide-left"
    },
    {
      icon: "🔒",
      title: "Security Enthusiast",
      description: "Exploring the fascinating world of cybersecurity in my free time",
      color: "#8E44AD",
      animation: "slide-right"
    }
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <h2 className="journey-title">
          ✨ About Me 
        </h2>
        
        <div className="timeline">
          {journeyItems.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item scroll-reveal ${item.animation}`}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{'--accent-color': item.color}}
            >
              <div className="timeline-icon floating">
                {item.icon}
              </div>
              <div className="timeline-content floating-content">
                <h3>{item.title}</h3>
                {item.subtitle && <h4>{item.subtitle}</h4>}
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;