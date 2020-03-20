/**
* Template Name: Squadfree - v2.0.0
* Template URL: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
function plugin_home(){
  !(function($) {
    "use strict";

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
          var scrollto = target.offset().top;
          var scrolled = 20;
          if ($('#header').length) {
            scrollto -= $('#header').outerHeight()
            if (!$('#header').hasClass('header-scrolled')) {
              scrollto += scrolled;
            }
          }
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({class: 'mobile-nav d-lg-none'});
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });
      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {

        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });
      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }

    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });

    // Porfolio isotope and filter
    $(window).on('load', function() {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
      $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });
      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function() {
        $('.venobox').venobox();
      });
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        900: {
          items: 3
        }
      }
    });

    // Initi AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out"
    });

  })(jQuery);
}

function plugin_store() {
    /**
  * Template Name: SoftLand - v2.0.0
  * Template URL: https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  */
  (function($) {
    "use strict";
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });
    var siteMenuClone = function() {
      $('.js-clone-nav').each(function() {
        var $this = $(this);
        $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
      });
      setTimeout(function() {
        var counter = 0;
        $('.site-mobile-menu .has-children').each(function() {
          var $this = $(this);
          $this.prepend('<span class="arrow-collapse collapsed">');
          $this.find('.arrow-collapse').attr({
            'data-toggle': 'collapse',
            'data-target': '#collapseItem' + counter,
          });
          $this.find('> ul').attr({
            'class': 'collapse',
            'id': 'collapseItem' + counter,
          });
          counter++;
        });
      }, 1000);
      $('body').on('click', '.arrow-collapse', function(e) {
        var $this = $(this);
        if ($this.closest('li').find('.collapse').hasClass('show')) {
          $this.removeClass('active');
        } else {
          $this.addClass('active');
        }
        e.preventDefault();
      });
      $(window).resize(function() {
        var $this = $(this),
          w = $this.width();
        if (w > 768) {
          if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu');
          }
        }
      })
      $('body').on('click', '.js-menu-toggle', function(e) {
        var $this = $(this);
        e.preventDefault();
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
          $('body').find('.js-menu-toggle').removeClass('active');
        } else {
          $('body').addClass('offcanvas-menu');
          $('body').find('.js-menu-toggle').addClass('active');
        }
      })
      // click outisde offcanvas
      $(document).mouseup(function(e) {
        var container = $(".site-mobile-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu');
            $('body').find('.js-menu-toggle').removeClass('active');
          }
        }
      });
    };
    siteMenuClone();
    var siteScroll = function() {
      $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > 100) {
          $('.js-sticky-header').addClass('shrink');
        } else {
          $('.js-sticky-header').removeClass('shrink');
        }
      })
    };
    siteScroll();
    var siteSticky = function() {
      $(".js-sticky-header").sticky({
        topSpacing: 0
      });
    };
    siteSticky();
    var siteOwlCarousel = function() {
      $('.testimonial-carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 1000,
      });
    };
    siteOwlCarousel();
  })(jQuery);

  AOS.init({
    easing: 'ease',
    duration: 1000,
    once: true
  });
}
