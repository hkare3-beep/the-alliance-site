// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const mobilePanel = document.querySelector('.mobile-panel');

if (navToggle) {
  navToggle.addEventListener('click', function() {
    mobilePanel.classList.toggle('active');
  });
}

// Close mobile menu when a link is clicked
if (mobilePanel) {
  const mobileLinks = mobilePanel.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobilePanel.classList.remove('active');
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

console.log('The Alliance website loaded successfully!');
