// Menu burger
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const allElementsMiniNav = document.querySelectorAll(".menu a");

function handleMiniNav() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
allElementsMiniNav.forEach((element) => {
  element.addEventListener("click", handleMiniNav);
});
burger.addEventListener("click", handleMiniNav);

// Zaciemnianie nawigacji 
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("background-for-menu");
  } else {
    nav.classList.remove("background-for-menu");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // Wybrane wszystkie selektory, które mają pojawiać się przy scrollu
  const elements = document.querySelectorAll(
    ".card, .s-card, .about-me-first-part, .about-me-second-part"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 } // Możesz ustawić własne wartości threshold, np. 0.1, 0.2 itd.
  );

  elements.forEach((el) => observer.observe(el));
});
