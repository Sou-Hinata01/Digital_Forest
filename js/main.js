$(function () {
  $(".slider-top").slick({
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "38%",
    autoplaySpeed: 0,
    speed: 9000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
    slideToShow: 5,
    slideToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1, 
          centerPadding: "25%",
        },
      },
    ],
  });

  $(".slider-btm").slick({
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "38%",
    autoplaySpeed: 0,
    speed: 9000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
    slideToShow: 5,
    slideToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1, 
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1, 
          centerPadding: "10%",
        },
      },
    ],
  });

  $(".work-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></div>',
      responsive: [
        {
          breakpoint: 1000, //モニターの横幅が1000px以下の見せ方
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1, 
            centerPadding: "50px",
          },
        },
      ],
  });

  $(".pagetop,.nav-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });

  $('.nav-menu a[href*="#"]').click(function () {
    var elmHash = $(this).attr("href");
    var pos = $(elmHash).offset().top;
    $("body,html").animate({ scrollTop: pos }, 500);
    return false;
  });

  $('.hamburger').click(function(){
    $(this).toggleClass('open');
    $('.nav-menu').toggleClass('open');
  });
  $('.nav-menu a').click(function(){
    $('.hamburger').removeClass('open');
    $('.nav-menu').removeClass('open');
  });
});
