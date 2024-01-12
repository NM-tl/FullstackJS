document.addEventListener('DOMContentLoaded', () => {
    const swiperEffect = new Swiper(".swiperEffect", {
        loop: true,
        effect: "cards",
        grabCursor: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
        },
    });
});