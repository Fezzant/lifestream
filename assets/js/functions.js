$(function() {
	smoothScroll(500);
	applianceBelt();
});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function applianceBelt() {
	$('.thumb-unit').click(function() {
		$('.appliance-belt').css('left','-100%');
    $('.appliance-container').show();
	});
	
	$('.appliance-return').click(function() {
		$('.appliance-belt').css('left','0%');
    $('.appliance-container').hide(800);
	});
}
