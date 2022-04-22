const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
   autoplay: {
     delay: 5000,
     pauseOnMouseEnter: true,
     disableOnInteraction: false,
 },
});

let hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  menuclose = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
})

menuclose.addEventListener('click', () => {
  menu.classList.remove('active');
})