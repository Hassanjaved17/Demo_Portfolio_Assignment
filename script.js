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

// Swiper Slider
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

function updateActiveLink() {
  const scrollPos = window.pageYOffset + 100; // 100px offset for navbar

  let current = '';
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top + window.scrollY;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
window.addEventListener('load', updateActiveLink);
window.addEventListener('resize', updateActiveLink);


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

window.addEventListener('load', () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add('visible');
  }
});



// ==========================================
//    MOBILE INITIALIZATION FIX
// ==========================================

// Force initial states on page load - MOBILE FIX
function initializeMobileStates() {
  // Cache section positions
 

  // Update active link
  updateActiveLink();

  // Check scroll button visibility
  if (scrollBtn) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }

  // Force navbar state update
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.transform = 'translateY(0)';
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeMobileStates);
} else {
  initializeMobileStates();
}

// Re-initialize on page show (for back/forward navigation)
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    initializeMobileStates();
  }
});

// Mobile touch scroll fix
let touchStartY = 0;
document.addEventListener('touchstart', function (e) {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', function () {
  // Force scroll event on mobile
  if (scrollBtn) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }
}, { passive: true });
// end of script