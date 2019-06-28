$(document).ready(function () {
  // Модальное окно видео
  var video = $('#video');
  var play = $('#playVideo, .video-tag');
  
  play.click(function () {
    video.addClass('active');
    $('body').css({'overflow' : 'hidden', 'background' : '#000000ed'});
  });
  
  $(function($) {
    $(document).mouseup(function (e) {
      if (!video.is(e.target)
      && video.has(e.target).length === 0) {
        video.removeClass('active');
        $('body').attr('style', '');
      }
    });
  });
  
  // Слайдер

  $('#slider').slick({
    slideToShow: 1,
    centerMode: true,
    slideToScroll: 1,
    centerPadding: '15px',
    arrows: true,
    autoplay: true, 
    autoplaySpeed: 7000,
    prevArrow: $('#prev-btn'),
    nextArrow: $('#next-btn'),
    asNavFor: '.slider-nav',
    dotsClass: 'slider-nav slide-nav-btn'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 0,
    asNavFor: '#slider',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerPadding: '0px',
          arrows: false,
          slidesToShow: 3
        }
      }
      ]
  });

  // Валидация
  $('#form').validetta({
    // errorTemplateClass : 'validetta-bubble',
    // bubblePosition: 'bottom',
    // bubbleGapTop: 5,
    // bubbleGapLeft: 150
  });
});