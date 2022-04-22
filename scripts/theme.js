const background = document.querySelector('.page');
const moon = document.querySelector('.moon');

function text(evt) {
  evt.preventDefault();
  background.classList.toggle('page_background');
  moon.classList.toggle('sun');
}

background.addEventListener('contextmenu', text);