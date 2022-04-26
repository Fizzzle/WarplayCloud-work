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
  menu_item = document.querySelectorAll('.menu__item');
  menuclose = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

menu_item.forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.remove('active');
  })
});

menuclose.addEventListener('click', () => {
  menu.classList.remove('active');
});