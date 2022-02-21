let squares =document.querySelectorAll('.square');
let board = document.querySelector('.board')
const gameOverArea = document.querySelector('.game__over');
const gameOverText = document.querySelector('.game__over__text');
const line = document.querySelector('.line');
const playBtn = document.querySelector('.play__again');
const playerX = 'X';
const playerO = 'O';
let player = playerX 
const array = Array(squares.length);
array.fill(null);
const index = [
  { win: [1, 2, 3], addClass: "line-row-1" },
  { win: [4, 5, 6], addClass: "line-row-2" },
  { win: [7, 8, 9], addClass: "line-row-3" },
  { win: [1, 4, 7], addClass: "line-column-1" },
  { win: [2, 5, 8], addClass: "line-column-2" },
  { win: [3, 6, 9], addClass: "line-column-3" },
  { win: [1, 5, 9], addClass: "line-diagonal-1" },
  { win: [3, 5, 7], addClass: "line-diagonal-2" },
]


const gameOver = new Audio('./assets/sound/gameover.mp3');
const click = new Audio('./assets/sound/click.mp3');
let draw = new Audio('./assets/sound/draw.mp3');

function showPlayer(event) {
  if (gameOverArea.classList.contains("visible")) {
    return;
  }
   if (event.target.innerText != '') {
    return;
  }

  const tileNumber = event.target.dataset.index;
  if (player === playerX) {
    event.target.innerText = playerX;
    array[tileNumber - 1] = playerX;
    player = playerO;
  } else {
    event.target.innerText = playerO;
    array[tileNumber - 1] = playerO;
    player = playerX;
  }

  click.play();
  showWinner()
}

board.addEventListener('click', showPlayer)

