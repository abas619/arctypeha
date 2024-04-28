const swiperHome = new Swiper(".swiper-home", {
  slidesPerView: 1,
  spaceBetween: 0,
  //   effect: "fade",
  centeredSlides: true,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperBlogsMini = new Swiper(".swiper-blogs-mini", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
