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

document.querySelectorAll('.video-thumb').forEach(video => {
    video.addEventListener('click', function () {
        const modal = document.getElementById('videoModal');
        const fullVideo = document.getElementById('fullVideo');

        fullVideo.src = video.src;
        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.video-wrapper').forEach(wrapper => {
    const video = wrapper.querySelector('video');

    wrapper.addEventListener('click', function () {
        const modal = document.getElementById('videoModal');
        const fullVideo = document.getElementById('fullVideo');

        fullVideo.src = video.src;
        modal.style.display = 'flex';
    });
});

document.querySelector('.close-btn').addEventListener('click', function () {
    const modal = document.getElementById('videoModal');
    const fullVideo = document.getElementById('fullVideo');

    modal.style.display = 'none';
    fullVideo.pause();
    fullVideo.src = ''; // Reset source to stop playback
});
