// Scroll
function scroll() {

	width = $(window).width();
	scrollTop = $(window).scrollTop();

	// Fixed Header
	if (scrollTop > 1) {
		$('.header, body').addClass('fixed');
	} else {
		$('.header, body').removeClass('fixed');
	}

	// Fixed Back to top
	if (scrollTop > 500) {
		$('.footer .back-to-top').addClass('fixed');
	} else {
		$('.footer .back-to-top').removeClass('fixed');
	}


}

function toTop() {
	/*$(window).scroll(function(){
			var showAfter = 100;
			if ($(this).scrollTop() > showAfter ) { 
			  $('.back-to-top').fadeIn();
			} else { 
			  $('.back-to-top').fadeOut();
			}
	});*/

	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});
}

// Data Open
function dataOpen() {

	width = $(window).width();

	// Animate Scroll
	$('a[data-scroll="true"], .data-scroll a').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$offset = 70;


		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - $offset
		}, 900, 'swing', function () {
			//window.location.hash = target;
		});
	});

	// Menu
	$('[data-open="menu"]').click(function (e) {
		e.preventDefault();

		$('.header, .header .nav-menu, .header .navigation').toggleClass('active');
		$('body').toggleClass('overh');
	});


	// Submenu
	$('.header .navigation .menu li.menu-item-has-children > a').click(function (e) {
		if (width < 1200) {
			e.preventDefault();

			if ($('.header .navigation .menu li').hasClass('open-menu')) {
				$('.header .navigation .menu li').removeClass('open-submenu');
			}

			$(this).parent().toggleClass('open-submenu');
		}
	});


}




$(document).ready(function () {
	scroll();
	dataOpen();
	toTop();

	$(window).bind('scroll resize', function () {
		scroll();
	});

	// Slick Init js
	$('.slick-slider').slick({
		dots: true, 
		infinite: true, 
		speed: 500, 
		fade: true, 
		cssEase: 'linear'
	});

	// Isotope Filters Projects Page
	$('.isotope-grid').isotope({
		itemSelector: '.grid-item',
		filter: '*',
		gutter: 10,
	});

	// filter items on button click
	$('.filter-button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$('.isotope-grid').isotope({ filter: filterValue });
		$('.filter-button-group').removeClass('active');
		$(this).addClass('active');
	});

	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.is-checked').removeClass('is-checked');
		  $( this ).addClass('is-checked');
		});
	  });

});


