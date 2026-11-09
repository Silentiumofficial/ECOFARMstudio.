
/* =========================================
   ECOFORM STUDIO - NAVBAR
   SCROLL EFFECT & MOBILE MENU
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    const navbarLinks = document.querySelectorAll(".navbar-menu a");

    // NAVBAR SCROLL EFFECT
    function handleNavbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    // JALANKAN SAAT SCROLL
    window.addEventListener("scroll", handleNavbarScroll, {
        passive: true
    });

    // CEK POSISI SAAT HALAMAN DIBUKA
    handleNavbarScroll();


    // MOBILE MENU TOGGLE
    if (menuToggle && navbarMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navbarMenu.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        // TUTUP MENU SETELAH LINK DIKLIK
        navbarLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbarMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });

        // TUTUP MENU KETIKA KLIK DI LUAR NAVBAR
        document.addEventListener("click", function (event) {

            if (!navbar.contains(event.target)) {

                navbarMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });

        // TUTUP MENU DENGAN TOMBOL ESCAPE
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navbarMenu.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });
    }

});
