/* 
====================================================
        Developed & Animated by Hassan Javed
====================================================
*/


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ==========================================
//            NAVBAR ANIMATION
// ==========================================
gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// ==========================================
//          HERO SECTION ANIMATIONS
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
//         ABOUT SECTION ANIMATIONS
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
//        PROCESS SECTION ANIMATIONS
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
//        PORTFOLIO SECTION ANIMATIONS
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
//            CTA BANNER ANIMATION
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
//          BLOG SECTION ANIMATIONS
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
//        SERVICES SECTION ANIMATIONS
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
//            FOOTER ANIMATIONS
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

// // // ==========================================
// // //      SCROLL TO TOP BUTTON ANIMATION
// // // ==========================================
gsap.from(".scroll-top", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1.7)",
  delay: 2
});

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


// // // ==========================================
// // //            HOVER ANIMATIONS 
// // // ==========================================

// // // Card hover effects
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

// // // Button hover pulse effect
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

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  console.log('Form submitted:', data);
  
  // Show success message
  alert('Thank you! Your message has been sent.');
  
  // Reset form
  contactForm.reset();
});

// Add animation on input focus
const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
  });
});


// ======SCROLL SPY EFFECT - Navbar Active Link======

// Get all sections and nav links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar nav ul li a');

// Function to update active link
function updateActiveLink() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // Check if section is in viewport (with offset for navbar height)
    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });
  
  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    // Add active class to current section's link
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
}

// Listen to scroll event
window.addEventListener('scroll', updateActiveLink);

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
contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Call once on page load to set initial active state
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


const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
