// Developed by Hassan Javed

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// NAVBAR ANIMATION
// ==========================================
gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// ==========================================
// HERO SECTION ANIMATIONS
// ==========================================
const heroTimeline = gsap.timeline({ delay: 0.3 });

heroTimeline
  .from(".hero-text h1:first-child", {
    x: -80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })
  .from(".hero-text h1:nth-child(2)", {
    x: -80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.5")
  .from(".hero-text p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4")
  .from(".hero-text .btn1", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)"
  }, "-=0.3")
  .from(".stat", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.2");

// Hero Image Animation
gsap.from(".hero-img img", {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.5
});

// ==========================================
// ABOUT SECTION ANIMATIONS
// ==========================================
gsap.from(".about-img img", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".about-text h1", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".about-text p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  delay: 0.2
});

gsap.from(".about-text .btn1, .about-text .btn2", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  scale: 0,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "back.out(1.7)",
  delay: 0.4
});

// ==========================================
// PROCESS SECTION ANIMATIONS
// ==========================================
gsap.from(".process-section h1", {
  scrollTrigger: {
    trigger: ".process-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".process-section p", {
  scrollTrigger: {
    trigger: ".process-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
  delay: 0.2
});

gsap.from(".card-pro", {
  scrollTrigger: {
    trigger: ".cards-process",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
  delay: 0.3
});

// ==========================================
// PORTFOLIO SECTION ANIMATIONS
// ==========================================
gsap.from(".portfolio-section h1", {
  scrollTrigger: {
    trigger: ".portfolio-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".portfolio-section > .container > p", {
  scrollTrigger: {
    trigger: ".portfolio-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out",
  delay: 0.2
});

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card-container",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  scale: 0.85,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
  delay: 0.3
});

gsap.from(".more-projects", {
  scrollTrigger: {
    trigger: ".card-container",
    start: "bottom 60%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)"
});

// ==========================================
// CTA BANNER ANIMATION
// ==========================================
gsap.from(".cta-section h1", {
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  scale: 0.9,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".cta-section p", {
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.2
});

gsap.from(".cta-btn", {
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  scale: 0,
  opacity: 0,
  duration: 0.6,
  ease: "back.out(1.7)",
  delay: 0.4
});

// ==========================================
// BLOG SECTION ANIMATIONS
// ==========================================
gsap.from(".blog-content h1", {
  scrollTrigger: {
    trigger: ".blog-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".blog-content p", {
  scrollTrigger: {
    trigger: ".blog-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.2
});

gsap.from(".blog-card", {
  scrollTrigger: {
    trigger: ".blog-cards",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12,
  ease: "power3.out",
  delay: 0.3
});

// ==========================================
// SERVICES SECTION ANIMATIONS
// ==========================================
gsap.from(".services-left h1", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  x: -80,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".services-left p", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  x: -50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
  delay: 0.2
});

gsap.from(".services-left .btn", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  scale: 0,
  opacity: 0,
  duration: 0.6,
  ease: "back.out(1.7)",
  delay: 0.4
});

gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".services-right",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  x: 80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
  delay: 0.3
});

// ==========================================
// FOOTER ANIMATIONS
// ==========================================
gsap.from(".footer .logo", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".footer-nav li", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.08,
  ease: "power2.out",
  delay: 0.2
});

gsap.from(".footer-right", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.4
});

gsap.from(".footer-bottom", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.5
});

// ==========================================
// SCROLL TO TOP BUTTON ANIMATION
// ==========================================
gsap.from(".scroll-top", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1.7)",
  delay: 2
});

// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const target = document.querySelector(targetID);

    if (target) {
      const targetPosition = target.offsetTop - 80;
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

const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    gsap.to(scrollBtn, { scale: 1, opacity: 1, duration: 0.3 });
  } else {
    gsap.to(scrollBtn, { scale: 0, opacity: 0, duration: 0.3 });
  }
});


// ==========================================
// HOVER ANIMATIONS (Optional Enhancement)
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


/* 
====================================================
Developed & Animated by Hassan Javed
----------------------------------------------------
This project uses GSAP (GreenSock Animation Platform)
to enhance user experience with smooth, scroll-based
and hover-triggered animations.

Note Sir Ibrahim:
I already knew JavaScript and GSAP before this course,
so I applied them here to make my project more dynamic.
====================================================
*/
