<script>
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.product-slider', {
      slidesPerView: {{ section.settings.slides_per_view_mobile }},
      spaceBetween: {{ section.settings.space_between }},
      loop: {{ section.settings.loop }},
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: {{ section.settings.show_pagination }}
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: {{ section.settings.show_navigation }}
      },
      breakpoints: {
        640: {
          slidesPerView: {{ section.settings.slides_per_view_tablet }},
          spaceBetween: {{ section.settings.space_between }},
        },
        1024: {
          slidesPerView: {{ section.settings.slides_per_view_desktop }},
          spaceBetween: {{ section.settings.space_between }},
        },
      },
    });
  });
</script>