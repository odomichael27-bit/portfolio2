export function imgInteractive() {
  let imgs = [
    './image/project-image/class-img.jpeg',
    './image/project-image/classmate-img.jpeg',
    './image/project-image/homepage-img.jpg',
    './image/project-image/lecture-img.jpeg'
  ];

  let count = 0;
  let img = document.querySelector(`.backimg`);

  setInterval(() => {
    if (count < imgs.length - 1) {

      count++;
      img.src = imgs[count];
    } else {
      count = 0
      img.src = imgs[count];
    }
  }, 5000)
}

