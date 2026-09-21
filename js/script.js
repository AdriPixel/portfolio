// Navigation
const menuBtn = document.getElementById("menu-icon");
const nav = document.getElementById('primary-nav');

menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Lightbox
const galleryImages = document.querySelectorAll(".photo-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.querySelector(".lightbox-close");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightbox.style.display = "flex";  
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Halloween Countdown
const countdownTimer = document.getElementById("countdown-timer");
const halloween = new Date("2026-10-31T00:00:00");

function updateCountdown() {
    const now = new Date();
    const difference = halloween - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    countdownTimer.textContent = `${days} Tage · ${hours} Stunden · ${minutes} Minuten · ${seconds} Sekunden`;
}
updateCountdown();
setInterval(updateCountdown, 1000);