
let count = 0;

document.querySelectorAll('.js-add-to-cart').forEach((cartButton) => {
  cartButton.addEventListener('click', () => {
    count++;
    document.querySelector('.cartCount').innerHTML = count;
  })
})




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


document.querySelector('#form').addEventListener('submit', () => {
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let emailf = email.value.trim()
  if (emailf === '') {
    alert('Please, fill in the empty space');
    return false
  }

  if (!emailf.match(emailPattern)) {
    alert('Provide a valid Email')
    return false
  }

  alert('Registration successful');
  return true
})


let bars = document.querySelector('.js-bars');

let navHeader = document.querySelector('.navHeader-cont');

bars.addEventListener('click', () => {

  console.log('hello')

  if (!bars.classList.contains('bars')) {
    console.log('hello2')
    navHeader.style.width = '200px';
    navHeader.style.paddingLeft = '30px';
    bars.classList.add('bars');
    console.log(navHeader)
  } else {
    navHeader.style.width = '0px';
    navHeader.style.paddingLeft = '0px';
    bars.classList.remove('bars');
    console.log(navHeader)
  }
})

