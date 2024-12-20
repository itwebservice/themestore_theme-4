$(document).ready(function () {
  // ! Trending Tours slider
  if ($(".js-trendingTours").length) {
    $(".js-trendingTours").owlCarousel({
      items: 4,
      nav: true,
      dots: false,
      margin: 24,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1024: {
          items: 4,
        },
      },
    });
  }

  // ! Trending Tours slider
  if ($(".js-singleItem").length) {
    $(".js-singleItem").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      margin: 24,
      smartSpeed: 800, // Duration of the transition
      easing: "easeInOutQuad", // Custom easing function for jQuery Easing
      animateOut: "fadeOut", // Fade out animation
      animateIn: "fadeIn",
      navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
      ],
    });
  }

  // ! Testimonial slider
  if ($(".js-testimonials").length) {
    $(".js-testimonials").owlCarousel({
      items: 2,
      nav: true,
      dots: false,
      margin: 42,
      navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
      },
    });
  }

  // ! Gallery slider
  if ($(".js-gallerySlider").length) {
    $(".js-gallerySlider").owlCarousel({
      items: 4,
      nav: true,
      dots: false,
      margin: 24,
      navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 3,
        },
        960: {
          items: 4,
        },
      },
    });
  }

  // ! Partner Slider
  if ($(".js-partnerCardSlider").length) {
    $(".js-partnerCardSlider").owlCarousel({
      items: 5,
      dots: false,
      autoplay: true,
      margin: 24,
      nav: true,
      navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        420: {
          items: 2,
        },
        560: {
          items: 3,
        },
        768: {
          items: 4,
        },
        960: {
          items: 5,
        },
      },
    });
  }

  // ! Blog slider
  if ($(".js-blogSlider").length) {
    $(".js-blogSlider").owlCarousel({
      items: 3,
      nav: true,
      dots: false,
      margin: 48,
      navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>',
        '<i class="fa-solid fa-arrow-right-long"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        960: {
          items: 3,
        },
      },
    });
  }

  if ($(".subMenus").length) {
    $(".subMenus").hover(function () {
      $(".dropdown-toggle", this).trigger("click");
    });
  }

  // ! Swipe card gallery
  if ($(".js-swiperGallery").length) {
    const swiper = new Swiper(".js-swiperGallery", {
      effect: "cards",
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Select 2
  $(".js-advanceSelect").select2();

  // Calendar
  $(".js-calendar")
    .datepicker({
      format: "dd/mm/yyyy",
      todayHighlight: true,
      autoclose: true,
    })
    .datepicker("setDate", new Date());
});