// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animations on scroll
const sections = document.querySelectorAll('section');

const observerOptions = {
  threshold: 0.1, // Trigger animation when 10% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animation classes based on the section's ID
      switch (entry.target.id) {
        case 'hero':
          entry.target.classList.add('fade-in');
          break;
        case 'about':
          entry.target.classList.add('slide-in-left');
          break;
        case 'projects':
          entry.target.classList.add('fade-in-up');
          break;
        case 'skills':
          entry.target.classList.add('fade-in');
          break;
        case 'achievements':
          entry.target.classList.add('slide-in-right');
          break;
        case 'contact':
          entry.target.classList.add('fade-in-up');
          break;
        default:
          entry.target.classList.add('fade-in');
      }
      // Stop observing the section once the animation is applied
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
  observer.observe(section);
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Add hover effect to skills
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.backgroundColor = '#0056b3'; // Darker shade on hover
    skill.style.transform = 'translateY(-5px)';
    skill.style.transition = 'all 0.3s ease';
  });

  skill.addEventListener('mouseleave', () => {
    skill.style.backgroundColor = '#007BFF'; // Original color
    skill.style.transform = 'translateY(0)';
  });
});
