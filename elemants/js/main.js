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
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                     
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
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
 

   