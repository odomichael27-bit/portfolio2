import bouncingInfiniteAnimate from '../animation-and-js/animate-JS/bounceinfiniteAnimation.js';
import fromLeft from "../animation-and-js/animate-JS/fromLeftAnimate.js"
// Sidebar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navBar');

menuIcon.onclick = () => {

  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.add('fa-times');
    menuIcon.classList.remove('fa-bars');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }

  navbar.classList.toggle('active');
}

// header active

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    // console.log(top + ' top')

    let offset = sec.offsetTop - 150;
    //console.log(offset + ' offset')
    // to get the height of the section
    let height = sec.offsetHeight;
    //console.log(height + ' height')
    // to get the attribute id
    let id = sec.getAttribute('id');
    //console.log(id)

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {

        // to remove the class
        link.classList.remove('active');

        // to add the class to the header child element
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /* sticky header */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


  menuIcon.classList.remove('fa-times');
  menuIcon.classList.add('fa-bars');
  navbar.classList.remove('active')

}



let downloadFile = document.querySelector('#dwld');

downloadFile.onclick = () => {
  downloadFile.href = "./project/Discount-App/discount.html";
  downloadFile.download = "Discount App"
}


// to make my profile to bounce

let homeProfile = document.querySelector('.home-img');
bouncingInfiniteAnimate(homeProfile);
