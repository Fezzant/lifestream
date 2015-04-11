$(function() {
	smoothScroll(500);
	applianceBelt();
	applianceLoad();
	
	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' })
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
	var animationLength = 1000;

	$('.thumb-unit').click(function() {
		$('.appliance-container').show();

		$('.appliance-belt').animate({
			'left': '-100%'
		}, animationLength, function() {
			$('.appliance-belt').css('left','0%');
			$('.thumb-wrap').css('display','none');
		});
	});

	$('.appliance-return').click(function() {
		$('.appliance-belt').css('left','-100%');
		$('.thumb-wrap').css('display','block');

		$('.appliance-belt').animate({
			'left': '0%'
		}, animationLength, function() {
			$('.appliance-container').hide();
		});
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

(function( $ ) {

	$.fn.fitText = function( kompressor, options ) {
		//Setup options
		var compressor = kompressor || 1,
			settings = $.extend( {
				'minFontSize' : Number.NEGATIVE_INFINITY,
				'maxFontSize' : Number.POSITIVE_INFINITY
			}, options);
		
		return this.each(function() {

			// Store the object
			var $this = $(this);

			// Resizer() resizes items based on the object width divided by the compressor * 10
			var resizer = function () {
				$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
			};

			// Call once to set.
			resizer();
			
			// Call on resize. Opera debounces their resize by default.
			$(window).on('resize.fittext orientationchange.fittext', resizer);
		});
	};
})( jQuery );		