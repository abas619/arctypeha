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

// const swiperSpecialThumb = new Swiper(".swiper-special-thumb", {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   loop: false,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     450: {
//       slidesPerView: 4,
//     },
//     575: {
//       slidesPerView: 4,
//     },
//     768: {
//       slidesPerView: 4,
//     },
//     992: {
//       slidesPerView: 4,
//     },
//     1200: {
//       slidesPerView: 5,
//     },
//   },
// });
