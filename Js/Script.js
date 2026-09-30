/* =========================================
   SHEILA'S BEAUTY HUB
   MAIN JAVASCRIPT
========================================= */

/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}


/* =========================================
   HEADER ON SCROLL
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* =========================================
   FADE-UP ANIMATION
========================================= */

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                fadeObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});


/* =========================================
   BOOKING FORM
========================================= */

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = bookingForm.querySelector('input[name="name"]')?.value;
        const service = bookingForm.querySelector('select[name="service"]')?.value;

        if (!name || !service) {
            alert("Please fill in your name and select a service.");
            return;
        }

        alert(
            `Thank you, ${name}! 💕\n\n` +
            `Your ${service} booking request has been received.\n\n` +
            `Sheila's Beauty Hub will contact you shortly.`
        );

        bookingForm.reset();
    });
}


/* =========================================
   CURRENT YEAR
========================================= */

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* =========================================
   SERVICE CARD INTERACTION
========================================= */

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


/* =========================================
   BOOKING SERVICE SELECTION
========================================= */

const serviceSelect = document.querySelector(
    '.booking-form select[name="service"]'
);

const serviceCardsLinks = document.querySelectorAll(
    ".service-card a"
);

serviceCardsLinks.forEach(link => {

    link.addEventListener("click", event => {

        const href = link.getAttribute("href");

        if (href && href.startsWith("#")) {
            const bookingSection = document.querySelector(href);

            if (bookingSection) {
                event.preventDefault();

                bookingSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });

});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.className = "back-to-top";

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "45px";
backToTop.style.height = "45px";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#171717";
backToTop.style.color = "#ffffff";
backToTop.style.fontSize = "20px";
backToTop.style.zIndex = "999";
backToTop.style.display = "none";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});