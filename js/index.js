$(function () {
  // ハンバーガーメニュー
  $(".hamburger").on('click', function () {
    $(".hamburger").toggleClass("open");
    $(".header__wrapper").toggleClass("open");
    updateMenuText();
  });

  $(".nav__contents a").on('click', function () {
    $(".hamburger").removeClass("open");
    $(".header__wrapper").removeClass("open");
    updateMenuText();
  });

  function updateMenuText() {
    const menuText = $(".hamburger__text");
    menuText.text($(".hamburger").hasClass("open") ? "CLOSE" : "MENU");
  }

  // mv-slider
  $('.mv__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    cssEase: 'ease',
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false
  });

  // news-slider
  $('.news__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "10%",
    speed: 4000,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "5%",
        }
      }
    ]
  });

  // topへ戻るボタン
  $(window).on("scroll", function () {
    $("#pageTop").toggleClass("show", $(this).scrollTop() > 1000);
  });

  $('#pageTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
    return false;
  });

  // ページ内リンク
  $('a[href^="#"]').click(function (event) {
    event.preventDefault();
    const target = $($(this).attr("href"));
    const offset = 200;
    $('html, body').animate({ scrollTop: target.offset().top - offset }, 600, 'swing');
  });

  // コピー処理
  const sharedHTML = document.getElementById("sharedText").innerHTML;
  document.getElementById("copiedText").innerHTML = sharedHTML;

  const original = document.getElementById('hours-original');
  const clone = original.cloneNode(true);
  document.getElementById('hours-in-visual').appendChild(clone);

  // フェードアップ
  $(window).on('scroll load', function () {
    const winTop = $(window).scrollTop();
    const winHeight = $(window).height();

    $('.js-fadeup').each(function () {
      const targetTop = $(this).offset().top;
      $(this).toggleClass('is-inview', winTop + winHeight > targetTop + 10);
    });
  });

  // スライドイン
  $('.js-slidein').addClass('is-inview');
});
