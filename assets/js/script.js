document.addEventListener("DOMContentLoaded", () => {
    // Scroll Fade-in Logic
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach(element => observer.observe(element));

    // Navbar Toggler for Mobile Menu
    const toggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    if (toggler && navLinks) {
        toggler.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent immediate closing
            const isActive = navLinks.classList.toggle("active");
            toggler.setAttribute("aria-expanded", isActive);
            body.classList.toggle("no-scroll", isActive);
        });

        // Prevent closing when clicking inside the menu
        navLinks.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !toggler.contains(event.target)) {
                navLinks.classList.remove("active");
                toggler.setAttribute("aria-expanded", "false");
                body.classList.remove("no-scroll");
            }
        });
    }
});
