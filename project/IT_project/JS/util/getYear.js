
export function getValidYear() {
  let userYear = document.querySelector('.js-year');
  let years = [
  ];

  let currentYear = new Date();

  let todayYear = currentYear.getFullYear();
  let oldyear = todayYear - 120;

  for (let i = oldyear; i <= todayYear; i++) {
    years.unshift(i);
  }

  let yearHTML = '';
  years.forEach((year) => {
    let html = `<option value="${year}">${year}</option>`;
    yearHTML += html;
  });
  userYear.innerHTML = yearHTML
  userYear.addEventListener('click', () => {
    console.log(userYear.value)
  })

}