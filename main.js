// mobile menu

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#menu');

const toggleMenuMenu = () => {
  hamburger.classList.toggle('hamburger');
  hamburger.classList.toggle('rotate');
  mobileMenu.classList.toggle('hide');
};

hamburger.addEventListener('click', toggleMenuMenu);