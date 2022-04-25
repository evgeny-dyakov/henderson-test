new Swiper('.slider-block .swiper', {
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: {
    enable: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 2,
    },
    770: {
      slidesPerView: 3,
    },
  },
});