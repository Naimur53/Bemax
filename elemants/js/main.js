$(document).ready(function(){
     
    $('.owl-carousel').owlCarousel({
        loop:true, 
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 1,
        cssMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          loop: true,
          loopedSlides: 4,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        
      });

 
        $('.image-link').magnificPopup({type:'iframe'});
      
     
 
});
 
    $('.blog-slide-wrap').owlCarousel({
      loop:true, 
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
   
 
$('.brand-slider').owlCarousel({
  loop:true, 
  nav:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
  })