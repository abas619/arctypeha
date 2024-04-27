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

const swiperBlogs = new Swiper(".swiper-blogs", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
