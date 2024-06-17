$(".slider-slick").slick({
	slidesToShow: 1,
	mobileFirst: true,
	slidesToScroll: 1,
	infinite: false,
	autoplay: true,
	autoplaySpeed: 3000,
	prevArrow: $(".prev"),
	nextArrow: $(".next"),
	responsive: {
		breakpoint: 1024,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: false,
		},
	},
})
