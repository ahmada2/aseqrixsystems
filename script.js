// Contact Form


function toggleMenu(){
    var menu = document.getElementById("menu");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

window.onclick = function(event){

    if(
        !event.target.matches('.hamburger')
    ){

        let menu =
        document.getElementById("menu");

        if(menu.style.display === "block"){

            menu.style.display = "none";

        }

    }

}


const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for contacting Aseqrix Systems. We will get back to you soon."
);

form.reset();

});

}

// Reveal Animation

const cards = document.querySelectorAll(
'.card, .product-card'
);

window.addEventListener('scroll', () => {

cards.forEach(card => {

const position =
card.getBoundingClientRect().top;

const screen =
window.innerHeight;

if(position < screen - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}

});

});

// Initial State

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform =
"translateY(50px)";

card.style.transition =
"0.6s ease";

});

// Navbar Shadow

window.addEventListener("scroll", () => {

const header =
document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 4px 20px rgba(0,191,255,0.2)";

}else{

header.style.boxShadow =
"none";

}

});
function toggleMenu(){

    const sidebar =
    document.getElementById("sidebar");

    sidebar.classList.toggle("active");

}
//hamburger page //

function closeMenu() {
    window.location.href = "index.html";
}
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 5000);




function toggleMenu(){
    var menu = document.getElementById("menu");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

