$(function() {
	smoothScroll(500);
	applianceBelt();
	applianceLoad();
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

function applianceLoad() {
	$.ajaxSetup({ cache: false });
	
	$('.thumb-unit').click(function() {
		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '/appliances/'+ newFolder +'.php';
		$('.appliance-load').html(spinner).load(newHTML);
		$('.appliance-title').text(newTitle);
	});
}