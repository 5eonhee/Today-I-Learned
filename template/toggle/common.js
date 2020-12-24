$('.btn-toggle').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $target = $this.siblings('.toggle-box');

    $this.toggleClass('on');
    if ($this.hasClass('on')) {
        $target.stop().slideDown();
    } else {
        $target.stop().slideUp();
    }
});

$('.toggle-box').on('click', '.btn-toggle-hide', function(e) {
    e.preventDefault();
    var $this = $(this).parents('.toggle-box');
    var $target = $this.siblings('.btn-toggle');

    $this.stop().slideUp();
    $target.removeClass('on');
    $('html, body').stop().animate({scrollTop: $this.parents('.sec_buying').offset().top + 50}, 300);
});
