$(function () {
  $(".slider-top li,.slider-btm li").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("active"); // 画像が画面内に表示されたら、アニメーションクラスを追加
    }
  });

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
        breakpoint: 769, //モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow: 2, //スライドを画面に2枚見せる
        },
      },
      {
        breakpoint: 426, //モニターの横幅が426px以下の見せ方
        settings: {
          slidesToShow: 1.5, //スライドを画面に1.5枚見せる
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
        breakpoint: 769, //モニターの横幅が769px以下の見せ方
        settings: {
          slidesToShow: 2, //スライドを画面に2枚見せる
        },
      },
      {
        breakpoint: 426, //モニターの横幅が426px以下の見せ方
        settings: {
          slidesToShow: 1.5, //スライドを画面に1.5枚見せる
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
    autoplaySpeed: 2000,
    prevArrow: '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></div>',  });
  
  $('.pagetop,.nav-top').click(function () { 
    $('body,html').animate({
      scrollTop:0
    },400);
  });
  
  $('.nav-menu a[href*="#"]').click(function () { 
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos}, 500);
    return false;
  });

});
