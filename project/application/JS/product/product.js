const product = [
  {
    id: '1',
    name: 'Chelsea Shirt',
    priceCent: 15.00,
    img: './img/colePamer.jpg',
  },
  {
    id: '2',
    name: 'Manchester City Shirt',
    priceCent: 15.00,
    img: './img/footbalShirt.jpg',
  },
  {
    id: '3',
    name: 'Flybold Slackline',
    priceCent: 10.00,
    img: './img/slackline.jpg',
  },
  {
    id: '4',
    name: 'Snuker Stick',
    priceCent: 25.00,
    img: './img/snukerStick.jpg',
  },
  {
    id: '5',
    name: 'Chelsea Shirt',
    priceCent: 15.00,
    img: './img/colePamer.jpg',
  },
  {
    id: '6',
    name: 'Flybold Slackline',
    priceCent: 10.00,
    img: './img/slackline.jpg',
  }
]

// to render product
export function renderProductHTML() {
  let productHTML = '';
  product.forEach((productItem) => {
    let html = ` <div class="product-cont">
          <div class="img-cont1">
            <img src=${productItem.img} alt="${productItem.name}">
          </div>

          <div class="product-details">
            <div class="product-detail">
              <h3>
                ${productItem.name}
              </h3>
              <p class="priceCents">
                $${productItem.priceCent}
              </p>
            </div>
            <button class="add-to-cart">Add to Cart</button>
          </div>

        </div>`;

    productHTML += html;
  })

  return productHTML;
}




