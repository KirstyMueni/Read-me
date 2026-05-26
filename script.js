// ============================================
// KIRSTY MUENI PREMIUM PORTFOLIO - JAVASCRIPT
// ============================================

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeToggle();

themeToggle.addEventListener('click', () => {
  const theme = htmlElement.getAttribute('data-theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggle();
});

function updateThemeToggle() {
  const theme = htmlElement.getAttribute('data-theme');
  const icon = themeToggle.querySelector('.toggle-icon');
  icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active nav link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Project Category Tabs
const projectCategoryBtns = document.querySelectorAll('.project-category-btn');
const categoryContents = document.querySelectorAll('.category-content');

projectCategoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    
    // Remove active class from all buttons and contents
    projectCategoryBtns.forEach(b => b.classList.remove('active'));
    categoryContents.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    btn.classList.add('active');
    document.getElementById(category).classList.add('active');
    
    // Reset project details to first one
    const projectBtns = document.getElementById(category).querySelectorAll('.project-btn');
    const projectDetails = document.getElementById(category).querySelectorAll('.project-detail');
    
    projectBtns.forEach(b => b.classList.remove('active'));
    projectDetails.forEach(d => d.classList.remove('active'));
    
    if (projectBtns.length > 0) {
      projectBtns[0].classList.add('active');
      projectDetails[0].classList.add('active');
    }
  });
});

// Project Detail Buttons
const projectBtns = document.querySelectorAll('.project-btn');

projectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const project = btn.getAttribute('data-project');
    const container = btn.closest('.project-buttons-container');
    const detailsContainer = container.nextElementSibling;
    
    // Remove active class from all buttons in this container
    container.querySelectorAll('.project-btn').forEach(b => b.classList.remove('active'));
    
    // Remove active class from all details in this container
    detailsContainer.querySelectorAll('.project-detail').forEach(d => d.classList.remove('active'));
    
    // Add active class to clicked button and corresponding detail
    btn.classList.add('active');
    detailsContainer.querySelector(`[data-project="${project}"]`).classList.add('active');
  });
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(section);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Create mailto link
    const mailtoLink = `mailto:kirstymueni@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
  });
}

// Add ripple effect to buttons
document.querySelectorAll('button, .btn-main, .nav-card').forEach(element => {
  element.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Navbar active link styling
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.style.color = '');
    link.style.color = 'var(--accent)';
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set first project category as active
  if (projectCategoryBtns.length > 0) {
    projectCategoryBtns[0].classList.add('active');
  }
  
  // Set first category content as active
  if (categoryContents.length > 0) {
    categoryContents[0].classList.add('active');
  }
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  parallaxElements.forEach(element => {
    const speed = element.getAttribute('data-parallax') || 0.5;
    element.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});

// Mobile menu toggle (if needed in future)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

console.log('Premium Portfolio Loaded Successfully! 🚀');
