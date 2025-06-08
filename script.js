
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-on-scroll");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });

  faders.forEach(fader => observer.observe(fader));
});

const navbar = document.querySelector('#navbar');
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
const sections = document.querySelectorAll(".scroll-section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});
if ('IntersectionObserver' in window) {

} else {
  
  faders.forEach(fader => fader.classList.add('visible'));
}

window.onscroll = function() {scrollFunction()};

