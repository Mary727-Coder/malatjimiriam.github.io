
function openCV() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.target = '_blank';
    link.click();
}

const roles = [
    "Software Engineer",
    "Web Developer",
    "Network Engineer",
    "UI / UX Designer",
    "Software Tester"
];


let index = 0;
let letterIndex = 0;
let isDeleting = false;
const speed = 100;
const delayBetweenWords = 2500;

const dynamicText = document.getElementById("dynamic-text");

function typeWords() {
    const currentRole = roles[index];

    if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, letterIndex--);
    } else {
        dynamicText.textContent = currentRole.substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), delayBetweenWords);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    const typingSpeed = isDeleting ? speed / 2 : speed;
    setTimeout(typeWords, typingSpeed);
}
typeWords();


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


function openLightbox(img) {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


let  lightmode=localStorage.getItem('lightmode')
const themeSwitch=document.getElementById('theme-switch')

const  enableLightmode=()=>{
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const  disableLightmode=()=>{
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightmode=="active") enableLightmode()

themeSwitch.addEventListener("click",()=>{
    lightmode=localStorage.getItem('lightmode')
    lightmode!="active" ? enableLightmode():disableLightmode()
})



