/* ==================================================
   AZLY BASARIAN
   Landing Page Script
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       BACK TO TOP
    ========================== */

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.style.display = "flex";

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

    /* ==========================
       HEADER SHADOW
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

    /* ==========================
       REVEAL ANIMATION
    ========================== */

    const reveals = document.querySelectorAll(
        "section, .service-card, .timeline-item, .contact-card"
    );

    const revealOnScroll = () => {

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            const trigger = window.innerHeight - 100;

            if (top < trigger) {

                item.classList.add("active");
                item.classList.add("reveal");

            }

        });

    };

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (pageYOffset >= top &&
                pageYOffset < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuButton = document.querySelector(".mobile-menu");

    const nav = document.querySelector("nav");

    menuButton.addEventListener("click", () => {

        if (nav.style.display === "block") {

            nav.style.display = "none";

        } else {

            nav.style.display = "block";

        }

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            nav.style.display = "";

        }

    });

    /* ==========================
       CLOSE MENU AFTER CLICK
    ========================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 768) {

                nav.style.display = "none";

            }

        });

    });

    /* ==========================
       HERO IMAGE EFFECT
    ========================== */

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {

        heroImage.addEventListener("mousemove", e => {

            const rect = heroImage.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 12;

            const rotateX =
                ((y / rect.height) - 0.5) * -12;

            heroImage.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        });

        heroImage.addEventListener("mouseleave", () => {

            heroImage.style.transform =
                "perspective(900px) rotateX(0) rotateY(0) scale(1)";

        });

    }

    /* ==========================
       CURRENT YEAR
    ========================== */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.innerHTML =
            `© ${new Date().getFullYear()} Azly Basarian. All Rights Reserved.`;

    }

});


const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const value=+counter.innerText;

const speed=60;

const increment=Math.ceil(target/speed);

if(value<target){

counter.innerText=value+increment;

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});

const theme=document.getElementById("themeToggle");

theme.onclick=()=>{

document.body.classList.toggle("dark");

}