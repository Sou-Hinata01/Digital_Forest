// 「hamburger」IDを持つ要素にクリックイベントを追加
document.getElementById("hamburger").addEventListener("click", function () {
  // 「header__menu」クラスを持つ要素を取得し、menu変数に代入
  const menu = document.querySelector(".header__menu");
  // 「hamburger」IDを持つ要素を取得し、hamburger変数に代入
  const hamburger = document.getElementById("hamburger");

  // 「menu」のクラスリストに「open」をトグル（追加/削除）する
  menu.classList.toggle("open");
  // 「hamburger」のクラスリストに「active」をトグル（追加/削除）する
  hamburger.classList.toggle("active");
});

// スムーススクロール
// headerの高さを取得し、headerHeightに代入
const headerHeight = document.querySelector("header").offsetHeight;

//querySelectorAllメソッドを使用してページ内のhref属性が#で始まるものを選択
//forEachメソッドを使って、各アンカータグにクリックされた時の処理
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();

    // クリックされたアンカータグのhref属性を取得
    const href = anchor.getAttribute("href");

    // href属性の#を取り除いた部分と一致するIDを取得
    const target = document.getElementById(href.replace("#", ""));

    //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
    //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
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
