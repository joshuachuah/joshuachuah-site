const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Triggers when 10% of the element is visible
  });
  
  // Select all elements with scroll-animation class
  document.querySelectorAll('.scroll-animation').forEach((element) => {
    observer.observe(element);
  });