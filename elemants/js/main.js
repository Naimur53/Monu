$(document).ready(function(){

        $('.slider-main-wrap').slick({
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            arrows: false,
            slidesToScroll: 1
        });
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 600) {
              $(".black").css("background" , "#fff");
            }
      
            else{
                $(".black").css("background" , "0 0");  	
            }
        })

        $('.logo-slider').slick({
            infinite: true,
            slidesToShow: 5,
            autoplay: true,
            arrows: false,
            slidesToScroll: 1
        });
          
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
         
         
})
 

   