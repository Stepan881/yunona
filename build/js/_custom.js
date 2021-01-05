jQuery(document).ready(function($){

  // открыть закрыть меню
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

  $(".nav-menu__overlay").on('click', function(event){
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
   
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    
    if(height > 100){
      $('#header').addClass('header-white');
    } else{
      $('header').removeClass('header-white');
    }
  });

  // навигация меню
  // $('.sub-nav__list').slick({
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   swipe: true,
  //   variableWidth: true,
  //   arrows: false,
  //   // asNavFor: '.sub-nav__link--active',
  // });

  // // слайдер Преимущества
  // $(function() {
  //   $("#benefits-slider").on("init", function(event, slick){
  //     $("#benefits .pagination__active").text(slick.currentSlide + 1);
  //     $("#benefits .pagination__count").text(slick.slideCount);
  //   });
  //   $('#benefits-slider').slick({
  //     adaptiveHeight: true,
  //     rows: 2,
  //     dots: false,
  //     arrows: true,
  //     infinite: true,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     prevArrow: $('#benefits .pagination__prew'),
  //     nextArrow: $('#benefits .pagination__next'),

  //     responsive: [
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           rows: 3,
          
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //         }

  //       },{
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //         }

  //       }
  //    ]
  //   });
  //   $("#benefits-slider").on('afterChange', function(event, slick, currentSlide){
  //     $("#benefits .pagination__active").text(currentSlide + 1);
  //     $("#benefits .pagination__count").text(slick.slideCount);
  //   });
  
  //   $(window).on('resize', function() {
  //     $('#benefits-slider').slick('resize');
  //   });
  // });
    
  // // слайдер Экскурсии
  // slider ('excursion');
  // // слайдер Активности 
  // slider ('activity');
  //   // слайдер Музеи
  // slider ('museums');

  // function slider (id) {
  //   $(`#${id}-slider`).on("init", function(event, slick){
  //     $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
  //     $(`#${id} .pagination__count`).text(slick.slideCount);
  //   });
  //   $(`#${id}-slider`).slick({
  //     adaptiveHeight: true,
  //     rows: 2,
  //     dots: false,
  //     arrows: true,
  //     infinite: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     prevArrow: $(`#${id} .pagination__prew`),
  //     nextArrow: $(`#${id} .pagination__next`),
  //     responsive: [
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           rows: 1,
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       },
  //     ]
  //   });
  //   $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
  //     $(`#${id} .pagination__active`).text(currentSlide + 1);
  //     $(`#${id} .pagination__count`).text(slick.slideCount);
  //   });
    	
  // };

  // // слайдер События
  // sliderHorizontal(`events`);
  // // слайдер Туры
  // sliderHorizontal(`tours`);

  // function sliderHorizontal (id) {
  //   $(`#${id}-slider`).on("init", function(event, slick){
  //     $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
  //     $(`#${id} .pagination__count`).text(slick.slideCount);
  //   });
  //   $(`#${id}-slider`).slick({
  //     adaptiveHeight: true,
  //     rows: 3,
  //     dots: false,
  //     arrows: true,
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     prevArrow: $(`#${id} .pagination__prew`),
  //     nextArrow: $(`#${id} .pagination__next`),
  //     responsive: [
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           rows: 2,
  //         }
  //       },{
  //         breakpoint: 768,
  //         settings: {
  //           rows: 1,
  //         }
  //       },
  //     ]
  //   });
  //   $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
  //     $(`#${id} .pagination__active`).text(currentSlide + 1);
  //     $(`#${id} .pagination__count`).text(slick.slideCount);
  //   });
  // };

  // // слайдер Гостиницы
  // sliderVertical(`hotels`);
  // // слайдер Рестораны
  // sliderVertical(`restaurants`);

  // function sliderVertical(id) {
  //   $(`#${id}-slider`).on("init", function(event, slick){
  //     $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
  //     $(`#${id} .pagination__count`).text(slick.slideCount);
  //   });
  //   $(`#${id}-slider`).slick({
  //     rows: 1,
  //     dots: false,
  //     arrows: true,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,

  //     adaptiveHeight: true,
  //     accessibility: false,


  //     prevArrow: $(`#${id} .pagination__prew`),
  //     nextArrow: $(`#${id} .pagination__next`),
  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 2,
  //         }
  //       },{
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 1,
  //         }
  //       },
  //     ]
  //   });
  //   $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
  //     $(`#${id} .pagination__active`).text(currentSlide + 1);
  //     $(`#${id} .pagination__count`).text(slick.slideCount);
  //   });
  //   $(`#${id}-slider`).on('setPosition', function () {	
  //     console.log("ddd");
  //       $(this).find('.excursion-card').height('auto');		      
  //       var slickTrack = $(this).find('.slick-track');		      
  //       var slickTrackHeight = $(slickTrack).height();		      
  //       $(this).find('.excursion-card').css('height', slickTrackHeight + 'px');		      
  //     });	
  // }
  
  // //Отзывы
  // sliderPeople(`reviews`);
  // //Кто вам поможет
  // sliderPeople(`team`);

  // function sliderPeople(id) {
  //   $(`#${id}-slider`).on("init", function(event, slick){
  //     $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
  //     $(`#${id} .pagination__count`).text(slick.slideCount);
  //   });
  //   $(`#${id}-slider`).slick({
  //     rows: 1,
  //     dots: false,
  //     arrows: true,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     prevArrow: $(`#${id} .pagination__prew`),
  //     nextArrow: $(`#${id} .pagination__next`),
  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 2,
  //         }
  //       },{
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 2,
  //         }
  //       },{
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //         }
  //       },
  //     ]
  //   });
  //   $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
  //     $(`#${id} .pagination__active`).text(currentSlide + 1);
  //     $(`#${id} .pagination__count`).text(slick.slideCount);
  //   });
  // };


});


// var benefitsSwiper = new Swiper('#benefits-slider', {
//   slidesPerView: 3,
//   slidesPerColumn: 2,
  // navigation: {
  //   nextEl: '.pagination__next',
  //   prevEl: '.pagination__prew',
  // },
  // pagination: {
  //   el: '.pagination__num',
  //   type: 'fraction',
  //   renderFraction: function (currentClass, totalClass) {
  //     return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
  //            '<span class="pagination__text pagination__slash">/</span>'+
  //            '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
  //   },
  // },
  // breakpoints: {      
  //   320: {
  //     slidesPerColumn: 2,
  //     slidesPerView: 2,   
  //   },         
  //   768: {
  //     slidesPerColumn: 2,
  //     slidesPerView: 4,
  //   },         
  //   768: {
  //     slidesPerColumn: 2,
  //     slidesPerView: 4,
  //   }
  // }
// });


// var excursionSwiper = new Swiper('#excursion-slider', {

  
//   slidesPerColumn: 2,
//   slidesPerView: 2,
//   spaceBetween: 30,
//   lazyLoading: true,
//   wrapperClass: 'excursion__cards',
//   slideClass: 'excursion-card',
//   watchSlidesProgress: true,
//   watchSlidesVisibility: true,

//   // slidesOffsetBefore: 30,
//   // slidesOffsetAfter: 30,

//   navigation: {
//     nextEl: '.pagination__next',
//     prevEl: '.pagination__prew',
//   },
//   pagination: {
//     el: '.pagination__num',
//     type: 'fraction',
//     renderFraction: function (currentClass, totalClass) {
//       return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
//              '<span class="pagination__text pagination__slash">/</span>'+
//              '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
//     },
//   },
//   breakpoints: {  
//     // when window width is <= 320px     
//     320: {       
//        slidesPerView: 1,   
//     },     
//     // when window width is <= 480px     
//     768: {       
//        slidesPerView: 2,
//     },   

//     // when window width is <= 640px     
//     1200: {       
//        slidesPerView: 2,   
//     }
//   }
// });

// var hotelsSwiper = new Swiper('#hotels-slider', {
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 31,
//   lazyLoading: true,
//   navigation: {
//     nextEl: '.pagination__next',
//     prevEl: '.pagination__prew',
//   },
//   pagination: {
//     el: '.pagination__num',
//     type: 'fraction',
//     renderFraction: function (currentClass, totalClass) {
//       return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
//              '<span class="pagination__text pagination__slash">/</span>'+
//              '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
//     },
//   },
//   breakpoints: {  
//     // when window width is <= 320px     
//     320: {       
//        slidesPerView: 1,   
//     },     
//     // when window width is <= 480px     
//     768: {       
//        slidesPerView: 2,
//     },   

//     // when window width is <= 640px     
//     1200: {       
//        slidesPerView: 3,   
//     }
//   }
// });

