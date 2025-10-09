let productElement = document.querySelector('#productAmount');
console.log(productElement)// to store product amount
let disAmountElement = document.querySelector('#disAmount');
console.log(disAmountElement)//
let proNameElement = document.querySelector('#productName');
function checkElement() {
  let product = Number(productElement.value);
  let discount = Number(disAmountElement.value) / 100;
  console.log(discount);


  let disTotal = product * discount;

  let total = product - disTotal;



  let display = `Product Name: ${proNameElement.value}, Discount: ${disTotal}, Total price:${total} `

  document.querySelector('#display').innerHTML = `${display}`
}
