$(function() {
	var topBtn = $('.page-top');
	topBtn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	topBtn.click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});

	var side = $(".nav002");
	var main = $(".content_page");
	var min_move = main.offset().top;
	var main_offset_top = main.offset().top;
	var side_height = side.height();
	var side_css_top = 2*parseInt(side.css("top"));
	var max_move = main.offset().top + main.height() - side.height() - 2*parseInt(side.css("top") );
	var margin_bottom = max_move - min_move	;
	
	$(window).bind("scroll", function() {
			var wst =  $(window).scrollTop();
			//var max_move2 = main_offset_top + main.height() - side_height - side_css_top - ($(".offi01").height())/2 + 65;
			var max_move2 = main_offset_top + main.height() - side_height - side_css_top;
			var margin_bottom2 = max_move2 - min_move;
			if( wst > min_move && wst < max_move2 ){
				var margin_top = wst - min_move ;
				side.animate({"top": margin_top},{duration:500,queue:false});
				side.addClass("top");
			}else if( wst < min_move ){
				side.animate({"top":0},{duration:500,queue:false});
				side.removeClass("top")
			}else if( wst > max_move2 ){
				side.animate({"top":margin_bottom2},{duration:500,queue:false});
				side.removeClass("top")
			}
	});
});
