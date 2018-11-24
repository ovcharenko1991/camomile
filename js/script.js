jQuery(document).ready(function(){
	$objWindow = $(window);
	$('div[data-type="background"]').each(function(){
		let $bgObj = $(this);
		$(window).scroll(function() {
			let yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
			let coords = '100% '+ yPos + 'px';
			$bgObj.css({ backgroundPosition: coords });
		});
	});
});
