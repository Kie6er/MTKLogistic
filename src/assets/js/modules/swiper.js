export function swiper() {
	const slider = new Swiper('.review__inner', {
		direction: 'horizontal',
		loop: false,

		navigation: {
			nextEl: '.review__btn--next',
			prevEl: '.review__btn--prev'
		},

		pagination: {
			el: '.review__pagination',
			type: 'fraction'
		  },

		spaceBetween: 20,
	});
}