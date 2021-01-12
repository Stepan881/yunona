jQuery(document).ready(function ($) {

  // открыть закрыть меню
  $(".header__btn").on('click', function (event) {
    if ($(event.target).closest(".header__btn")) {
      $('.nav-menu').addClass("nav-menu--open");
    }
  });
  $(".nav-menu__close").on('click', function (event) {
    event.preventDefault();
    if ($(event.target).closest(".nav-menu__close")) {
      $('.nav-menu').removeClass("nav-menu--open");
    }
  });
  $(".nav-menu__overlay").on('click', function (event) {
    event.preventDefault();
    if ($(event.target).closest(".nav-menu__close")) {
      $('.nav-menu').removeClass("nav-menu--open");
    }
  });

  // открыть закрыть popup
  $(".excursion-card__tobook").on('click', function (event) {
    event.preventDefault();
    if ($(event.target).closest(".excursion-card__tobook")) {
      $('.popup-form').addClass("popup-form--open");
      // $("body").css("overflow", "hidden");
    }
  });
  $(".popup-form__close").on('click', function (event) {
    event.preventDefault();
    if ($(event.target).closest(".popup-form__close")) {
      $('.popup-form').removeClass("popup-form--open");
      // $("body").css("overflow-y", "auto");
    }
  });
  $(".popup-form__overoverlay").on('click', function (event) {
    event.preventDefault();
    if ($(event.target).closest(".popup-form__overoverlay")) {
      $('.popup-form').removeClass("popup-form--open");
    }
  });

  // открыть закрыть popup-thanks
  var thanksPopup = {
    jsThanksPopup : $('.popup-thanks'),
    popupForm: $('.popup-form'),

    show: function() {
      this.jsThanksPopup.addClass('popup-thanks--open');
      this.popupForm.removeClass('popup-form--open');
    },
    close: function() {
      this.jsThanksPopup.removeClass('popup-thanks--open');
    },
  }
  $(".popup-thanks__overoverlay").on('click', function (event) {
    event.preventDefault();
    if ($(event.target).closest(".popup-thanks__overoverlay")) {
      thanksPopup.close();
    }
  });
  $(".popup-thanks__close").on('click', function (event) {
    event.preventDefault();
    if ($(event.target).closest(".popup-thanks__close")) {
      thanksPopup.close();
    }
  });

  // клик submit
  $('button[type="submit"]').on('click', function (event) {
    event.preventDefault();
    thanksPopup.show();
  });


  // main-nav навигация по странице
  $(window).scroll(function () {
    var $sections = $('section');
    $sections.each(function (i, el) {
      var top = $(el).offset().top - 100;
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('a.main-nav__link--active').removeClass('main-nav__link--active');
        $('a.main-nav__link[href="#' + id + '"]').addClass('main-nav__link--active');
      }
    })
  });

  // main-nav навигация по странице
  $(".main-nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });


  animateScroll(".first-screen__arrow");

  function animateScroll(id) {
    $(id).click(function (evt) {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
  }


  // меняет цвет header
  if ($('main.index').length) {
    $(window).scroll(function () {
      var height = $(window).scrollTop();
      if (height > 100) {
        $('#header').addClass('header-white');
      } else {
        $('#header').removeClass('header-white');
      }
    });
  } else {
    $('#header').addClass('header-white');
  }

  // меняет цвет булетов
  $(function ($) {
    var $nav = $('.main-nav__dot'),
      $win = $(window),
      winH = $win.height();

    $win.on("scroll", function () {
      // if ($(this).scrollTop() > winH) return;
      $nav.each((i, el) => {
        if ($(el).offset().top > winH) {
          $(el).addClass("main-nav__dot--white");
        } else {
          $(el).removeClass("main-nav__dot--white");
        }
      });
    });
  });
});

// Преимущества
const benefitsSwiper = new Swiper('#benefits-slider', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  lazyLoading: true,
  wrapperClass: 'benefits__wrapper-cards',
  slideClass: 'article-benefit',
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';
    },
  },
  breakpoints: {
    993: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,

    },
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  }
});

// Безопасность на отдыхе
const safetySwiper = new Swiper('#safety-slider', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  lazyLoading: true,
  wrapperClass: 'benefits__wrapper-cards',
  slideClass: 'article-benefit',
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',

    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

    },
  },
  breakpoints: {
    993: {
      slidesPerView: 4,
      slidesPerGroup: 4,

    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

  }
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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

    },
  },
  breakpoints: {
    993: {
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerColumn: 2,
      slidesPerView: 1,
      slidesPerGroup: 1,
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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

    },
  },
  breakpoints: {
    993: {
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerColumn: 2,
      slidesPerView: 1,
      slidesPerGroup: 1,
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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

    },
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

    },
  },
  breakpoints: {
    993: {
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerColumn: 2,
      slidesPerView: 1,
      slidesPerGroup: 1,
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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

    },
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

// События
const eventsSwiper = new Swiper('#events-slider', {
  calculateHeight: true,
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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

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
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';

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

// page-excursion-slider
const pageExcursionSwiper = new Swiper('#page-excursion-slider', {
  wrapperClass: 'page-excursion__slider-wrapper',
  slideClass: 'page-excursion__slide',
  lazyLoading: true,
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
    disabledClass: 'pagination__arrow--disable',
  },
  breakpoints: {
    993: {
      pagination: {
        el: '.pagination__num',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
            '<span class="pagination__text pagination__slash">/</span>' +
            '<span class="pagination__text pagination__count ' + totalClass + '"></span>';
        },
      },
    },
    320: {
      pagination: {
        clickable: true,
        bulletClass: 'boolets__item',
        el: '.boolets',
        type: 'bullets',
        bulletActiveClass: 'boolets__item--active',
        renderBullet: function (index, className) {
          return '<span class="boolets__item"></span>';
        }
      },
    },
  }

});

// page-events-slider
const pageEventsSwiper = new Swiper('#page-events__sliders', {
  wrapperClass: 'page-events__wrapper-slider',
  slideClass: 'page-events__slide',
  lazyLoading: true,
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
    disabledClass: 'pagination__arrow--disable',
  },
  breakpoints: {
    769: {
      pagination: {
        el: '.pagination__num',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
            '<span class="pagination__text pagination__slash">/</span>' +
            '<span class="pagination__text pagination__count ' + totalClass + '"></span>';
        },
      },
    },
    320: {
      pagination: {
        clickable: true,
        bulletClass: 'boolets__item',
        el: '.boolets',
        type: 'bullets',
        bulletActiveClass: 'boolets__item--active',
        renderBullet: function (index, className) {
          return '<span class="boolets__item"></span>';
        }
      },
    },
  }

});

const toursProgramSwiper = new Swiper('#tours-program-slider', {
  wrapperClass: 'tours-program__slider',
  slideClass: 'wrapper-slides',
  lazyLoading: true,
  navigation: {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
    disabledClass: 'pagination__arrow--disable',
  },
  pagination: {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';
    },
  },

});