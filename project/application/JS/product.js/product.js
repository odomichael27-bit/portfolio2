const product = [
  {
    productId: '1',
    name: 'Chelsea Shirt',
    priceCent: 1500,
  },
  {
    productId: '2',
    name: 'Chelsea Shirt',
    priceCent: 1500,
  },
  {
    productId: '3',
    name: 'Chelsea Shirt',
    priceCent: 1500,
  },
  {
    productId: '4',
    name: 'Chelsea Shirt',
    priceCent: 1500,
  },
  {
    productId: '5',
    name: 'Chelsea Shirt',
    priceCent: 1500,
  },
  {
    productId: '6',
    name: 'Chelsea Shirt',
    priceCent: 1500,
  }
]

product.forEach((productItem) => {
  let html = ` <div class="product-cont">
          <div class="img-cont1">
            <img src="./img/footbalShirt.jpg" alt="Chelsea Shirt">
          </div>

          <div class="product-details">
            <h3>
              Chelsea Shirt
            </h3>
            <p class="priceCents">
              $15.00
            </p>
            <button class="add-to-cart">Add to Cart</button>
          </div>

        </div>`;
})


console.log(html)
