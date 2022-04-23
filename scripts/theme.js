const background = document.querySelector('.page');
const moon = document.querySelector('.moon');
const themeSwitcher = document.getElementById('theme-switcher');

function text() {
  background.classList.toggle('page_background');
  moon.classList.toggle('sun');
  deleteStars();
}

function deleteStars() {
  if (!moon.classList.contains('sun')) {
    arrStars = []
  } else {
    setup();
  }

}

themeSwitcher.addEventListener('change', text);