$(document).ready(function(){

        $('.slider-main-wrap').slick({
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            arrows: false,
            slidesToScroll: 1
        });
          
         
})
$(document).ready(function(){

        $('.logo-slider').slick({
            infinite: true,
            slidesToShow: 5,
            autoplay: true,
            arrows: false,
            slidesToScroll: 1
        });
          
         
})
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


