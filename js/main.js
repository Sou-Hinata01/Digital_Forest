// メインビジュアルカルーセル
$(".mv-slider").slick({
  fade: true,
  autoplay: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 5000,
  speed: 1500,
  infinite: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  touchMove: false,
});

// Aboutカルーセル上部
$(".slider-top").slick({
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: '20%',
  autoplaySpeed: 0,
  speed: 9000,
  infinite: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  cssEase: "linear",
  slideToShow: 1,
  slideToScroll: 1,
});

// Aboutカルーセル下部
$(".slider-btm").slick({
  arrows: false,
  autoplay: true,
  centerMode: true,
  centerPadding: '20%',
  autoplaySpeed: 0,
  speed: 9000,
  infinite: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  cssEase: "linear",
  slideToShow: 1,
  slideToScroll: 1,
  rtl: true,
});


// ナビゲーションバー固定化
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 400) {
    $(".navigation").addClass("fixed");

    // fixedに変更された後のスタイルを調整
    $("#works").css({
      "margin-top": "180px",
    });

  } else {
    $(".navigation").removeClass("fixed");

    // 元のflexに戻った時のスタイル
    $("#works").css({
      "margin-top": "auto",
    });
  }
});

$(document).ready(function() {
  // 変数を追加して、スクロール中かどうかを管理します
  var isScrolling = false;

  // ナビゲーションバーの高さを取得
  var navbarHeight = $('.navigation').outerHeight();

  // ナビゲーションバーのリンクがクリックされたときのスムーススクロール処理
  $('.navigation a, .site-title a').on('click', function(event) {
    // スクロール中はクリックを無効化します
    if (isScrolling) {
      return;
    }

    event.preventDefault();

    // クリックされたリンクのhref属性を取得
    var target = $(this).attr('href');

    // 対象要素の位置を取得
    var targetPosition = $(target).offset().top;

    // ナビゲーションバーの高さを考慮してスクロール位置を調整
    var adjustedPosition = targetPosition - navbarHeight;

    // スムーススクロール
    isScrolling = true; // スクロール中フラグを立てる
    $('html, body').animate({
      scrollTop: adjustedPosition
    }, 500, function() {
      isScrolling = false; // スクロールが終了したらフラグを戻す
    });

    // URLのハッシュを変更して履歴に残らないようにする
    history.replaceState(null, null, target);
  });
});



// ハンバーガーメニュー
$(".hamburger").click(function(){
  $(this).toggleClass('active');
})

// モーダルウィンドウ
function showModal(){
  $('.modalwrap').fadeIn(300);
  $('.modalwrap').show();
  $('.modal-backdrop').fadeIn(300);
  $('.modal-backdrop').show();
}

function closeModal(){
  $('.modalwrap').fadeOut(300);
  $('.modal-backdrop').fadeOut(300);
}

$('.modal').on('click', function(event){
  event.preventDefault();
  showModal();
});

$('.closemodal').on('click', closeModal);
$('.modal-backdrop').on('click', closeModal);