import IMask from "imask";

export function phoneMask() {

	const phoneInput = document.querySelector("#phone-input");
	const mask = new IMask(phoneInput, {
		mask: "+{7} (000) 000-00-00",
		lazy:false
	});
}


