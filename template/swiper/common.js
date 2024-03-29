var swiper = new Swiper('.swiper-container', {
	loop: true, // 무한반복 (&& slidesPerView:'auto' => loopedSlides 활성화 필요)
	speed: 600, // 속도
	autoplay: {
		delay: 2000,
		disableOnInteraction: false, // 수동으로 넘기면 자동재생이 멈춰서 설정 필요
	},
	slidesPerView: "auto", // 한 화면에 들어오는 슬라이드 갯수, 'auto'는 각 슬라이드 넓이에 맞게 자동 설정 loop 함께 사용 시 auto 설정해야 함
	autoHeight: true, // slide 마다 높이가 다를 경우
	initialSlide: 1, // 시작위치
	slidesPerView: 3, // 화면에 보이는 슬라이드 개수 (auto: css에 맞춤)
	slidesPerGroup: 3, // 그룹으로 묶을 슬라이드 개수 (slidesPerView 와 같은 값을 지정하는게 좋음)
	loopFillGroupWithBlank : true, // 그룹수가 맞지 않을 경우 빈칸으로 채우기 (3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬)
	spaceBetween : 30, // 슬라이드간 간격 (px)
	threshold: 30, // 살짝 터치했을 때 슬라이드로 인식되는 거리
	observer: true, // 슬라이더 불러올 때마다 초기화
	observeParents: true,
	observeSlideChildren: true,
	allowTouchMove: true, // 터치 슬라이드 기능 동작
	roundLengths: true, // 슬라이드 너비와 높이 값을 반올림 (텍스트가 흐려지는 것을 방지)
	navigation: {
		nextEl: '.swiper-arrow.next',
		prevEl: '.swiper-arrow.prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	breakpoints: { // 반응형 분기점 (width >= 769)
		769: {
			allowTouchMove: false, // 터치 슬라이드 기능 막기
		}
	},
	on: { // breakpoint type1
		var that = this;
		setTimeout(function() {
		    that.slideToLoop(0, 0);
		}, 150);
	    }
	}
});

// breakpoint type2
swiper.on('breakpoint', function() {
	setTimeout(function() {
		swiper.slideTo(0, 0); // (이동할 인덱스, 속도)
	}, 150);
});
