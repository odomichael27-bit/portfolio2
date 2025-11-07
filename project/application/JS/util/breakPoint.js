
export function breakPoint() {
  let bars = document.querySelector('.js-bars');

  let navHeader = document.querySelector('.navHeader-cont');

  bars.addEventListener('click', () => {

    if (!bars.classList.contains('bars')) {
      console.log('hello2')
      navHeader.style.width = '200px';
      navHeader.style.paddingLeft = '30px';
      bars.classList.add('bars');
      console.log(navHeader)
    } else {
      navHeader.style.width = '0px';
      navHeader.style.paddingLeft = '0px';
      bars.classList.remove('bars');
      console.log(navHeader)
    }
  })

}