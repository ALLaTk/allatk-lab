const btn = document.querySelector('.button');
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const images = document.querySelector('.body');
const lngEn = document.querySelector('.en');
const lngRu = document.querySelector('.ru');
const btnEn = document.querySelector('.eng');
const btnRu = document.querySelector('.rus');
const lngs = document.querySelector('.switch-lng')
const language = document.querySelectorAll('.lng-text');
document.addEventListener('DOMContentLoaded', getQuote)
document.addEventListener('DOMContentLoaded', setImgs)
let flag
let url = 'https://type.fit/api/quotes/'
let q

const imgBg = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg', '41.jpg']


let i = 0

function preloadImages() {
  imgBg.forEach(function(i) {
    const img = new Image();
    img.style = `background-image: url(./assets/img/${imgBg[i]})`;
  });
}
preloadImages();

btn.addEventListener('click', next)

function next() {
  if (i >= imgBg.length -1) i = -1
  i++;
  return setImg()
}
function setImg() {
  return images.setAttribute('style', `background-image: url(./assets/img/${imgBg[i]})`)
}

function setImgs() {
  let b = Math.floor(Math.random() * (40 - 1 + 1)) + 1;
  return images.setAttribute('style', `background-image: url(./assets/img/${imgBg[b]})`)
}

// function getQuote () {
//   fetch ('https://type.fit/api/quotes')
//   .then(res => res.json())
//   .then(data => {
//     quote.innerHTML = `''${data[i].text}''`;
//     author.innerHTML = data[i].author;
//   })
// }

lngs.addEventListener('click', () => {
  if(flag) {url = 'https://type.fit/api/quotes/'; flag = false}
  else {url = './index.json'; flag = true;}
  q = url
  console.log(url);
})

async function getQuote(){
  const quoteData = await fetch(url, {
    headers: {
      'Accept': 'aplication/json'
    }
  });
  let a = Math.floor(Math.random() * (46 - 1 + 1)) + 1;
  const quoteObj = await quoteData.json(url)
  quote.innerHTML = `''${quoteObj[a].text}''`;
  author.innerHTML = quoteObj[a].author;
}
btn.addEventListener('click', getQuote);
lngs.addEventListener('click', getQuote);

 function toggleLg() {
  lngEn.classList.toggle('active');
  lngRu.classList.toggle('active');
  btnEn.classList.toggle('active');
  btnRu.classList.toggle('active');
}
lngEn.addEventListener('click', toggleLg);
lngRu.addEventListener('click', toggleLg);

