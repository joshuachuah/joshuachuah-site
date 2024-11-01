import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import { 
  faGraduationCap, 
  faLaptopCode,
  faCloud,
  faLock,
  faBullseye,
  faCode,
  faRocket,
  faMagicWandSparkles
} from '@fortawesome/free-solid-svg-icons';

const Journey = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          // Remove 'show' class when element is not intersecting
          if (!entry.isIntersecting) {
            entry.target.classList.remove('show');
          } else {
            // Add 'show' class with delay when intersecting
            setTimeout(() => {
              entry.target.classList.add('show');
            }, index * 300);
          }
        });
      },
      { 
        threshold: 0.2,
        // Add root margin to trigger slightly before element comes into view
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
      icon: faGraduationCap,
      title: "Computer Science Graduate",
      subtitle: "Western Michigan University, 2024",
      description: "Recently graduated with a strong foundation in software development and problem-solving",
      color: "#4A90E2",
      animation: "slide-right"
    },
    {
      icon: faLaptopCode,
      title: "Full-Stack Development",
      description: "Passionate about creating interactive and user-friendly applications",
      color: "#FF6B6B",
      animation: "slide-left"
    },
    {
      icon: faCloud,
      title: "Cloud Explorer",
      description: "Currently diving into cloud computing and modern development practices",
      color: "#50E3C2",
      animation: "slide-right"
    },
    {
      icon: faRocket,
      title: "Open Source Enthusiast",
      description: "Aiming to contribute to meaningful open-source projects and expand my skill set",
      color: "#F7B731",
      animation: "slide-left"
    },
    {
      icon: faLock,
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
          <FontAwesomeIcon icon={faMagicWandSparkles} className="title-icon" />
          About Me
        </h2>
        
        <div className="timeline">
          {journeyItems.map((item, index) => (
            <div 
              key={index}
              className={`timeline-item scroll-reveal ${item.animation}`}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{'--accent-color': item.color}}
            >
              <div className="timeline-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="timeline-content">
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