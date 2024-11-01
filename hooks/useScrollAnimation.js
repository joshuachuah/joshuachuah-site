import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;