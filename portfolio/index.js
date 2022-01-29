import i18Obj from './translate.js';


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

// change photo in portfolio section
/////////////////////////////////////////
const portfolioBtns = document.querySelector('.portfolio-btn');
const portfolioBtn = document.querySelectorAll('.btn-port');
const portfolioImages = document.querySelectorAll('.portfolio-image');

function changeImage(event) {
  if(event.target.classList.contains('btn-port')) {
    const season = event.target.dataset.season
    portfolioImages.forEach((img, index) => (img.src = `./assets/img/${season}/${index + 1}.jpg`)
    );
    portfolioBtn.forEach((btn) => btn.classList.remove('active')); 
    event.target.classList.add('active');
  }
};
portfolioBtns.addEventListener('click', changeImage); 
  
    

