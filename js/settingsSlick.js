$('.team-wrap').slick({
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
})
