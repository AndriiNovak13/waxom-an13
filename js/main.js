$(function(){

  $('.header__burger').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
});

$('.intro').scroll(function(){
  var x = $(this).scrollTop();
  console.log(parseInt(-x/10));
  $(this).css('background-position','0% '+parseInt(-x/10)+'px');
});

    $('.intro__slaider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass:'intro__slaider-dots',
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',

        responsive: [
            {
              breakpoint: 681,
              settings: {
                arrows:false,
              }
            }]


      });

      $('.recent__slaider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 600,
        appendArrows:$('.recent__arrows'),


        responsive: [
          {
            breakpoint: 901,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 551,
            settings: {
              slidesToShow: 1,
            }
          }
            
          ],
          
    
      });

     


      $(window).on("scroll", function() {
        var window_h = $(window).scrollTop();
        var main_h = $(".intro").innerHeight();
        var main__header = $(".intro__content-title").offset().top;

        if(window_h <= 5) {
            $("header")
                .removeClass("header__scrolled")
                .css("opacity",1);
                

        }
        
        else if(window_h <= main_h - 10) {
            var op = (main__header - window_h - 100)/main__header
            $("header")
                .removeClass("header__scrolled")
                .css("opacity",op);
                
            if(op < 0) {
                $("header").addClass('display_none');
            }
            else {
                $("header").removeClass('display_none');
            }
        }
        if(window_h > main_h - 10) {
            $("header")
                .removeClass('display_none')
                .addClass("header__scrolled")
                .css("opacity", 1);
        }
    });

   
     
    

});