
// Animation utility functions for intersection observer
export const observeElements = (selector: string, animationClass: string, threshold = 0.2) => {
  const elements = document.querySelectorAll(selector);
  
  if (!elements.length) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold,
      rootMargin: '0px 0px -100px 0px',
    }
  );
  
  elements.forEach((element) => {
    observer.observe(element);
  });
};

// Function to initialize all animations
export const initAnimations = () => {
  // Fade in animations for various elements
  observeElements('.animate-on-scroll', 'animate-fade-in');
  observeElements('.animate-on-scroll-right', 'animate-fade-in-right');
  observeElements('.animate-on-scroll-left', 'animate-fade-in-left');
  observeElements('.animate-on-scroll-scale', 'animate-scale-up');
  
  // Staggered animations
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach((container) => {
    const items = container.querySelectorAll('.stagger-item');
    items.forEach((item, index) => {
      (item as HTMLElement).style.opacity = '0';
      (item as HTMLElement).style.animation = `fade-in 0.5s ease-out ${index * 0.1}s forwards`;
    });
  });
};
