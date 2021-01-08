<script>
var selectionSwiper = new Swiper('.swiper-container.slider-selection', {
    slidesPerView: 'auto',
    allowTouchMove: true,
    breakpoints: {
        769: {
            allowTouchMove: false
        }
    },
    on: {
        breakpoint: function() {
            var that = this;
            setTimeout(function() {
                that.slideTo(0, 0);
            }, 150);
        }
    }
});
</script>
