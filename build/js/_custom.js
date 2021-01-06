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

  if ($('main.index').length) {
    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if(height > 100){
        $('#header').addClass('header-white');
      } else{
        $('header').removeClass('header-white');
      }
    });
  } else {
    $('#header').addClass('header-white');
  }

  // слайдер Преимущества
  sliderSlic(`benefits`);
   // слайдер Безопасность на отдыхе
  sliderSlic(`safety`);
  
  function sliderSlic(id) {
    $(`#${id}-slider`).on("init", function(event, slick){
      $(`#${id} .pagination__active`).text(slick.currentSlide + 1);
      $(`#${id} .pagination__active`).text(slick.slideCount);
    });
    $(`#${id}-slider`).slick({
      adaptiveHeight: true,
      swipe: false,
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $(`#${id} .pagination__prew`),
      nextArrow: $(`#${id} .pagination__next`),

      responsive: [
        {
          breakpoint: 992,
          settings: {
            rows: 3,
            swipe: true,          
            slidesToShow: 3,
            slidesToScroll: 1,
          }

        },{
          breakpoint: 768, 
          settings: {         
            swipe: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }

        }
     ]
    });
    $(`#${id}-slider`).on('afterChange', function(event, slick, currentSlide){
      $(`#${id} .pagination__active`).text(currentSlide + 1);
      $(`#${id} .pagination__count`).text(slick.slideCount);
    });
  
    $(window).on('resize', function() {
      $(`#${id}-slider`).slick('resize');
    });
  };
});

// Экскурсии
const excursionSwiper = new Swiper('#excursion-slider', {
  slidesToShow: 4,
  slidesPerColumn: 2,
  slidesPerView: 2,
  spaceBetween: 0,
  lazyLoading: true,
  wrapperClass: 'excursion__cards',
  slideClass: 'wrapper-slides',

  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {  
    993: {       
      slidesPerColumn: 2,
       slidesPerView: 2,
    },   
    769: {       
      slidesPerColumn: 2,
       slidesPerView: 1,
    },   
    320: {       
      slidesPerColumn: 1,
      slidesPerView: 1,   
    },   

  }
});

// Туры
const toursSwiper = new Swiper('#tours-slider', {
  // autoHeight: true,
  // calculateHeight:true,
  slidesToShow: 3,
  slidesPerColumn: 3,
  slidesPerView: 1,
  spaceBetween: 0,
  lazyLoading: true,
  wrapperClass: 'tours__cards',
  slideClass: 'wrapper-slides',

  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {  
    993: {       
      slidesToShow: 3,
      slidesPerColumn: 3,
    },   
    769: {       
      slidesToShow: 2,
      slidesPerColumn: 2,
    },   
    320: {       
      slidesToShow: 1,
      slidesPerColumn: 1,
    },   

  }
});

// Активности
const activitySwiper = new Swiper('#activity-slider', {
  slidesToShow: 6,
  slidesPerColumn: 2,
  slidesPerView: 2,
  spaceBetween: 0,
  lazyLoading: true,
  wrapperClass: 'activity__cards',
  slideClass: 'wrapper-slides',

  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {  
    993: {       
      slidesPerColumn: 2,
       slidesPerView: 2,
    },   
    769: {       
      slidesPerColumn: 2,
       slidesPerView: 1,
    },   
    320: {       
      slidesPerColumn: 1,
      slidesPerView: 1,   

    },   
  }
});

// Гостиницы
const hotelsSwiper = new Swiper('#hotels-slider', {
  slidesPerView: 3,
  lazyLoading: true,
  wrapperClass: 'tours__cards',
  slideClass: 'wrapper-slides',
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {   
    1201: {       
       slidesPerView: 3,   
    },   
    769: {       
       slidesPerView: 2,
    },    
    320: {       
       slidesPerView: 1,   
    }
  }
});

// Музеи
const museumsSwiper = new Swiper('#museums-slider', {
  slidesToShow: 6,
  slidesPerColumn: 2,
  slidesPerView: 2,
  spaceBetween: 0,
  lazyLoading: true,
  wrapperClass: 'activity__cards',
  slideClass: 'wrapper-slides',

  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {  
    993: {       
      slidesPerColumn: 2,
       slidesPerView: 2,
    },   
    769: {       
      slidesPerColumn: 2,
       slidesPerView: 1,
    },   
    320: {       
      slidesPerColumn: 1,
      slidesPerView: 1,   

    },   

  }
});

// Рестораны
const restaurantsSwiper = new Swiper('#restaurants-slider', {
  slidesPerView: 3,
  lazyLoading: true,
  wrapperClass: 'tours__cards',
  slideClass: 'wrapper-slides',
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {   
    1201: {       
       slidesPerView: 3,   
    },   
    769: {       
       slidesPerView: 2,
    },    
    320: {       
       slidesPerView: 1,   
    }
  }
});

// События
const eventsSwiper = new Swiper('#events-slider', {
  calculateHeight:true,
  slidesToShow: 3,
  slidesPerColumn: 3,
  slidesPerView: 1,
  spaceBetween: 0,
  lazyLoading: true,
  wrapperClass: 'tours__cards',
  slideClass: 'wrapper-slides',

  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {  
    993: {       
      slidesToShow: 3,
      slidesPerColumn: 3,
    },   
    769: {       
      slidesToShow: 2,
      slidesPerColumn: 2,
    },   
    320: {       
      slidesToShow: 1,
      slidesPerColumn: 1,
    },   

  }
});

// Отзывы
const reviewsSwiper = new Swiper('#reviews-slider', {
  slidesPerView: 3,
  lazyLoading: true,
  wrapperClass: 'reviews__cards',
  slideClass: 'wrapper-slides',
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {   
    1201: {       
       slidesPerView: 3,   
    },   
    769: {       
       slidesPerView: 2,
    },    
    320: {       
       slidesPerView: 1,   
    }
  }
});

// Кто вам поможет
const teamSwiper = new Swiper('#team-slider', {
  slidesToShow: 6,
  slidesPerColumn: 2,
  slidesPerView: 3,
  spaceBetween: 0,
  lazyLoading: true,
  wrapperClass: 'reviews__cards',
  slideClass: 'wrapper-slides',

  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active '+ currentClass +'"></span>' +
             '<span class="pagination__text pagination__slash">/</span>'+
             '<span class="pagination__text pagination__count '+ totalClass +'"></span>';
  
    },
  },
  breakpoints: {  
    993: {       
      slidesPerColumn: 2,
       slidesPerView: 3,
    },   
    769: {       
      slidesPerColumn: 2,
       slidesPerView: 1,
    },   
    320: {       
      slidesPerColumn: 1,
      slidesPerView: 1,   

    },   

  }
});