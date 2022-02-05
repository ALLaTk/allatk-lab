const menuItems = document.querySelector('.menu__list');
const menuItem = document.querySelectorAll('.link');
const menuImages = document.querySelector('.main');
const logo = document.querySelector('.logo__img');
const playerBtn = document.querySelector('.player__img');
const plauseBtn = document.querySelector('.pause__img');
const player = document.querySelector('.player');

const audio = new Audio();
let isPlay = false;
let playNum = 0;

audio.src = './assets/audio/solovey.mp3';
audio.currentTime = 0;

function playAudio() {
 if(isPlay){
   audio.pause();
   isPlay = false;
 } else {
   audio.play()
   isPlay = true;
}
player.classList.toggle('pause');
}
player.addEventListener('click', playAudio);

function changeImage(event) {
  event.target.classList.contains('link')
    const forest = event.target.dataset.forest
    menuImages.style.backgroundImage = `url('./assets/img/${forest}.jpg')`;
    audio.src = `./assets/audio/${forest}.mp3`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;

    menuItem.forEach((btn) => btn.classList.remove('active')); 
    event.target.classList.add('active');
    logo.src = `./assets/svg/logo1.svg`;
    playerBtn.classList.remove('active');
    plauseBtn.classList.add('active');
}
menuItems.addEventListener('click', changeImage); 

function toggleMenu() {
  logo.classList.toggle('active');
    audio.src = `./assets/audio/forest.mp3`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;

  logo.src = `./assets/svg/logo.svg`;
  menuImages.style.backgroundImage = `url('./assets/img/forest.jpg')`;
  menuItems.classList.toggle('active');
  playerBtn.classList.remove('active');
  plauseBtn.classList.add('active');
}

logo.addEventListener('click', toggleMenu);
 

function playerBtns () {
  playerBtn.classList.toggle('active');
  plauseBtn.classList.toggle('active');
  audio.currentTime = 0;
}
playerBtn.addEventListener('click', playerBtns);
plauseBtn.addEventListener('click', playerBtns);
