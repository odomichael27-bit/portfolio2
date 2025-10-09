
export default function bouncingOnceAnimate(id) {

  id.addEventListener('mouseover', () => {
    id.classList.add('bounceOnce');
  })

}


