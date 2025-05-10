// This JavaScript adds the observer functionality to animate the tools section
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer to handle scroll animations
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'active' class to trigger the animations
        entry.target.classList.add('active');
      }
    });
  }, { 
    threshold: 0.2,  // Trigger when 20% of the element is visible
    rootMargin: '0px 0px -50px 0px'  // Offset the trigger point
  });
  
  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.bm-gd-tools-fade-in, .bm-gd-tools-scale-in');
  animatedElements.forEach(el => {
    animationObserver.observe(el);
  });
  
  // Optional: Add hover effects for the tool cards
  const toolCards = document.querySelectorAll('.bm-gd-tools-card');
  toolCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // You could add additional hover effects here if needed
      const icon = this.querySelector('.bm-gd-tools-icon');
      if (icon) {
        icon.style.transform = 'scale(1.15) rotate(5deg)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.bm-gd-tools-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
});