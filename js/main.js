$(function () {
  // 上部スライダー
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

  // 下部スライダー
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

  // Worksスライダー
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

  // スムーススクロール
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

  $(".hamburger").click(function () {
    $(this).toggleClass("open");
    $(".nav-menu").toggleClass("open");
  });
  $(".nav-menu a").click(function () {
    $(".hamburger").removeClass("open");
    $(".nav-menu").removeClass("open");
  });

  // モーダルウィンドウ
  $(".gallery-modal").modaal({
    type: "image",
    overlay_close: true,
    before_open: function () {
      $("html").css("overflow-y", "hidden");
    },
    after_close: function () {
      $("html").css("overflow-y", "scroll");
    },
  });

  const navbar = $(".pagetop");
  const showHeight = 500;

  $(window).scroll(function () {
    navbar.css("opacity", $(this).scrollTop() >= showHeight ? 1 : 0);
  });

  $("a[href='#']").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow", function () {
      navbar.css("opacity", 0);
    });
    return false;
  });
});
