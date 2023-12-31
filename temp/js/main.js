$(function () {
  const fadeInElement = (element, delay) => {
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateX(0)";
    }, delay);
  };

  $(".mainvisual").fadeIn(1000);

  const animateElements = (elements, initialDelay) => {
    elements.forEach((item, index) => {
      fadeInElement(item, index * 200 + initialDelay);
    });
  };

  const listItems = document.querySelectorAll(".nav-list");
  animateElements(listItems, 500);

  const title = document.querySelectorAll("#top .site-title");
  animateElements(title, 300);

  const scrollText = document.querySelectorAll(".scroll");
  animateElements(scrollText, 1000);

  const navbar = $("#header");
  const showHeight = 100;

  $(window).scroll(function () {
    navbar.css("opacity", $(this).scrollTop() >= showHeight ? 1 : 0);
  });

  $("a[href='#']").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow", function () {
      navbar.css("opacity", 0);
    });
    return false;
  });

  $(".navi ul li").hover(
    function () {
      $(this).stop().animate({ left: "10px" }, 500);
    },
    function () {
      $(this).stop().animate({ left: "0" }, 500);
    }
  );

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