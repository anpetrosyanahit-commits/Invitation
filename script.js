// 1. Countdown Timer
// CHANGE THIS DATE to your actual wedding date and time!
const weddingDate = new Date("Nov 15, 2026 16:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<h2>We are married!</h2>";
        return;
    }

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// 2. Music Toggle
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");
let isPlaying = false;

musicBtn.addEventListener("click", function() {
    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "🎵";
        musicBtn.classList.remove("playing");
    } else {
        music.play();
        musicBtn.innerText = "⏸️";
        musicBtn.classList.add("playing");
    }
    isPlaying = !isPlaying;
});

// 3. Scroll Fade-In Animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.15 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
