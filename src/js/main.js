$(document).ready(function () {

  var video = $('#video');
      play = $('#playVideo, .video-tag')

  
  // Модальное окно видео

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

});