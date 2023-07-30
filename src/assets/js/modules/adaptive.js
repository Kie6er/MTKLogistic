function adaptive_header(w,h) {
	let headerBottom = $('.header-bottom__inner'),
		headerNav = $('.header__nav'),
		burgerMenu = $('.burger-menu'),
		logo = $('.header__logo'),
		burger = $('.burger')

	if (w < 1201) {
		if(!headerNav.hasClass('done')) {
			headerNav.addClass('done').appendTo(headerBottom);
		}
	} else {
		if(headerNav.hasClass('done')) {
			headerNav.removeClass('done').prependTo($('.header__nav-adaptive'));
		}
	}

	if (w < 1201 && w > 767) {
		if(!$('.item__img--1').hasClass('done')) {
			$('.item__img--1').addClass('done').appendTo($('.item__image--adaptive--1'));
		}

		if(!$('.item__img--2').hasClass('done')) {
			$('.item__img--2').addClass('done').appendTo($('.item__image--adaptive--2'));
		}

		if(!$('.item__img--3').hasClass('done')) {
			$('.item__img--3').addClass('done').appendTo($('.item__image--adaptive--3'));
		}

		if(!$('.item__img--4').hasClass('done')) {
			$('.item__img--4').addClass('done').appendTo($('.item__image--adaptive--4'));
		}

		if(!$('.item__img--5').hasClass('done')) {
			$('.item__img--5').addClass('done').appendTo($('.item__image--adaptive--5'));
		}
	} else {
		if($('.item__img--1').hasClass('done')) {
			$('.item__img--1').removeClass('done').prependTo($('.item__image--1'));
		}

		if($('.item__img--2').hasClass('done')) {
			$('.item__img--2').removeClass('done').prependTo($('.item__image--2'));
		}

		if($('.item__img--3').hasClass('done')) {
			$('.item__img--3').removeClass('done').prependTo($('.item__image--3'));
		}

		if($('.item__img--4').hasClass('done')) {
			$('.item__img--4').removeClass('done').prependTo($('.item__image--4'));
		}

		if($('.item__img--5').hasClass('done')) {
			$('.item__img--5').removeClass('done').prependTo($('.item__image--5'));
		}
	}

	if (w>767) {
		burgerMenu.removeClass('active');
		logo.removeClass('show');
		burger.removeClass('show');
	}
}

export function adaptive_function() {
	let w = $(window).outerWidth();
	let h = $(window).outerHeight();

	adaptive_header(w,h)
}