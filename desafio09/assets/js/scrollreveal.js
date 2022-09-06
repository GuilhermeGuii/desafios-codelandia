// SCROLL REVEAL 

const contactItems = document.querySelectorAll(".about-contact > li");
const projectItems = document.querySelectorAll(".projects-items > li");
const serviceItems = document.querySelectorAll(".service-items > li");
const skillItems = document.querySelectorAll(".skills-items > li");

ScrollReveal({ reset: true });

ScrollReveal().reveal(contactItems, {
    delay: 300,
    interval: 200,
});

ScrollReveal().reveal(projectItems, {
    distance: '300px',
    origin: 'left',
    delay: 200,
    interval: 200,
    duration: 700
});

ScrollReveal().reveal(serviceItems, {
    distance: '300px',
    origin: 'top',
    delay: 700,
    interval: 500,
    duration: 1000
});

ScrollReveal().reveal(skillItems, {
    delay: 300,
    interval: 200,
    duration: 500
});
