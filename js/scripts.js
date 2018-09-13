$(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    $('.slider2').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      //adaptiveHeight: true,
      dots: false,
      arrows: true,
      fade: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
      nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
    });  
    $('.rev-slider').slick({
      infinite: true,
      autoplay: false,
      //autoplaySpeed: 4000,
      adaptiveHeight: true,
      dots: false,
      arrows: true,
      fade: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
      nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
    }); 
});
 