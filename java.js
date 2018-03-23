// toggle burger

$( document ).ready(function() {
    console.log( "ready!" );
    $('.menu-icon').on('click', function(){
        $('nav ul').toggleClass('opa');
    });
    // change shape
    $('.form').mouseover(function(){
            $('.form').addClass('border-logo');
        });
        $('.form').mouseout(function(){
            $('.form').removeClass('border-logo');
        });
        // change shape
      $('.skills').mouseover(function(){
              $('.item1').addClass('border-item');
          });
          $('.skills').mouseout(function(){
              $('.item1').removeClass('border-item');
            });

        $('.projects').mouseover(function(){
                $('.item2').addClass('border-item');
            });
            $('.projects').mouseout(function(){
                $('.item2').removeClass('border-item');
              });
});
// Change top collor
$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('nav').addClass('styleScroll');
        $('nav').addClass('none');
    }else {
        $('nav').removeClass('styleScroll');
        $('nav').removeClass('none');
    }
});
