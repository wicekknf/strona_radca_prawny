const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav")

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
});

// Kod odpowiedzialny za pojawianie się kart przy scrollu
document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".card");

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	cards.forEach((card) => {
		observer.observe(card);
	});
});

// kod dla zaciemniania nawigacji

window.addEventListener("scroll", () => {
	if(window.scrollY > 20) {
		nav.classList.add("background-for-menu")
	} else {
		nav.classList.remove("background-for-menu")
	}
})

// kod dla animacji ofert przy scrollu

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".s-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});


// pojawianie się sekcji o mnie
document.addEventListener("DOMContentLoaded", () => {
    const aboutParts = document.querySelectorAll(".about-me-first-part, .about-me-second-part");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    aboutParts.forEach(part => observer.observe(part));
});
