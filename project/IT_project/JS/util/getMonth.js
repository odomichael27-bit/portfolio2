
export function getValidMonth() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let userMonth = document.querySelector('.js-month');
  let monthHTML = '';
  months.forEach((month) => {
    let html = `<option value="${month}">${month}</option>`;
    monthHTML += html;
  });
  userMonth.innerHTML = monthHTML;
}