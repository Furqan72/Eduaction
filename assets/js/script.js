$(document).ready(function(){
    $('.sliderwrap1').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: true,
        loop: true,
        prevArrow: $('.arrow_prev1'),
		nextArrow: $('.arrow_next1'),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 2560,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});

$(document).ready(function(){
  $('.sliderwrap2').slick({
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      arrows: true,
      loop: true,
      prevArrow: $('.arrow_prev2'),
  nextArrow: $('.arrow_next2'),
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 2560,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});