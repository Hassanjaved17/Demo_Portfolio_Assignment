// === NAVBAR ===
gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from("nav ul li", {
  y: -30,
  opacity: 0,
  stagger: 0.08,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from(".btn", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
  ease: "back.out(1.7)"
});

// === HERO SECTION ===
const heroTl = gsap.timeline();
heroTl
  .from(".hero-text h1", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  })
  .from(".hero-text p", {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, "-=0.3")
  .from(".hero-text .btn1", {
    scale: 0.8,
    opacity: 0,
    duration: 0.6
  }, "-=0.2")
  .from(".hero-img img", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.4");

// === UNIVERSAL SECTION FADE-IN ===
gsap.utils.toArray("section").forEach((section, i) => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

// === CARDS (Portfolio, Blog, Services) ===
gsap.utils.toArray(".card, .blog-card, .service-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    duration: 0.9,
    delay: i * 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });
});

// === ABOUT IMAGE + TEXT ===
gsap.from(".about-img img", {
  x: -80,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  }
});

gsap.from(".about-text", {
  x: 80,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  }
});

// === CTA SECTION ===
gsap.from(".cta-content h1, .cta-content p, .cta-btn", {
  opacity: 0,
  y: 60,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

// === FOOTER ===
gsap.from(".footer-container, .footer-bottom", {
  opacity: 0,
  y: 60,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

// === SCROLL TO TOP BUTTON ===
gsap.from(".scroll-top", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 95%",
    toggleActions: "play none none reverse"
  }
});

// === BUTTON HOVER EFFECT ===
document.querySelectorAll(".btn, .btn1, .btn2, .btn3, .cta-btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});

// === DESIGN & DEVELOPED BY HASSAN JAVED ===
console.log("Design & Developed by Hassan Javed");