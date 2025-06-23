document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show button when user scrolls down 200px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Dropdown toggle for mobile
    const servicesToggle = document.getElementById("servicesToggle");
    const servicesDropdown = document.getElementById("servicesDropdown");

    if (servicesToggle && servicesDropdown) {
        servicesToggle.addEventListener("click", function (e) {
            e.preventDefault();
            servicesDropdown.classList.toggle("show-dropdown");
        });
    }
});
