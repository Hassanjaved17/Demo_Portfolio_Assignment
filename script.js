/* 
====================================================
        Developed & Animated by Hassan Javed
====================================================
*/
gsap.registerPlugin(ScrollTrigger);

/* =========================
   GLOBAL DEFAULTS
========================= */
const scrollDefaults = {
  start: "top 75%",
  toggleActions: "play none none none"
};

/* =========================
   NAVBAR
========================= */
function initNavbar() {
  gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
}

/* =========================
   HERO
========================= */
function initHero() {
  const tl = gsap.timeline({ delay: 0.3 });

  tl.from(".hero-text h1", {
    x: -80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  })
    .from(".hero-text p", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from(".hero-text .btn1", {
      scale: 0,
      opacity: 0,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .from(".stat", {
      y: 40,
      opacity: 0,
      stagger: 0.15
    }, "-=0.3");

  gsap.from(".hero-img img", {
    scale: 0.85,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.4
  });
}

/* =========================
   ABOUT
========================= */
function initAbout() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      ...scrollDefaults
    }
  });

  tl.from(".about-img img", {
    x: -80,
    opacity: 0,
    duration: 0.8
  })
    .from(".about-text > *", {
      y: 30,
      opacity: 0,
      stagger: 0.15
    }, "-=0.4");
}

/* =========================
   PROCESS
========================= */
function initProcess() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".process-section",
      ...scrollDefaults
    }
  });

  tl.from(".process-section h1, .process-section p", {
    y: 30,
    opacity: 0,
    stagger: 0.15
  })
    .from(".card-pro", {
      y: 60,
      opacity: 0,
      stagger: 0.2
    }, "-=0.3");
}

/* =========================
   PORTFOLIO
========================= */
function initPortfolio() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".portfolio-section",
      ...scrollDefaults
    }
  });

  tl.from(".portfolio-section h1, .portfolio-section p", {
    y: 30,
    opacity: 0,
    stagger: 0.15
  })
    .from(".card", {
      scale: 0.9,
      opacity: 0,
      stagger: 0.15
    }, "-=0.2")
    .from(".more-projects", {
      y: 30,
      opacity: 0
    });
}

/* =========================
   CTA
========================= */
function initCTA() {
  gsap.from(".cta-content > *", {
    scrollTrigger: {
      trigger: ".cta-section",
      ...scrollDefaults
    },
    y: 30,
    opacity: 0,
    stagger: 0.2
  });
}

/* =========================
   BLOG
========================= */
function initBlog() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".blog-section",
      ...scrollDefaults
    }
  });

  tl.from(".blog-content > *", {
    y: 30,
    opacity: 0,
    stagger: 0.15
  })
    .from(".blog-card", {
      y: 50,
      opacity: 0,
      stagger: 0.15
    }, "-=0.3");
}

/* =========================
   SERVICES
========================= */
function initServices() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      ...scrollDefaults
    }
  });

  tl.from(".services-left > *", {
    x: -40,
    opacity: 0,
    stagger: 0.15
  })
    .from(".service-card", {
      x: 40,
      opacity: 0,
      stagger: 0.2
    }, "-=0.3");
}

/* =========================
   FOOTER
========================= */
function initFooter() {
  gsap.from(".footer > *", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 85%"
    },
    y: 30,
    opacity: 0,
    stagger: 0.1
  });
}

/* =========================
   INIT ALL
========================= */
window.addEventListener("load", () => {
  initNavbar();
  initHero();
  initAbout();
  initProcess();
  initPortfolio();
  initCTA();
  initBlog();
  initServices();
  initFooter();
});

gsap.from(".clients .sec-text h1", {
  scrollTrigger: {
    trigger: ".clients",
    start: "top 75%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".clients .sec-text p", {
  scrollTrigger: {
    trigger: ".clients",
    start: "top 75%",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.2
});

gsap.from(".clients .swiper-slide", {
  scrollTrigger: {
    trigger: ".clients",
    start: "top 70%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  ease: "power2.out"
});


gsap.from(".testimonial-section h1", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 75%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8
});

gsap.from(".testimonial-section .subtitle", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 75%",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.2
});

gsap.from(".testimonial-card", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 70%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});


gsap.from(".contact-left h1", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 75%",
  },
  x: -60,
  opacity: 0,
  duration: 0.8
});

gsap.from(".contact-left p, .contact-info .info-item", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 75%",
  },
  y: 30,
  opacity: 0,
  stagger: 0.15,
  duration: 0.6,
  delay: 0.2
});

gsap.from(".social-links a", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 70%",
  },
  scale: 0,
  opacity: 0,
  // stagger: ,
  duration: 0.5,
  ease: "back.out(1.7)"
});

gsap.from(".contact-right", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 75%",
  },
  x: 60,
  opacity: 0,
  duration: 0.8
});

gsap.from(".contact-right input, .contact-right button", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 70%",
  },
  y: 20,
  opacity: 0,
  // stagger: 0.1,
  duration: 0.4
});


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

// OPTIMIZED: Throttled scroll event
const scrollBtn = document.querySelector('.scroll-top');
let scrollTimeout;

window.addEventListener('scroll', () => {
  if (scrollTimeout) return;

  scrollTimeout = setTimeout(() => {
    if (window.pageYOffset > 400) {
      gsap.to(scrollBtn, { scale: 1, opacity: 1, duration: 0.3 });
    } else {
      gsap.to(scrollBtn, { scale: 0, opacity: 0, duration: 0.3 });
    }
    scrollTimeout = null;
  }, 100);
}, { passive: true });

// ==========================================
//            HOVER ANIMATIONS 
// ==========================================

// Card hover effects
document.querySelectorAll('.card, .blog-card, .service-card, .card-pro').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -10,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

// Button hover pulse effect
document.querySelectorAll('.btn, .btn1, .btn2, .btn3, .cta-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    gsap.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
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

// Smooth scroll for Contact button in navbar
const contactBtn = document.querySelector('.navbar .btn');
if (contactBtn) {
  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

updateActiveLink();

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

// end of script