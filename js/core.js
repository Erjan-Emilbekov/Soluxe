$(function() {

	$('#hambur').click(function(){		
		$('.menu').slideToggle(700);	
		if ($(this).hasClass('not-active')) {
			$(this).addClass('is-active').removeClass('not-active');
		}else{
			setTimeout(function(){
				$('.is-active').addClass('not-active').removeClass('is-active')
			},600)			
		}		
	});

	 $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav'
});

	$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			focusOnSelect: true,
			variableWidth: true,
			arrows: false,
			responsive: [
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 340,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});
	$('.slide').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				dots: false,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				dots: false,
				slidesToScroll: 1
			}
		}
		]
	});

});