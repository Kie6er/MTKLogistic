export function checkbox() {
	$(window).keyup(function(e){
		let target = $('.calc__checkbox input:focus');
		if (e.keyCode == 9 && $(target).length){
			$(target).parent().addClass('focused');
		}
	});
	 
	$('.calc__checkbox input').focusout(function(){
		$(this).parent().removeClass('focused');
	});
}