const swiper = new Swiper('.hero__swiper', {
  lazy: true,
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 70,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
});