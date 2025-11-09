let calBtn = document.querySelector('.cal');
let selectEl = document.querySelector('#state');
let ticketEl = document.querySelector('#ticket');
calBtn.addEventListener('click', () => {
  let selectVl = selectEl.value;
  let ticketVl = Number(ticketEl.value);
  let totalCount = 0;
  let totalPrice = 0;
  if (selectVl === 'Enugu') {
    totalCount = 1500;
  } else if (selectVl === 'Abuja') {
    totalCount = 10000;
  }
  else if (selectVl === 'Abia') {
    totalCount = 7000;
  }
  else if (selectVl === 'Imo') {
    totalCount = 10900;
  }
  else if (selectVl === 'Anambra') {
    totalCount = 4000;
  };

  totalPrice = totalCount * ticketVl;

  document.querySelector('.display').innerHTML = `
  🎫 Destination: ${selectVl} | Ticket(s): ${ticketVl} | Total Price: N${totalPrice}
`
})


let activateBtn = document.querySelector('#activate');
let travelDetails = document.querySelector('.travel-details');

activateBtn.addEventListener('click', () => {

  if (travelDetails.classList.contains('active')) {
    travelDetails.classList.remove('active');
  } else {
    travelDetails.classList.add('active')
  }
})


// breaking point


let navBar = document.querySelector('.js-bar');
let ulToggle = document.querySelector('.nav');


navBar.addEventListener('click', () => {

  if (!navBar.classList.contains('bar')) {
    navBar.classList.add('bar');
    ulToggle.classList.add('active')
  } else {
    navBar.classList.remove('bar');
    ulToggle.classList.remove('active');
  }
})


document.querySelectorAll('.a').forEach((a) => {
  a.addEventListener('click', () => {
    if (ulToggle.classList.contains('active')) {
      ulToggle.classList.remove('active');
    }
  })
})