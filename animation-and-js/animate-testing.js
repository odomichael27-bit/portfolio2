let yourYear = document.getElementById('date');

let display = document.getElementById('displayYear');

document.querySelector('#add').addEventListener('click', () => {
  // your age
  let today = new Date(yourYear.value);

  let year = today.getFullYear();

  // current year

  let todaYear = new Date();
  let currentYear = todaYear.getFullYear();


  // to calculate

  let yourAge = currentYear - year;

  if (yourAge < 0 || yourAge > 120) {
    alert('Your age must be at least 0 or less than 120 years respectively')
  } else {
    display.innerHTML = "Your are " + yourAge + " years old";
  }

  console.log(yourAge)
  console.log(currentYear);
  console.log(year);
})


//let currentYear = today.getFullYear();


// console.log(today);
// console.log(currentYear)
