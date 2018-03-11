$(function () {
"use strict";
  $("[data-src]").each(function () {
        var backgroundImage = $(this).attr("data-src");
        $(this).css("background-image", "url(" + backgroundImage + ")");
    });
  
    
    //For counter
//    $(".nummbers .timer").each(function(){
//        var minNumb = 0,
//            maxNumb = $(this).attr("data-number");
//        $(this).countTo({
//            from: minNumb,
//            to: maxNumb,
//        });
//    })
//    
    


//Slider Of Testmonial
    $('.testmoial-slider').slick({
  dots: true,
        rtl:true,
        autoplay:true,
        arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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
    
    
    
    
    var a = 0;
$(window).scroll(function() {

  var oTop = $('.block-numbers').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.timer').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
    });
