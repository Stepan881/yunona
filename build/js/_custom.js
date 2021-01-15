jQuery(document).ready(function ($) {

  var popup = {
    popupTel: $('.form-tel'),
    popupHotels: $('.form-hotels'),
    popupTours: $('.form-tours'),
    popupClose: $('.popup-form'),

    showTel: function() {
      console.log(this);
      this.popupTel.addClass("popup-form--open");
    },
    showHotels: function() {
      this.popupHotels.addClass("popup-form--open");
    },
    showTours: function() {
      this.popupTours.addClass("popup-form--open");
    },
    closeForm: function() {
      this.popupClose.removeClass("popup-form--open");
    },
  }

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
  
  var navMenu = {
    headerBtn : $(".header__btn"),
    navMenu: $('.nav-menu'),

    show: function() {
      this.navMenu.addClass("nav-menu--open");
    },
    close: function() {
      this.navMenu.removeClass("nav-menu--open");
    },
  }

  function popupThanks () {
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
  }
  popupThanks();

  // открыть закрыть меню
  function navMenuOpen () {
    $(".header__btn").on('click', function (event) {
      if ($(event.target).closest(".header__btn")) {
        navMenu.show();
      }
    });
    $(".nav-menu__close").on('click', function (event) {
      event.preventDefault();
      if ($(event.target).closest(".nav-menu__close")) {
        navMenu.close();
      }
    });
    $(".nav-menu__overlay").on('click', function (event) {
      event.preventDefault();
      if ($(event.target).closest(".nav-menu__close")) {
        navMenu.close();
      }
    });
  }
  navMenuOpen();

  // Закрывает форму
  function closeForms () {
    $('.popup-form').each(function( index ) {
      
      $(".popup-form__overoverlay").on('click', function (event) {
        event.preventDefault();
        if ($(event.target).closest(".popup-form__overoverlay")) {
          popup.closeForm();
        }
      });
      $(".popup-form__close").on('click', function (event) {
        event.preventDefault();
        if ($(event.target).closest(".popup-form__close")) {
          popup.closeForm();
        }
      });

    });
    $(document).on('keydown', function(e) {
      if (e.keyCode == 27)
        popup.closeForm();
        thanksPopup.close();
        navMenu.close();

    });
  }
  closeForms();

  // открыть форму
  function popupOpenPopup () {
    $(`.js-popup-tel`).on('click', function (event) {
      event.preventDefault();
      if ($(event.target).closest(".js-popup-tel")) {
        popup.showTel();
      }
    });
    $(`.js-popup-hotels`).on('click', function (event) {
      event.preventDefault();
      if ($(event.target).closest(".js-popup-hotels")) {
        popup.showHotels();
      }
    });
    $(`.js-popup-tours`).on('click', function (event) {
      event.preventDefault();
      if ($(event.target).closest(".js-popup-tours")) {
        popup.showTours();
      }
    });
  }
  popupOpenPopup();

  // клик submit
  $('button[type="submit"]').on('click', function (event) {
    event.preventDefault();
    thanksPopup.show();
  });

  // main-nav навигация по странице
  function scrollMainNav () {  
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
  }
  scrollMainNav();

  // nav-menu навигация по странице
  function scrollNav () {    
    $(window).scroll(function () {
      var $sections = $('section');
      $sections.each(function (i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        
        if (scroll > top && scroll < bottom) {
          $('.nav-menu__item').removeClass('nav-menu__item--active');
          $('a.nav-menu__link[href="./index.html#' + id + '"]').parent('.nav-menu__item').addClass('nav-menu__item--active');
        }
      })
    });

    if($("main").hasClass("index")) {
      $(".nav-menu__list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href').split('#');
        id = ('#' + id[id.length - 1]);
        var top = $(id).offset().top;
        $('html').animate({
          scrollTop: top
        }, 800);
        navMenu.close();
      });
    }
  } 
  scrollNav();

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
  animateScroll(".first-screen__arrow");

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


let benefitsSwiper = null;
let benefitsSwiper2 = null;
let safetySwiper = null;

const navigationTemplate = () => {
  return {
    nextEl: '.pagination__next',
    prevEl: '.pagination__prew',
    disabledClass: 'pagination__arrow--disable',
  }
}
const paginationTemplate = () => {
  return {
    el: '.pagination__num',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="pagination__text pagination__active ' + currentClass + '"></span>' +
        '<span class="pagination__text pagination__slash">/</span>' +
        '<span class="pagination__text pagination__count ' + totalClass + '"></span>';
    },
  }
}

const breacpointsBenefitsTemplates = () => {
  return {
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
}

const benefitsSafetySlider = () => {
  // Преимущества
  benefitsSwiper = new Swiper('#benefits-slider', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    lazyLoading: true,
    wrapperClass: 'benefits__wrapper-cards',
    slideClass: 'article-benefit',
    navigation: navigationTemplate(),
    pagination: paginationTemplate(),
    breakpoints: breacpointsBenefitsTemplates(),
  });

  benefitsSwiper2 = new Swiper('#benefits-slider2', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    lazyLoading: true,
    wrapperClass: 'benefits__wrapper-cards',
    slideClass: 'article-benefit',
    navigation: navigationTemplate(),
    pagination: paginationTemplate(),
    breakpoints: breacpointsBenefitsTemplates(),
  });

  // Безопасность на отдыхе
  safetySwiper = new Swiper('#safety-slider', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    lazyLoading: true,
    wrapperClass: 'benefits__wrapper-cards',
    slideClass: 'article-benefit',
    navigation: navigationTemplate(),
    pagination: paginationTemplate(),
    breakpoints: breacpointsBenefitsTemplates(),
  });
}


const breacpointsExcursionTemplates = () => {
  return {
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
}
// Экскурсии
const excursionSwiper = new Swiper('#excursion-slider', {
  slidesToShow: 4,
  slidesPerColumn: 2,
  slidesPerView: 2,
  spaceBetween: 0,
  lazyLoading: true,
  wrapperClass: 'excursion__cards',
  slideClass: 'wrapper-slides',
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
  breakpoints: breacpointsExcursionTemplates(),
});

// Туры
const toursSwiper = new Swiper('#tours-slider', {
  slidesToShow: 3,
  slidesPerColumn: 3,
  slidesPerView: 1,
  spaceBetween: 0,
  lazyLoading: true,
  wrapperClass: 'tours__cards',
  slideClass: 'wrapper-slides',
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
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
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
  breakpoints: breacpointsExcursionTemplates(),
});


// Гостиницы
const hotelsSwiper = new Swiper('#hotels-slider', {
  slidesPerView: 3,
  lazyLoading: true,
  wrapperClass: 'tours__cards',
  slideClass: 'wrapper-slides',
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
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
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
  breakpoints: breacpointsExcursionTemplates(),
});

// Рестораны
const restaurantsSwiper = new Swiper('#restaurants-slider', {
  slidesPerView: 3,
  lazyLoading: true,
  wrapperClass: 'tours__cards',
  slideClass: 'wrapper-slides',
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
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
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
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
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
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
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),
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
  navigation: navigationTemplate(),
  
  breakpoints: {
    993: {
      pagination: paginationTemplate(),
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
  navigation: navigationTemplate(),
 
  breakpoints: {
    769: {
      pagination: paginationTemplate(),
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
  navigation: navigationTemplate(),
  pagination: paginationTemplate(),

});

window.addEventListener('resize', function(event){

  if (window.innerWidth > 992) {  
    if (benefitsSwiper.destroy === true && safetySwiper.destroy === true) {
      benefitsSwiper.destroy();
      benefitsSwiper2.destroy();
      safetySwiper.destroy();
    }
  } else {
    if (benefitsSwiper.destroy === true && safetySwiper.destroy === true) {
      benefitsSafetySlider();  
    }
  }
});

// Преимущества переключатель 
function benefitsToggle() {
  const firstScreen = document.querySelector(`#benefits`);

  if (!firstScreen) {
    return;
  }
  benefitsSafetySlider();
  const menu = firstScreen.querySelectorAll(`.sub-nav__link`);
  const benefitsWrapper = firstScreen.querySelectorAll(`.benefits__wrapper`);

  menu[0].classList.add(`sub-nav__link--active`);
  benefitsWrapper.forEach(link => {
    link.classList.add(`benefits__wrapper--close`);
  });
  benefitsWrapper[0].classList.remove(`benefits__wrapper--close`);

  menu.forEach((el, i) => {
    el.addEventListener(`click`, evt => {
      evt.preventDefault();

      benefitsWrapper.forEach(link => {
        link.classList.add(`benefits__wrapper--close`);
      });
      
      menu.forEach(link => {
        link.classList.remove(`sub-nav__link--active`);
      });
      el.classList.add(`sub-nav__link--active`);
      benefitsWrapper[i].classList.remove(`benefits__wrapper--close`);
    })
  });
  
}
benefitsToggle();
