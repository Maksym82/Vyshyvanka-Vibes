const swiper = new Swiper(".collection-swiper", {
  loop: true,
  mousewheel: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,


  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
