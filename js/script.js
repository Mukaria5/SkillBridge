/* ==========================================
   SKILLBRIDGE
   JavaScript
========================================== */

/* ==========================================
   DARK MODE (Persistent)
========================================== */

const darkModeBtn = document.getElementById("darkModeBtn");

// Load saved theme when page opens
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    if (darkModeBtn) {
        const icon = darkModeBtn.querySelector("i");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}

// Toggle theme
if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = darkModeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            localStorage.setItem("theme", "light");

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}

// ==============================
// COUNTER
// ==============================

const counters = document.querySelectorAll(".counter");

const animateCounter = counter => {

    const target = Number(counter.dataset.target);

    const speed = 60;

    const update = () => {

        const current = Number(counter.innerText);

        const increment = Math.ceil(target / speed);

        if (current < target) {

            counter.innerText = current + increment;

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    }

    update();

}

counters.forEach(counter => animateCounter(counter));

// ==============================
// BACK TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==============================
// NAVBAR BLUR
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(20,20,30,.45)";

        navbar.style.backdropFilter="blur(25px)";

    }

    else{

        navbar.style.background="rgba(255,255,255,.08)";

    }

});

// ==============================
// HERO FLOAT
// ==============================

const hero=document.querySelector(".hero-content");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/45;

const y=(window.innerHeight/2-e.pageY)/45;

hero.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave",()=>{

hero.style.transform="rotateY(0deg) rotateX(0deg)";

});

// ==============================
// SCROLL REVEAL
// ==============================

const revealItems=document.querySelectorAll(

".feature-card,.service-card,.testimonial,.stat,.cta"

);

const reveal=()=>{

const trigger=window.innerHeight*0.85;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ==============================
// PRELOADER (Optional)
// ==============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* ===========================
SERVICE SEARCH
=========================== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();

        const cards = document.querySelectorAll(".service-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            card.style.display = title.includes(filter) ? "block" : "none";

        });

    });

}

/* ===========================
IMAGE MODAL
=========================== */

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImage");

const images = document.querySelectorAll(".gallery-grid img");

const closeBtn = document.querySelector(".close");

if (images.length > 0) {

    images.forEach(image => {

        image.addEventListener("click", () => {

            modal.style.display = "flex";

            modalImg.src = image.src;

        });

    });

}

if (closeBtn) {

    closeBtn.onclick = () => {

        modal.style.display = "none";

    };

}

window.onclick = e => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

};

/* ===========================
CONTACT FORM VALIDATION
=========================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

if(name===""||email===""||message===""){

alert("Please fill in all required fields.");

return;

}

alert("Thank you! Your message has been sent successfully.");

contactForm.reset();

});

}