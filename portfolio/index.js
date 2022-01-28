
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

// change theme
/////////////////////////////////////////

const imgTheme = document.querySelector('.themes');
const theme = document.querySelector('.day');
function themesImg() {
  theme.classList.toggle('night');
}
imgTheme.addEventListener('click', themesImg);

