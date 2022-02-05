const menuItems = document.querySelector('.menu__list');
const menuItem = document.querySelectorAll('.link');
const menuImages = document.querySelector('.main');
const logo = document.querySelector('.logo__img');
const playerBtn = document.querySelector('.player__img');
const plauseBtn = document.querySelector('.pause__img');

function changeImage(event) {
  event.target.classList.contains('link')
    const forest = event.target.dataset.forest
    menuImages.style.backgroundImage = `url('./assets/img/${forest}.jpg')`;
    
    menuItem.forEach((btn) => btn.classList.remove('active')); 
    event.target.classList.add('active');
};

menuItems.addEventListener('click', changeImage); 

function toggleMenu() {
  logo.classList.toggle('active');
  menuImages.style.backgroundImage = `url('./assets/img/forest.jpg')`;
  menuItems.classList.toggle('active');
  
}
logo.addEventListener('click', toggleMenu);


