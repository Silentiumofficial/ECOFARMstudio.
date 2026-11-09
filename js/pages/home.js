document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // HERO VIDEO
    // =================================

    const heroVideo = document.querySelector(".hero-video");

    if (heroVideo) {

        heroVideo.muted = true;

        const playVideo = heroVideo.play();

        if (playVideo !== undefined) {
            playVideo.catch(function () {
                console.log("Hero video belum dapat diputar.");
            });
        }

    }

    // =================================
    // SMOOTH SCROLL
    // =================================

    const scrollLinks = document.querySelectorAll(
        '.scroll-indicator[href^="#"]'
    );

    scrollLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});