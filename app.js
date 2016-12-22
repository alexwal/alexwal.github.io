$(document).ready(function() {

var path = window.location.pathname;
var fname = path.split("/").pop();

if (fname == 'coursework.html') {
	return;
};

// Handles smooth scrolling
	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    // console.log(target.selector)
	    if( target.length ) {
	    	var padding = 60
	    	if ( target.selector == "#menu") {
	    		padding = 0
	    	} else {
				event.preventDefault();
	    	}
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top - padding
	        }, 1000);
	    }
	});

// Handles sticky navigation bar
  $(window).scroll(function() {

  	var nav_top = $('.fixed-nav-bar')[0].getBoundingClientRect().top
  	var viewportHeight = $(window).height();
  	console.log(nav_top, $(window).scrollTop())
  	if (nav_top <= 0) {
		$('.fixed-nav-bar').removeClass('snap_to_bottom');
      	$('.fixed-nav-bar').addClass('make_sticky');
    } else {
		$('.fixed-nav-bar').removeClass('make_sticky');
		$('.fixed-nav-bar').addClass('snap_to_bottom');
    };
    
  	if ($(window).scrollTop() < viewportHeight) {
		$('.fixed-nav-bar').removeClass('make_sticky');
		$('.fixed-nav-bar').addClass('snap_to_bottom');
    };

    if ($(window).scrollTop() > 0.3 * viewportHeight) {
		$('.content').removeClass('make_opaque');
	  	$('.content').addClass('make_transparent');
    } else {
		$('.content').removeClass('make_transparent');
		$('.content').addClass('make_opaque');
    };

    if ($(window).scrollTop() > 0.1 * viewportHeight) {
		$('#aw-stamp').removeClass('make_opaque');
	  	$('#aw-stamp').addClass('make_transparent');

    }

	if ($(window).scrollTop() < 0.05 * viewportHeight) {
		$('#aw-stamp').removeClass('make_transparent');
		$('#aw-stamp').addClass('make_opaque');
    };

  });
});

