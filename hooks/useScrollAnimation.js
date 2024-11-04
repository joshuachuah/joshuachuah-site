import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = { threshold: 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add scroll-animation class if not present
        if (!entry.target.classList.contains('scroll-animation')) {
          entry.target.classList.add('scroll-animation');
        }
        
        // When element leaves viewport, remove visible class
        if (!entry.isIntersecting) {
          entry.target.classList.remove('visible');
        } else {
          // Add visible class after a small delay when entering viewport
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 100);
        }
      });
    }, options);

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
        observer.disconnect();
      }
    };
  }, []);

  return elementRef;
};

export default useScrollAnimation;