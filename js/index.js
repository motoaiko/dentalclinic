document.addEventListener('DOMContentLoaded', function () {
/* ---------------- */
// ハンバーガーメニュー
/* ---------------- */
$(function () {
    
    $(".hamburger").on('click',function () {
    $(".hamburger").toggleClass("open");
    $(".header__wrapper").toggleClass("open");
    updateMenuText();
    });

    $(".header__nav a").on('click',function () {
    $(".hamburger").removeClass("open");
    $(".header__wrapper").removeClass("open");
    updateMenuText();
    });

    function updateMenuText() {
        const menuText = $(".hamburger__text");
        if ($(".hamburger").hasClass("open")) {
            menuText.text("CLOSE");
        } else {
            menuText.text("MENU");
        }
    }
});

/* ---------------- */
/* mv-slider */
/* ---------------- */

$(document).ready(function(){
  $('.mv__slider').slick({
    slidesToShow: 1,// 画面表示1枚
    slidesToScroll: 1,// 1枚ずつスクロール
    autoplay: true,
    autoplaySpeed: 3000,// 一枚の持続時間
    speed: 1500,//1.5秒かけてスライド
    cssEase: 'ease',// 
    infinite: true,// 無限ループ
    arrows: false,// 矢印非表示
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false // ← 高さを固定するために false に
  });
});

/* ---------------- */
/* news-slider */
/* ---------------- */

$(document).ready(function(){
  $('.news__slider').slick({
    slidesToShow: 5,// 画面表示
    slidesToScroll: 1,// 1枚ずつスクロール
    autoplay: true,
    autoplaySpeed: 0,// 一枚の持続時間
    centerMode: true,
    centerPadding: "10%",
    speed: 4000,//スライド秒
    cssEase: 'linear',// 
    infinite: true,// 無限ループ
    arrows: false,// 矢印非表示
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
});


/* ---------------- */
/* topへ戻るボタン */
/* ---------------- */
$(window).on("scroll",function(){
  if($(this).scrollTop()>1000){
    $("#pageTop").addClass("show");
  }else{
    $("#pageTop").removeClass("show")
  }
});

/* ---------------- */
/* キャッチコピー（トップとハンバーガーメニューにコピー）*/
/* ---------------- */
const sharedHTML = document.getElementById("sharedText").innerHTML;
document.getElementById("copiedText").innerHTML = sharedHTML;

/* ---------------- */
/* 診療時間テーブル（セクションにコピー）*/
/* ---------------- */
const original = document.getElementById('hours-original');
const clone = original.cloneNode(true);
document.getElementById('hours-in-visual').appendChild(clone);

/* ---------------- */
/* フェードアップ*/
/* ---------------- */
$(function(){
  $(window).on('scroll load', function(){
    const winTop = $(window).scrollTop();
    const winHeight = $(window).height();

    $('.js-fadeup').each(function(){
      const targetTop = $(this).offset().top;

      if (winTop + winHeight > targetTop + 10) {
        $(this).addClass('is-inview');
      } else {
        $(this).removeClass('is-inview'); // 一度きりにしたい場合は削除
      }
    });


  });
});

$(function(){
  // ページ読み込み後にクラスを付与
  $('.js-slidein').addClass('is-inview');
});

});