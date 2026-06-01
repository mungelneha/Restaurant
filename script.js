/* =========================
   LOADER REMOVE
========================= */
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 1500);
});


/* =========================
   DARK / LIGHT MODE
========================= */
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#000";
        themeBtn.innerText = "☀️";
    } else {
        document.body.style.background = "#0a0a0a";
        document.body.style.color = "#fff";
        themeBtn.innerText = "🌙";
    }
});


/* =========================
   MENU FILTER SYSTEM
========================= */
const filterBtns = document.querySelectorAll(".menu-filters button");
const cards = document.querySelectorAll(".menu-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let filter = btn.getAttribute("data-filter");

        cards.forEach(card => {
            if (filter === "all") {
                card.style.display = "block";
            } else {
                if (card.classList.contains(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    });
});


/* =========================
   GALLERY LIGHTBOX
========================= */
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});


/* =========================
   BACK TO TOP BUTTON
========================= */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================
   FORM VALIDATION (RESERVATION)
========================= */
const form = document.getElementById("reservationForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = form.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {
        if (input.value === "") {
            valid = false;
        }
    });

    if (valid) {
        alert("Reservation Successful! 🎉");
        form.reset();
    } else {
        alert("Please fill all fields!");
    }
});


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});


/* =========================
   SIMPLE 3D HOVER EFFECT
========================= */
const cards3D = document.querySelectorAll(".menu-card");

cards3D.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;

        let rotateY = -1/5 * x + 20;
        let rotateX = 1/5 * y - 20;

        card.style.transform = 
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});