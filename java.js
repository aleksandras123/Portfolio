// toggle burger

$( document ).ready(function() {
    console.log( "ready!" );
    $('.menu-icon').on('click', function(){
        $('nav ul').toggleClass('opa');
    });
    $('.form').mouseover(function(){
            $('.form').addClass('border');
        });
        $('.form').mouseout(function(){
            $('.form').removeClass('border');
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
