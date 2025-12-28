// Cache wszystkich referencji DOM (jednorazowe zapytania)
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const span = document.querySelector(".year");
const allElementsMiniNav = document.querySelectorAll(".menu a");

// Ustawienie roku
span.textContent = new Date().getFullYear();

// Funkcja toggle menu
function handleMiniNav() {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
}

// Event delegation dla linków menu
menu.addEventListener("click", (e) => {
	if (e.target.matches("a")) {
		handleMiniNav();
	}
});

// Burger menu
burger.addEventListener("click", handleMiniNav);

// scroll z requestAnimationFrame + passive listener
let ticking = false;
function updateNavBackground() {
	if (window.scrollY > 20) {
		nav.classList.add("background-for-menu");
	} else {
		nav.classList.remove("background-for-menu");
	}
	ticking = false;
}

function handleScroll() {
	if (!ticking) {
		requestAnimationFrame(updateNavBackground);
		ticking = true;
	}
}
window.addEventListener("scroll", handleScroll, { passive: true });

// IntersectionObserver
const elements = document.querySelectorAll(
	".card, .s-card, .about-me-first-part, .about-me-second-part, .contact-img, .contact-text"
);

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				observer.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 0.2,
		rootMargin: "0px 0px -10% 0px",
	}
);

// Obserwuj elementy po załadowaniu DOM
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", () => {
		elements.forEach((el) => observer.observe(el));
	});
} else {
	elements.forEach((el) => observer.observe(el));
}
