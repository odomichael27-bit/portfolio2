import { imgInteractive } from "./background-img.js";
import { getValidYear } from "../util/getYear.js";
import { getValidMonth } from "../util/getMonth.js";
import { getDays } from "../util/getDays.js";



// header

let hedBtnEls = document.querySelectorAll('.js-btn');
let logBtnEl = document.querySelector('.js-logBtn');
let signBtnEl = document.querySelector('.js-signBtn');
let loginEl = document.querySelector('.js-login');
let homeEl = document.querySelector('.js-home');
let hedHomeEl = document.querySelector('.js-header-home');
let signupEl = document.querySelector('.js-signup');
let signLinkLogin = document.querySelector('.signA');

// nav

let navBar = document.querySelector('.fa-bars');
let navList = document.querySelector('.nav-list');



signLinkLogin.addEventListener('click', () => {
  getLogin();
  removeSignup();
  hedBtnEls.forEach((hedBtnEl) => {
    hedBtnEl.innerHTML = 'Signup';
  })

});

hedBtnEls.forEach((hedBtnEl) => {
  hedBtnEl.addEventListener('click', () => {
    let hedBtnElIn = hedBtnEl.innerHTML;
    navList.classList.remove('active')
    if (hedBtnElIn === 'Login') {
      getLogin();
      removeSignup();
      hedBtnEls.forEach((hedBtnEl) => {
        hedBtnEl.innerHTML = 'Signup';
      })
    } else {
      hedBtnEls.forEach((hedBtnEl) => {
        hedBtnEl.innerHTML = 'Login';
      })

      removeLogin();
      getSignup();
    }
  });
});

logBtnEl.addEventListener('click', () => {
  getLogin();
  hedBtnEls.forEach((hedBtnEl) => {
    hedBtnEl.innerHTML = 'Signup';
  })

})

signBtnEl.addEventListener('click', () => {
  getSignup();
  hedBtnEls.forEach((hedBtnEl) => {
    hedBtnEl.innerHTML = 'Login';
  })

})

hedHomeEl.addEventListener('click', () => {
  removeLogin();
  hedBtnEls.forEach((hedBtnEl) => {
    hedBtnEl.innerHTML = 'Login';
  })
});

getValidYear();
getValidMonth();
imgInteractive();
getDays();


function removeLogin() {
  loginEl.classList.remove('active');
  homeEl.classList.remove('loginBtn');
  hedHomeEl.classList.add('active');
  signupEl.classList.remove('active');
}

function getLogin() {
  loginEl.classList.add('active');
  homeEl.classList.add('loginBtn');
  hedHomeEl.classList.remove('active');
}


function getSignup() {
  loginEl.classList.remove('active');
  signupEl.classList.add('active');
  homeEl.classList.add('loginBtn');
  hedHomeEl.classList.remove('active');
}


function removeSignup() {
  signupEl.classList.remove('active');
}



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