import * as phone from "../js/modules/phone.js";
import * as adaptive from "../js/modules/adaptive.js";
import * as burger from "../js/modules/burger.js";
import * as fixed from "../js/modules/headerFixed.js";
import * as checkbox from "../js/modules/checkbox.js";
import * as swiper from "../js/modules/swiper.js";
import * as scroll from "../js/modules/scroll.js";

$(window).resize(function() {
	adaptive.adaptive_function();

	$('body').removeClass('lock');

	fixed.fixedResize();
	fixed.fixedScroll();
});

$(window).on('scroll', function() {
	fixed.fixedScroll();
});

fixed.fixedResize();
fixed.fixedScroll();
adaptive.adaptive_function();
burger.burger();
phone.phoneMask();
checkbox.checkbox();
swiper.swiper();
scroll.scroll();



