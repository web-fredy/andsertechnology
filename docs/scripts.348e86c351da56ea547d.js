function plugin_home(){!function(e){"use strict";if(e(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",(function(o){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){o.preventDefault();var a=e(this.hash);if(a.length){var t=a.offset().top;return e("#header").length&&(t-=e("#header").outerHeight(),e("#header").hasClass("header-scrolled")||(t+=20)),"#header"==e(this).attr("href")&&(t=0),e("html, body").animate({scrollTop:t},1500,"easeInOutExpo"),e(this).parents(".nav-menu, .mobile-nav").length&&(e(".nav-menu .active, .mobile-nav .active").removeClass("active"),e(this).closest("li").addClass("active")),e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").fadeOut()),!1}}})),e(".nav-menu").length){var o=e(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"});e("body").append(o),e("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),e("body").append('<div class="mobile-nav-overly"></div>'),e(document).on("click",".mobile-nav-toggle",(function(o){e("body").toggleClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").toggle()})),e(document).on("click",".mobile-nav .drop-down > a",(function(o){o.preventDefault(),e(this).next().slideToggle(300),e(this).parent().toggleClass("active")})),e(document).click((function(o){var a=e(".mobile-nav, .mobile-nav-toggle");a.is(o.target)||0!==a.has(o.target).length||e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").fadeOut())}))}else e(".mobile-nav, .mobile-nav-toggle").length&&e(".mobile-nav, .mobile-nav-toggle").hide();e(window).scroll((function(){e(this).scrollTop()>100?e("#header").addClass("header-scrolled"):e("#header").removeClass("header-scrolled")})),e(window).scrollTop()>100&&e("#header").addClass("header-scrolled"),e(window).scroll((function(){e(this).scrollTop()>100?e(".back-to-top").fadeIn("slow"):e(".back-to-top").fadeOut("slow")})),e(".back-to-top").click((function(){return e("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),e('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3}),e(window).on("load",(function(){var o=e(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});e("#portfolio-flters li").on("click",(function(){e("#portfolio-flters li").removeClass("filter-active"),e(this).addClass("filter-active"),o.isotope({filter:e(this).data("filter")})})),e(document).ready((function(){e(".venobox").venobox()}))})),e(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:1},768:{items:2},900:{items:3}}}),AOS.init({duration:800,easing:"ease-in-out"})}(jQuery)}function plugin_store(){!function(e){"use strict";e(window).scroll((function(){e(this).scrollTop()>100?e(".back-to-top").fadeIn("slow"):e(".back-to-top").fadeOut("slow")})),e(".back-to-top").click((function(){return e("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),e(".js-clone-nav").each((function(){e(this).clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")})),setTimeout((function(){var o=0;e(".site-mobile-menu .has-children").each((function(){var a=e(this);a.prepend('<span class="arrow-collapse collapsed">'),a.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+o}),a.find("> ul").attr({class:"collapse",id:"collapseItem"+o}),o++}))}),1e3),e("body").on("click",".arrow-collapse",(function(o){var a=e(this);a.closest("li").find(".collapse").hasClass("show")?a.removeClass("active"):a.addClass("active"),o.preventDefault()})),e(window).resize((function(){e(this).width()>768&&e("body").hasClass("offcanvas-menu")&&e("body").removeClass("offcanvas-menu")})),e("body").on("click",".js-menu-toggle",(function(o){e(this),o.preventDefault(),e("body").hasClass("offcanvas-menu")?(e("body").removeClass("offcanvas-menu"),e("body").find(".js-menu-toggle").removeClass("active")):(e("body").addClass("offcanvas-menu"),e("body").find(".js-menu-toggle").addClass("active"))})),e(document).mouseup((function(o){var a=e(".site-mobile-menu");a.is(o.target)||0!==a.has(o.target).length||e("body").hasClass("offcanvas-menu")&&(e("body").removeClass("offcanvas-menu"),e("body").find(".js-menu-toggle").removeClass("active"))})),e(window).scroll((function(){e(this).scrollTop()>100?e(".js-sticky-header").addClass("shrink"):e(".js-sticky-header").removeClass("shrink")})),e(".js-sticky-header").sticky({topSpacing:0}),e(".testimonial-carousel").owlCarousel({center:!0,items:1,loop:!0,margin:0,autoplay:!0,smartSpeed:1e3})}(jQuery),AOS.init({easing:"ease",duration:1e3,once:!0})}