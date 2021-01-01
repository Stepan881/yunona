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
  animateScroll(".main-nav__link");
  animateScroll(".first-screen__arrow");
  function animateScroll (id) {
    $(id).click(function(evt) {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
  }
   
  // header переключение цвета 
  jQuery(function($) {
      var $nav = $('#header'),
          $win = $(window),
          winH = $win.height(); 

      $win.on("scroll", function () {
        $nav.toggleClass("header-white", $(this).scrollTop() > winH );
      }).on("resize", function(){
        winH = $(this).height();
      });
  });


  // навигация меню
  $('.sub-nav__list').slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    variableWidth: true,
    arrows: false,
    // asNavFor: '.sub-nav__link--active',
  });

  // слайдер Преимущества
  $(function() {
    $("#benefits-slider").on("init", function(event, slick){
      $("#benefits .pagination__active").text(slick.currentSlide + 1);
      $("#benefits .pagination__count").text(slick.slideCount);
    });
    $('#benefits-slider').slick({
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('#benefits .pagination__prew'),
      nextArrow: $('#benefits .pagination__next'),

      responsive: [
        {
          breakpoint: 992,
          settings: {
            rows: 3,
          
            slidesToShow: 3,
            slidesToScroll: 1,
          }

        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }

        }
     ]
    });
    $("#benefits-slider").on('afterChange', function(event, slick, currentSlide){
      $("#benefits .pagination__active").text(currentSlide + 1);
      $("#benefits .pagination__count").text(slick.slideCount);
    });
  
    $(window).on('resize', function() {
      $('#benefits-slider').slick('resize');
    });
  });
    
  // слайдер Экскурсии
  slider ('excursion');
  // слайдер Активности 
  slider ('activity');
    // слайдер Музеи
  slider ('museums');

  function slider (id) {
    $(`#${id}-slider`).on("init", function(event, slick){
      $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
    $(`#${id}-slider`).slick({
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $(`#${id} .pagination__prew`),
      nextArrow: $(`#${id} .pagination__next`),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
      $(`#${id} .pagination__active`).text(currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
  };

  // слайдер События
  sliderHorizontal(`events`);
  // слайдер Туры
  sliderHorizontal(`tours`);

  function sliderHorizontal (id) {
    $(`#${id}-slider`).on("init", function(event, slick){
      $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
    $(`#${id}-slider`).slick({
      rows: 3,
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(`#${id} .pagination__prew`),
      nextArrow: $(`#${id} .pagination__next`),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            rows: 2,
          }
        },{
          breakpoint: 768,
          settings: {
            rows: 1,
          }
        },
      ]
    });
    $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
      $(`#${id} .pagination__active`).text(currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
  };

  // слайдер Гостиницы
  sliderVertical(`hotels`);
  // слайдер Рестораны
  sliderVertical(`restaurants`);

  function sliderVertical(id) {
    $(`#${id}-slider`).on("init", function(event, slick){
      $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
    $(`#${id}-slider`).slick({
      rows: 1,
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(`#${id} .pagination__prew`),
      nextArrow: $(`#${id} .pagination__next`),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },{
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
    $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
      $(`#${id} .pagination__active`).text(currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
  }
  
  //Отзывы
  sliderPeople(`reviews`);
  //Кто вам поможет
  sliderPeople(`team`);

  function sliderPeople(id) {
    $(`#${id}-slider`).on("init", function(event, slick){
      $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
    $(`#${id}-slider`).slick({
      rows: 1,
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(`#${id} .pagination__prew`),
      nextArrow: $(`#${id} .pagination__next`),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },{
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
    $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
      $(`#${id} .pagination__active`).text(currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
  };


});
