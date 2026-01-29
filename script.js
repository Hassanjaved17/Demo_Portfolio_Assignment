/* 
====================================================
        Developed & Animated by Hassan Javed
====================================================
*/

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/* =========================
   UTILITY FUNCTIONS
========================= */
const createScrollTrigger = (trigger, start = "top 80%") => ({
  scrollTrigger: {
    trigger,
    start,
    toggleActions: "play none none none",
  }
});

/* =========================
   NAVBAR ANIMATION
========================= */
function initNavbar() {
  gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Navbar background on scroll
  gsap.to(".navbar", {
    scrollTrigger: {
      trigger: "body",
      start: "100px top",
      toggleActions: "play none none reverse",
    },
    backgroundColor: "rgba(240, 241, 243, 0.98)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    duration: 0.3
  });
}

/* =========================
   HERO SECTION
========================= */
function initHero() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-text h1", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  })
    .from(".hero-text > p", {
      y: 40,
      opacity: 0,
      duration: 0.8
    }, "-=0.5")
    .from(".hero-text .btn1", {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(2)"
    }, "-=0.4")
    .from(".hero-stats .stat", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    }, "-=0.5");

  gsap.from(".hero-img img", {
    scale: 0.8,
    opacity: 0,
    rotation: -5,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  });

  // Floating animation for hero image
  gsap.to(".hero-img img", {
    y: -20,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 1.5
  });
}

/* =========================
   ABOUT SECTION
========================= */
function initAbout() {
  const tl = gsap.timeline(createScrollTrigger(".about"));

  tl.from(".about-img img", {
    x: -100,
    opacity: 0,
    rotation: -3,
    duration: 1,
    ease: "power3.out"
  })
    .from(".about-text h1", {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, "-=0.6")
    .from(".about-text p", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6
    }, "-=0.4")
    .from(".about-text .btn1, .about-text .btn2", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    }, "-=0.3");
}

/* =========================
   PROCESS SECTION
========================= */
function initProcess() {
  const tl = gsap.timeline(createScrollTrigger(".process-section"));

  tl.from(".process-section h1", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.5)"
  })
    .from(".process-section > .container > p", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6
    }, "-=0.4")
    .from(".card-pro", {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3");
}

/* =========================
   PORTFOLIO SECTION
========================= */
function initPortfolio() {
  const tl = gsap.timeline(createScrollTrigger(".portfolio-section"));

  tl.from(".portfolio-section h1", {
    y: 50,
    opacity: 0,
    duration: 0.8
  })
    .from(".portfolio-section > .container > p", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6
    }, "-=0.4")
    .from(".card", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2")
    .from(".more-projects", {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.5)"
    }, "-=0.3");
}

/* =========================
   CTA BANNER
========================= */
function initCTA() {
  const tl = gsap.timeline(createScrollTrigger(".cta-section"));

  tl.from(".cta-content h1", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })
    .from(".cta-content p", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from(".cta-btn", {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(2)"
    }, "-=0.2");
}

/* =========================
   BLOG SECTION
========================= */
function initBlog() {
  const tl = gsap.timeline(createScrollTrigger(".blog-section"));

  tl.from(".blog-content h1", {
    y: 50,
    opacity: 0,
    duration: 0.8
  })
    .from(".blog-content p", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from(".blog-card", {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2");
}

/* =========================
   SERVICES SECTION
========================= */
function initServices() {
  const tl = gsap.timeline(createScrollTrigger(".services"));

  tl.from(".services-left h1", {
    x: -80,
    opacity: 0,
    duration: 0.8
  })
    .from(".services-left p", {
      x: -60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    }, "-=0.4")
    .from(".services-left .btn", {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(2)"
    }, "-=0.2")
    .from(".service-card", {
      x: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");
}

/* =========================
   CLIENTS SECTION
========================= */
function initClients() {
  const tl = gsap.timeline(createScrollTrigger(".clients"));

  tl.from(".clients .sec-text h1", {
    y: 50,
    opacity: 0,
    duration: 0.8
  })
    .from(".clients .sec-text p", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from(".clientsSwiper .swiper-slide", {
      scale: 0.7,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.5)"
    }, "-=0.2");
}

/* =========================
   TESTIMONIALS SECTION
========================= */
function initTestimonials() {
  const tl = gsap.timeline(createScrollTrigger(".testimonial-section"));

  tl.from(".testimonial-section h1", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.5)"
  })
    .from(".testimonial-section .subtitle", {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from(".testimonialSwiper", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2");
}

/* =========================
   CONTACT SECTION
========================= */
function initContact() {
  const tl = gsap.timeline(createScrollTrigger(".contact-section", "top 75%"));

  // Left side
  tl.from(".contact-left h1", {
    x: -80,
    opacity: 0,
    duration: 0.8
  })
    .from(".contact-left > p", {
      x: -60,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from(".info-item", {
      x: -50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    }, "-=0.2")
    .from(".social-links a", {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(2)"
    }, "-=0.3");

  // Right side
  const tl2 = gsap.timeline(createScrollTrigger(".contact-right", "top 75%"));

  tl2.from(".contact-right .form-subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.6
  })
    .from(".contact-right input", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5
    }, "-=0.3")
    .from(".contact-right .row-inputs", {
      y: 40,
      opacity: 0,
      duration: 0.5
    }, "-=0.3")
    .from(".contact-right .submit-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.5)"
    }, "-=0.2");
}

/* =========================
   FOOTER
========================= */
function initFooter() {
  const tl = gsap.timeline(createScrollTrigger(".footer", "top 90%"));

  tl.from(".footer-left .logo", {
    scale: 0.8,
    opacity: 0,
    duration: 0.6
  })
    .from(".footer-nav li", {
      y: 20,
      opacity: 0,
      stagger: 0.08,
      duration: 0.4
    }, "-=0.3")
    .from(".footer-right", {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.2")
    .from(".footer-bottom", {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.2")
    .from(".scroll-top", {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.5)"
    }, "-=0.2");
}

/* =========================
   SCROLL TO TOP BUTTON
========================= */
function initScrollTop() {
  const scrollBtn = document.querySelector('.scroll-top');

  if (!scrollBtn) return;

  gsap.set(scrollBtn, { scale: 0, opacity: 0 });

  ScrollTrigger.create({
    start: "500px top",
    end: "max",
    onEnter: () => gsap.to(scrollBtn, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.5)"
    }),
    onLeaveBack: () => gsap.to(scrollBtn, {
      scale: 0,
      opacity: 0,
      duration: 0.3
    })
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* =========================
   PARALLAX EFFECTS
========================= */
function initParallax() {
  // Only apply parallax on desktop
  if (window.innerWidth > 768) {
    gsap.to(".hero-img img", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      },
      y: 100,
      ease: "none"
    });

    gsap.to(".about-img img", {
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: -50,
      ease: "none"
    });
  }
}

/* =========================
   HOVER ANIMATIONS
========================= */
function initHoverEffects() {
  // Card hover effects
  const cards = document.querySelectorAll('.card, .blog-card, .service-card, .card-pro');
  cards.forEach(card => {
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

  // Button hover effects
  const buttons = document.querySelectorAll('.btn, .btn1, .btn2, .btn3, .cta-btn, .submit-btn');
  buttons.forEach(btn => {
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
}

/* =========================
   SCROLL SPY - NAVBAR ACTIVE LINK
========================= */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar nav ul li a');

  let sectionPositions = [];

  function cacheSectionPositions() {
    sectionPositions = Array.from(sections).map(section => ({
      id: section.getAttribute('id'),
      top: section.offsetTop,
      height: section.clientHeight
    }));
  }

  cacheSectionPositions();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(cacheSectionPositions, 200);
  });

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
  updateActiveLink();
}

/* =========================
   SMOOTH SCROLL FOR NAVIGATION
========================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#' || targetId === '#top') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* =========================
   HAMBURGER MENU
========================= */
function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');

  if (!hamburger || !nav) return;

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

/* =========================
   CONTACT FORM
========================= */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');

  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);

    // Success animation
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
      }
    });
  });

  // Input focus animations
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      gsap.to(this, {
        scale: 1.02,
        duration: 0.2
      });
    });

    input.addEventListener('blur', function () {
      gsap.to(this, {
        scale: 1,
        duration: 0.2
      });
    });
  });
}

/* =========================
   SWIPER SLIDERS
========================= */
function initSwipers() {
  // Clients Swiper
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

  // Testimonial Swiper
  new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 800,
    effect: 'slide',
  });
}

/* =========================
   INITIALIZE ALL
========================= */
window.addEventListener("DOMContentLoaded", () => {
  // Initialize all animations and features
  initNavbar();
  initHero();
  initAbout();
  initProcess();
  initPortfolio();
  initCTA();
  initBlog();
  initServices();
  initClients();
  initTestimonials();
  initContact();
  initFooter();
  initScrollTop();
  initParallax();
  initHoverEffects();
  initScrollSpy();
  initSmoothScroll();
  initHamburgerMenu();
  initContactForm();
  initSwipers();

  // Refresh ScrollTrigger after everything is loaded
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

// End of script