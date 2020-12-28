jQuery(document).ready(function($){

  // открыть хакрыть меню
  $(".header__btn").on('click', function(event){
    if ($( event.target ).closest( ".header__btn" )) {
      $('.nav-menu').addClass("nav-menu--open");

    }
  });

  $(".nav-menu__close").on('click', function(event){
    event.preventDefault();
    if ($( event.target ).closest( ".nav-menu__close" )) {
      $('.nav-menu').removeClass("nav-menu--open");
    }
  });


  // прокрутка к якорю
  $(".nav-menu .nav-menu__list a").not("a[href='#']").click(function(evt) {

    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });



/*
  $('#excursion-slider').slick({
		rows: 1,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 6
  });
*/

// $('#excursion-slider').ready(function(){
//   $('.your-class').slick();
// });





});









jQuery(window).load(function($) {
  

 
});
