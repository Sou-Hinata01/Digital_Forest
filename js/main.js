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
  centerPadding: "20%",
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
  centerPadding: "20%",
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
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 400) {
    $(".navigation").addClass("fixed");

    // fixedに変更された後のスタイルを調整
    $("#gallery").css({
      "margin-top": "80px",
    });
  } else {
    $(".navigation").removeClass("fixed");

    // 元のflexに戻った時のスタイル
    $("#gallery").css({
      "margin-top": "auto",
    });
  }
});

$(document).ready(function () {
  // 変数を追加し、スクロール中かどうかの管理
  var isScrolling = false;

  // ナビゲーションバーの高さを取得
  var navbarHeight = $(".navigation").outerHeight();

  // ナビゲーションバーのリンクがクリックされたときのスムーススクロール処理
  $(".navigation a, .site-title a").on("click", function (event) {
    // スクロール中のクリック無効化
    if (isScrolling) {
      return;
    }

    event.preventDefault();

    // クリックされたリンクのhref属性を取得
    var target = $(this).attr("href");
    var $targetElement = $(target); // $targetElementを追加

    // 対象要素が存在するかをチェック
    if ($targetElement.length) {
      var targetPosition = $targetElement.offset().top;
      // ナビゲーションバーの高さを考慮してスクロール位置を調整
      var adjustedPosition = targetPosition - navbarHeight;

      // スムーズスクロール
      isScrolling = true; // スクロール中フラグを立てる
      $("html, body").animate(
        {
          scrollTop: adjustedPosition,
        },
        500,
        function () {
          isScrolling = false; // スクロールが終了したらフラグを戻す
        }
      );

      // URLのハッシュを変更して履歴に残らないようにする
      history.replaceState(null, null, target);
    }
  });
});

// ページトップリンク
$(".site-title").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

// ハンバーガーメニュー
$(".hamburger").click(function () {
  $(this).toggleClass("active");
});

// スクロール禁止の関数
function disableScroll() {
  // スクロールを無効化するためのCSSをbodyに追加
  $('body').css('overflow', 'hidden');
}

// スクロール許可の関数
function enableScroll() {
  // スクロールを有効化するためのCSSをbodyから削除
  $('body').css('overflow', 'auto');
}


// モーダルウィンドウ
function showModal(target) {
  $(target).fadeIn(300);
  $(".modal-backdrop").fadeIn(300);
  // スクロールを禁止
  // disableScroll();
  $("#gallery, #about").css({
    "z-index": "10",
  });
}

function closeModal(target) {
  $(target).fadeOut(300);
  $(".modal-backdrop").fadeOut(300);
  // スクロールを許可
  // enableScroll();
  $("#gallery, #about").css({
    "z-index": "1",
  });
}

$(".modal").on("click", function (event) {
  event.preventDefault();
  const targetModal = $(this).data("target");
  showModal(targetModal);
});

$(".closemodal").on("click", function (event) {
  const targetModal = $(this).closest(".modalwrap");
  closeModal(targetModal);
});

$(".modal-backdrop").on("click", function (event) {
  closeModal(".modalwrap");
});

// Vanta.fog
VANTA.FOG({
  el: "#fog",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xf7ffe9,
  midtoneColor: 0xfcfcfc,
  lowlightColor: 0x98fc63,
  baseColor: 0xffffff,
  speed: 2.60,
});