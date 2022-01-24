

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

// (function(){
//   $('.hamburger').on('click', function(){
//     $('.nav').toggleClass('nav-active');
//   });
// });