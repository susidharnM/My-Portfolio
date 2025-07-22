// script.js - Portfolio main script

// Scroll-in animation for .animate-on-scroll elements
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
}

// Scroll-in animation for .animate-fadein-up elements (About v2)
function handleFadeInUpAnimations() {
  const elements = document.querySelectorAll('.animate-fadein-up');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
}

// Enhanced scroll-in animation for all animation classes
function handleAllSectionAnimations() {
  const selectors = [
    '.animate-fadein',
    '.animate-slidein-left',
    '.animate-slidein-right',
    '.animate-scalein',
    '.stagger-children'
  ];
  const elements = document.querySelectorAll(selectors.join(','));
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('stagger-children')) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
}

// Skills tab switching and progress bar animation
function handleSkillsTabs() {
  const tabs = document.querySelectorAll('.skills-tab');
  const contents = document.querySelectorAll('.skills-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      contents.forEach(c => c.style.display = 'none');
      const show = document.querySelector(`.skills-content.${tab.dataset.tab}-skills`);
      if (show) show.style.display = '';
    });
  });
}
function animateProgressBars() {
  const skillsSections = document.querySelectorAll('.skills-content');
  skillsSections.forEach(section => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.querySelectorAll('.progress-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => { bar.style.width = width; }, 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(section);
  });
}
// Typewriter animation for hero subtitle
const typewriterTexts = [
  'Computer science engineer',
  'Web developer',
  'UI/UX designer',
  'Problem solver'
];
let typewriterIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');
function typewriterTick() {
  if (!typewriterElement) return;
  const currentText = typewriterTexts[typewriterIndex];
  if (isDeleting) {
    charIndex--;
    typewriterElement.textContent = currentText.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
      setTimeout(typewriterTick, 400);
    } else {
      setTimeout(typewriterTick, 40);
    }
  } else {
    charIndex++;
    typewriterElement.textContent = currentText.substring(0, charIndex);
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typewriterTick, 1200);
    } else {
      setTimeout(typewriterTick, 80);
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  handleAllSectionAnimations();
  handleScrollAnimations();
  handleFadeInUpAnimations();
  handleSkillsTabs();
  animateProgressBars();
  typewriterTick();
}); 