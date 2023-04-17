// mobile menu

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector ('#menu');
console.log(hamburger);

const toggleMenuMenu = () => {
    hamburger.classList.toggle('hamburger');
    hamburger.classList.toggle('rotate');
    console.log('clicked');
    mobileMenu.classList.toggle('hide');
    
}

hamburger.addEventListener('click',toggleMenuMenu);