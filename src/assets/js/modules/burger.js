export function burger() {
	$('.burger').on("click", function() {
		let burgerMenu = $('.burger-menu'),
			logo = $('.header__logo'),
			burger = $('.burger')

		burgerMenu.toggleClass('active');
		logo.toggleClass('show');
		burger.toggleClass('show');
		$('body').toggleClass('lock');
	});

	$('.burger-menu-close').on("click", function() {
		let burgerMenu = $('.burger-menu'),
			logo = $('.header__logo'),
			burger = $('.burger')


		burgerMenu.toggleClass('active');
		logo.toggleClass('show');
		burger.toggleClass('show');
		$('body').toggleClass('lock');
	});
}