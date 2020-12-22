// 버튼 클릭하면 지정한 영역으로 이동
$('.btn-anchor').on('click', function(e) {
   e.preventDefault(); // a의 기본이벤트 동작 
   var $this = $(this);
   var $target = $this.data('target');

   $('html, body').stop().animate({scrollTop:$($target).offset().top}, 500);
});

// url 끝에 특정 값(?section02) 추가한 경로로 페이지 접속 시 지정한 영역으로 이동 (ex. url?section02)
var anchor = location.href;
  var target;

  if (anchor.indexOf('section02') > -1) {
      target = $('.section02').offset().top;
  }

  if (target) {
      setTimeout(function() {
          $('html,body').stop().animate({scrollTop:target}, 500);
      }, 1000);
  }
