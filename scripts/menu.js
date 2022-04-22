const startBtn = document.querySelector('#start');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const menuList = document.querySelector('.menu__list');
const stars = document.querySelector('.starry');

function switchMenu() {
  menu.classList.toggle('menu_opened');
}

function closeMenu(evt) {
  if (evt.target === content || evt.target === stars) menu.classList.remove('menu_opened');
  else return;
}

startBtn.addEventListener('click', switchMenu);

content.addEventListener('click', closeMenu);