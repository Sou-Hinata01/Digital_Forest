$(function () {
  // スムーススクロール
  $(".pagetop,.nav-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });

// ページトップボタンのクラス名
const navbar = $(".pagetop");

// ボタンを表示するスクロール位置
const showHeight = 500;

// ウィンドウのスクロールイベントを設定
$(window).scroll(function () {
  // 現在のスクロール位置がshowHeight以上ならばボタンを表示
  // それ以外なら非表示）
  navbar.css("opacity", $(this).scrollTop() >= showHeight ? 1 : 0);
});

  // 背景パーティクル
  particlesJS("particles-js", {
    particles: {
      // パーティクルの数
      number: { value: 14, density: { enable: true, value_area: 500 } },

      // パーティクルの色
      color: { value: "#ffffff" },

      // パーティクルの形状
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000" },
        polygon: { nb_sides: 6 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },

      // パーティクルの透明度
      opacity: {
        value: 0.3,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },

      // パーティクルのサイズ
      size: {
        value: 120,
        random: true,
        anim: { enable: false, speed: 10, size_min: 40, sync: false },
      },

      // パーティクル同士を繋ぐ線
      line_linked: {
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2,
      },

      // パーティクルの動き
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
});
