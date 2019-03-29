$(function() {
	$(".scroll-to").click(function() {
		var el_to_scroll_id = $(this).attr('href');
		
		if (el_to_scroll_id && $(el_to_scroll_id).length > 0) {
			$([document.documentElement, document.body]).animate({
				scrollTop: $(el_to_scroll_id).offset().top
			}, 2000);
		}
	});
	
	$('.toggle-mobile-menu').click(function() {
		$('.header-menu').slideToggle();
	});
	
	$('.carousel').carouFredSel();
	
	$('.carousel').carouFredSel({
		direction           : "left",
		auto                : {play: false},
		circular            : false,
		infinite            : true,
		pagination: "#pager",
		height: 355
	});
	
	$('.header-menu li').mouseenter(function() {
		if (!$('.toggle-mobile-menu').is(':visible')) {
			$(this).stop().animate({top: '-10'}, 250);
		}
	}).mouseleave(function() {
		if (!$('.toggle-mobile-menu').is(':visible')) {
			$(this).stop().animate({top: '0'}, 250);
		}
	});
});