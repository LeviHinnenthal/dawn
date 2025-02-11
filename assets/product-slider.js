document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.product-slider', {
    slidesPerView: 1.6,
    spaceBetween: 24,
    slidesOffsetAfter: 24,
    slidesOffsetBefore: 24,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
      type: 'bullets',
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        slidesOffsetAfter: 48,
        slidesOffsetBefore: 48,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 4.6,
        pagination: false,
        navigation: {
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
          enabled: true,
          slidesOffsetAfter: 20,
          slidesOffsetBefore: 20,
        },
      },
    },
  });

  function truncateText(selector, limit) {
    document.querySelectorAll(selector).forEach((el) => {
      let text = el.textContent.trim();
      if (text.length > limit) {
        el.textContent = text.substring(0, limit) + '...';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    truncateText('.product-title', 97);
  });
});
