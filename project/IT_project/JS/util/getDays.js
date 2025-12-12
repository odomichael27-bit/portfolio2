export
  function getDays() {
  // to get the element from the html
  let userDate = document.querySelector('.js-date');
  let userYear1 = document.querySelector('.js-year');
  let userMonth1 = document.querySelector('.js-month');
  let isleap = false;

  // date array
  let dates = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ];

  // to make year interactive
  userYear1.addEventListener('click', () => {
    let datecal = Number(userYear1.value);
    if ((datecal % 4 === 0)) {
      isleap = true;
    } else {
      isleap = false;
    }

    daysmonth();
  });
  // to make month interactive
  userMonth1.addEventListener('click', () => {
    daysmonth();
  });

  // this function generate the days of the month
  function daysmonth() {
    // to get the month value for comparison
    let daycal = userMonth1.value;

    // the new array for days
    let newArr = [];
    let newArr2 = [];
    if (isleap) {
      if (daycal == 'February') {
        for (let i = 1; i <= 29; i++) {
          newArr.push(i);
        }

        // reasign the array values so that the value will be at supposed
        dates = newArr;
        console.log(dates)
      } else if (daycal == 'April' || daycal == 'June' || daycal == 'September' || daycal == 'November') {
        for (let i = 1; i <= 30; i++) {
          newArr.push(i);
        }
        dates = newArr;
        console.log(dates)
      } else {
        for (let i = 1; i <= 31; i++) {
          newArr.push(i);
        }
        dates = newArr;
        console.log(dates);
      }


    } else {

      // not a leep year
      if (daycal == 'February') {
        for (let i = 1; i <= 28; i++) {
          newArr2.push(i);
        }

        // reasign the array values so that the value will be at supposed
        dates = newArr2;
        console.log(dates)
      } else if (daycal == 'April' || daycal == 'June' || daycal == 'September' || daycal == 'November') {
        for (let i = 1; i <= 30; i++) {
          newArr2.push(i);
        }
        dates = newArr2;
        console.log(dates)
      } else {
        for (let i = 1; i <= 31; i++) {
          newArr2.push(i);
        }
        dates = newArr2;
        console.log(dates);
      }

    }
    dateGeneration()
  }
  dateGeneration()
  function dateGeneration() {
    let dateHTML = '';
    dates.forEach((date) => {
      let html = `<option value="${date}">${date}</option>`;
      dateHTML += html;
    });
    userDate.innerHTML = dateHTML
  }
}