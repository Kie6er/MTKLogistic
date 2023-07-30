
export function fixedResize() {
	let w = $(window).outerWidth(),
	header = $('#header'),
	headerInner = $('#header__inner'),
	headerBottom = $('#header-bottom');

	if ( w < 1201 && w > 767 ) {

		headerInner.css({padding: '3.5rem 0 3rem'});

		if(!headerBottom.hasClass('fixed')) {
			headerBottom.addClass('fixed');
		}

		if(header.hasClass('fixed')) {
			header.removeClass('fixed');
		}

	} else {
		if(headerBottom.hasClass('fixed')) {
			headerBottom.removeClass('fixed');
		}

		if(!header.hasClass('fixed')) {
			header.addClass('fixed');
		}
	}
}

export function fixedScroll() {
	let header = $('#header'),
		headerInner = $('#header__inner'),
		headerBottom = $('#header-bottom'),
		headerBottomFixed = $('.header-bottom.fixed'),
		w = $(window).outerWidth(),
		scrollOffet = $(window).scrollTop();

	if(scrollOffet >= 1 ) {
		if ( w < 1200 && w > 768 ) {
		} else {
			header.css({background: '#040D21'});
			headerInner.css({padding: '2rem 0'});
		}
	} else {
		header.css({background: ''});
		
		if ( w < 1200 && w > 768 ) {
			headerInner.css({padding: '3.5rem 0 3rem'});
		} else {
			headerInner.css({padding: '4.2rem 0 0'});
		}
	}
	if ( w < 1200 && w > 768 ) {

		if(scrollOffet >= 120) {
			headerBottom.css({background:'#3284FF'})
			headerBottomFixed.css({
				top: '0',
				position: 'fixed'
			})
		} else {
			headerBottom.css('background-color', 'rgba(50, 132, 255, '+0.15+')')
			headerBottomFixed.css({
				top: '120px',
				position: 'static'
			})
		}
	}
	
}