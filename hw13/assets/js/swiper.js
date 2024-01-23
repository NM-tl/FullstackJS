document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    speed: 800,
    on: {
      slideChange: function () {
        updateProgressBar();
      },
    }
  });

  function updateProgressBar() {
    let progress = (swiper.realIndex + 1) / swiper.slides.length * 100;
    document.getElementById('progress').value = progress;
  }

  const scrollButton = document.querySelector('.btn.scroll');
  const stepButtons = document.querySelectorAll('.step span');

  scrollButton?.addEventListener('click', () => {
    swiper.slideNext();
  });
  
  stepButtons?.forEach(function (button, index) {
    button.addEventListener('click', function () {
      swiper.slideTo(index);
    });
  });
})