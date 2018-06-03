;(function () {

	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#dtl-offcanvas, .js-dtl-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('.js-dtl-nav-toggle').addClass('');

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-dtl-nav-toggle').removeClass('active');

	    	}


	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="dtl-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-dtl-nav-toggle dtl-nav-toggle "><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#dtl-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#dtl-offcanvas').append(clone2);

		$('#dtl-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#dtl-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-dtl-nav-toggle').removeClass('active');

	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-dtl-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};





	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
	});


}());
