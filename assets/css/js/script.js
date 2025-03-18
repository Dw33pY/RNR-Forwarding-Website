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
        {
            threshold: 0.1,
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });

    // Navbar Toggler for Mobile Menu
    const toggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelector(".nav-links");

    toggler.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
