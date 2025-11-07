const commentList = [
  {
    name: 'Engr. Kelechi Odo',
    img: './img/img-comment/Engr-KC2.jpg',
    comment: 'Amazing products and fast delivery.',
  },

  {
    name: 'JDC Network',
    img: './img/img-comment/JDCnetwork.jpg',
    comment: " I'm happy to purchase some products here! This is a very reliable platform.",
  },

  {
    name: 'Dee Collins',
    img: './img/img-comment/DeeCollins.jpg',
    comment: "  I've had a great experience purchasing products here. Very reliable service.",
  },
]

export function renderComment() {
  let commentHTML = '';

  commentList.forEach((comment) => {
    let html = `
        <div class="review-cont">
          <div class="img-cont-review">
            <img src=${comment.img} alt="${comment.name}">
          </div>
          <div class="review-details">
            <p>"${comment.comment} "</p>
            <h3>
              -${comment.name}
            </h3>
          </div>
        </div>  
       `
    commentHTML += html;
  });

  return commentHTML;
}
