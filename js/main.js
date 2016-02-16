  // PARALLAX

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();
	
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});

	$('.bpusheen').css({
		'transform' : 'translate(0px, '+ wScroll /1.7 +'%)'
	});

	$('.forenyan').css({
		'transform' : 'translate(0px, -'+ wScroll /8 +'%)'
	});

	if(wScroll > $('.fotos').offset().top - ($(window).height() /1.2)) {

		$('.fotos figure').each(function(i){

			setTimeout(function(){
			$('.fotos figure').eq(i).addClass('is-showing')
		}, 150 * (i+1));
		});
	}

	if(wScroll > $('.large-window').offset().top - $(window).height()){
		
		$('.large-window').css({'background-position':'center '+ {wScroll} - $('.large-window').offset().top +'px'});
	
		var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 3)

		$('.window-tint').css({'opacity': opacity})

	}

	if(wScroll > $('.blog-posts').offset().top - $(window).height()){

		var offset = Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 500);

		$('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

		$('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

	}

});