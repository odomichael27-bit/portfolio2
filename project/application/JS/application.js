import { renderComment } from "./product/comment/comment.js";
import { renderProductHTML } from "./product/product.js";
import { breakPoint } from "./util/breakPoint.js";
import { emailValidation } from "./util/emailvalid.js";



let productDisplay = renderProductHTML();
// todisplay the product on the page
document.querySelector('.js-display-product').innerHTML = productDisplay;

let addCart = document.querySelectorAll('.add-to-cart');

let cartCount = 0;
addCart.forEach((cart) => {
  cart.addEventListener('click', () => {
    cartCount++;
    console.log(cartCount);
    document.querySelector('.js-cartCount').innerHTML = cartCount;
  })
})

// to display the comment section

let comment = renderComment();

document.querySelector('.js-review-display').innerHTML = comment;




let email = document.querySelector('#email');

email.addEventListener('input', () => {
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    email.classList.add('notMatch');
    email.classList.remove('match');
  } else {
    email.classList.remove('notMatch')
    email.classList.add('match');
  }
})

let emailValid = document.querySelector('#form');

emailValidation(emailValid);


breakPoint();

renderComment();

