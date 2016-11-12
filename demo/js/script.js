$(document).ready(function() {

	// materialize parallax init
	$('.parallax').parallax();

	// materialize sidenav init
	$('.button-collapse').sideNav({
		closeOnClick: true,
		draggable: true
	});

	// materialize scrollspy init
	$('.scrollspy').scrollSpy();

	// only show 'scroll-up' button when at least scrolled down 1/3 of the body element
	var $w = $(window),
		el = $('#scroll-up');

	$w.on('scroll', function() {
		var winPos = $w.scrollTop() + $w.outerHeight(true),
			showPos = $w.outerHeight(true) * 2;

		if (winPos >= showPos) {
			$(el).fadeIn();
		} else {
			$(el).fadeOut();
		}
	});

});