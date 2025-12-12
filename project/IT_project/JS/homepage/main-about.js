
// nav

let navBar = document.querySelector('.fa-bars');
let navList = document.querySelector('.nav-list');

navBar.addEventListener('click', () => {
  removeNarBar();
})

function removeNarBar() {
  if (navList.classList.contains('active')) {
    navList.classList.remove('active');
  } else {
    navList.classList.add('active');
  }
}