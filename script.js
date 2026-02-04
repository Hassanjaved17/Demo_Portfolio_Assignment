/* 
====================================================
        Developed & Animated by Hassan Javed
====================================================
*/

// OPTIMIZED: Smooth scroll with throttle
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const target = document.querySelector(targetID);

    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else if (targetID === '#top' || targetID === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});


new Swiper(".clientsSwiper", {
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
  spaceBetween: 10,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  console.log('Form submitted:', data);

  alert('Thank you! Your message has been sent.');

  contactForm.reset();
});

// Add animation on input focus
const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
  input.addEventListener('focus', function () {
    this.parentElement.classList.add('focused');
  });

  input.addEventListener('blur', function () {
    this.parentElement.classList.remove('focused');
  });
});

// ======SCROLL SPY EFFECT - Navbar Active Link======

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar nav ul li a');

// OPTIMIZED: Cache section positions
let sectionPositions = [];

function cacheSectionPositions() {
  sectionPositions = Array.from(sections).map(section => ({
    id: section.getAttribute('id'),
    top: section.offsetTop,
    height: section.clientHeight
  }));
}

// Update cache on load and resize
cacheSectionPositions();
window.addEventListener('resize', () => {
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(cacheSectionPositions, 200);
});

// OPTIMIZED: Throttled scroll spy
let spyTimeout;
function updateActiveLink() {
  if (spyTimeout) return;

  spyTimeout = setTimeout(() => {
    let current = '';
    const scrollPos = window.pageYOffset;

    sectionPositions.forEach(section => {
      if (scrollPos >= section.top - 150) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });

    spyTimeout = null;
  }, 100);
}

window.addEventListener('scroll', updateActiveLink, { passive: true });

// Smooth scroll on nav link click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ==========================================
// TESTIMONIAL SWIPER SLIDER
// ==========================================

const testimonialSwiper = new Swiper('.testimonialSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 800,
  effect: 'slide',
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  
    const icon = hamburger.querySelector('i');
    if (nav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when clicking a link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove('active');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

//  counter animation on scroll into view on hero statistics section
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // total duration in ms
      const stepTime = Math.max(Math.floor(duration / target), 20); // minimum 20ms

      let current = 0;

      const updateCount = () => {
        current++;
        counter.innerText = current;
        if (current < target) {
          setTimeout(updateCount, stepTime);
        }
      };

      updateCount();
      observer.unobserve(counter);
    }
  }, { threshold: 0.5 });

  observer.observe(counter);
});

// ==========================================
//         SCROLL TO TOP BUTTON
// ==========================================
const scrollBtn = document.querySelector('.scroll-top');

if (scrollBtn) {
  let scrollTicking = false;

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 300) {
          scrollBtn.classList.add('visible');
        } else {
          scrollBtn.classList.remove('visible');
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  });
}
// end of script