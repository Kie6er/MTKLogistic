export function scroll() {
	$("[data-scroll]").on("click", function (event) {
        event.preventDefault();

		let $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;
		let burgerMenu = $('.burger-menu'),
			logo = $('.header__logo'),
			burger = $('.burger');
		let w = $(window).outerWidth();

        $("#nav a").removeClass("active");
        $this.addClass("active");

		if(w < 768) {
			burgerMenu.removeClass('active');
			logo.removeClass('show');
			burger.removeClass('show');
			$('body').removeClass('lock');
		}
		

        $("html, body").animate({
            scrollTop: blockOffset - 120
        }, 500);

    });

	$(window).on('scroll', function() {
		let scrollOffset = $(window).scrollTop() + 250,

			servicesHeight = $('#services').innerHeight(),
			servicesOffset = $('#services').offset().top,

			calcHeight = $('#calc').innerHeight(),
			calcOffset = $('#calc').offset().top,

			workHeight = $('#work').innerHeight(),
			workOffset = $('#work').offset().top,

			reviewHeight = $('#review').innerHeight(),
			reviewOffset = $('#review').offset().top,

			partnersHeight = $('#partners').innerHeight(),
			partnersOffset = $('#partners').offset().top;

			if(scrollOffset >= servicesOffset && scrollOffset <= servicesOffset + servicesHeight) {
				$("#nav-services").addClass("active");
			} else {
				$("#nav-services").removeClass("active");
			}

			if(scrollOffset >= calcOffset && scrollOffset <= calcOffset + calcHeight) {
				$("#nav-calc").addClass("active");
			} else {
				$("#nav-calc").removeClass("active");
			}

			if(scrollOffset >= workOffset && scrollOffset <= workOffset + workHeight) {
				$("#nav-work").addClass("active");
			} else {
				$("#nav-work").removeClass("active");
			}

			if(scrollOffset >= reviewOffset && scrollOffset <= reviewOffset + reviewHeight) {
				$("#nav-review").addClass("active");
			} else {
				$("#nav-review").removeClass("active");
			}

			if(scrollOffset >= partnersOffset && scrollOffset <= partnersOffset + partnersHeight) {
				$("#nav-partners").addClass("active");
			} else {
				$("#nav-partners").removeClass("active");
			}
	});
}