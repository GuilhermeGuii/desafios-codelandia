// MENU APPERANCE

const menu = document.querySelector('#menu');
const menuBurguer = document.querySelector('#menu-burguer');
const menuItems = document.querySelector('.menu-items');
const closeMenu = document.querySelector('.close-menu');


menuBurguer.addEventListener('click', () => {
    menu.classList.toggle("active");
    closeMenu.style.display = 'block';

    menuItems.addEventListener('click', () => {
        menu.classList.remove("active");
        closeMenu.style.display = 'none';
    });


    closeMenu.addEventListener('click', () => {
        menu.classList.remove("active");
        closeMenu.style.display = 'none';
    });

});

// Sticky Navigation Bar

const sticky = document.querySelector('.header-content');
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
        sticky.classList.add("sticky");
    } else {
        sticky.classList.remove("sticky");
    }
})

