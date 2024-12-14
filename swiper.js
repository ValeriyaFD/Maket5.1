const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 16,
    slidesPerView: 'auto',
    breakpoints:{
      320:{
        enabled: true,
      },
      768:{
        enabled: false,
      },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

