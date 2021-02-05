$(function(){

	// preloader

	setTimeout(function() {
		$('.preloader').css({
			opacity: '0',
			transform: 'translateY(-100%)'
		});;
	}, 2000);


	// preloader END

	// Menu burger

	$('.menu, .bg_menu_burger_close').click(function(){
		$('.menu, .menu_burger, .menu_burger_open, .link_burger_1, .link_burger_2, .link_burger_3, .link_burger_4, .link_burger_5, .bg_menu_burger_close').toggleClass('show_menu transform_menu')
	});

	$('.menu, .bg_menu_burger_close').click(function(){
		$('body').toggleClass('stop_scrolling')
	});

	// Menu burger end

	// scroll document

	$(window).scroll(function() {
		if ($(window).scrollTop() > 150) {
			$('.section_1').stop().fadeTo('fast', 0.6);
		} else {
			$('.section_1').stop().fadeTo('fast', 1);
		
		}
	});

	// scroll document END

	// 3D cards

	$('.TogetherTechno').hover(function() {
		$('.TogetherTechno').css('animation-play-state', 'paused');
	}, function() {
		$('.TogetherTechno').css('animation-play-state', 'running');
	});

	const TogetherTechno = $('.TogetherTechno');

	$(TogetherTechno).mousemove(function() {
		const halfHeightY = TogetherTechno.outerHeight() / 2;
		const halfHeightX = TogetherTechno.outerWidth() / 2;
		$(this).css('transform', 'rotateX('+-(event.offsetY - halfHeightY)/10+'deg) rotateY('+(event.offsetX - halfHeightX)/10+'deg');
	});

	$(TogetherTechno).mouseleave(function() {
		$(this).css('transform', 'rotateX(0deg) rotateY(0deg)');
	});
	
	// 3D cards END

	// POPUP

	$('.btn_section_1').click(function() {
		$('.popup').css({
			opacity: '1',
			visibility: 'visible',
		});
		$('.popup_overlay').css({
			transform: 'translate(-50%, -50%)',
		});
		$('body').toggleClass('stop_scrolling')
	});

	$('.cross_popup').click(function() {
		$('.popup').css({
			opacity: '0',
			visibility: 'hidden',
		});
		$('.popup_overlay').css({
			transform: 'translate(-50%, -250%)'
		});
		$('body').toggleClass('stop_scrolling')
	});

	$('.popup_close_bg').click(function() {
		$('.popup').css({
			opacity: '0',
			visibility: 'hidden',
		});
		$('.popup_overlay').css({
			transform: 'translate(-50%, -250%)'
		});
		$('body').toggleClass('stop_scrolling')
	});

	$('.date').click(function() {
		$(this).toggleClass('active_date');
		
	});

	// POPUP END

	// FOR MEDIA 

	if ($(window).width() < 768) {
		$('.Maceo, .Sluwe').attr('data-wow-delay', '0s');;
	}
	
});