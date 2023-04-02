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

	var side = $(".nav");
	var main = $(".content_page");
	var min_move = main.offset().top;
	var max_move = main.offset().top + main.height() - side.height() - 2*parseInt(side.css("top") );
	var margin_bottom = max_move - min_move	;

	$(window).bind("scroll", function() {
			var wst =  $(window).scrollTop();
			if( wst > min_move && wst < max_move ){
				var margin_top = wst - min_move ;
				side.animate({"top": margin_top},{duration:500,queue:false});
				side.addClass("top");
			}else if( wst < min_move ){
				side.animate({"top":0},{duration:500,queue:false});
				side.removeClass("top")
			}else if( wst > max_move ){
				side.animate({"top":margin_bottom},{duration:500,queue:false});
				side.removeClass("top")
			}
	});

//placeholder対応
	var supportsInputAttribute = function (attr) {
		var input = document.createElement('input');
		return attr in input;
	};

	if (!supportsInputAttribute('placeholder')) {
		$('[placeholder]').each(function () {
			var input = $(this),
				 placeholderText = input.attr('placeholder'),
				 placeholderColor = 'GrayText',
				 defaultColor = input.css('color');

			input.
				focus(function () {
					if (input.val() === placeholderText) {
						input.val('').css('color', defaultColor);
					}
				}).
				blur(function () {
					if (input.val() === '') {
						input.val(placeholderText).css('color', placeholderColor);
					} else if (input.val() === placeholderText) {
						input.css('color', placeholderColor);
					}
				}).
			blur().
			parents('form').
			submit(function () {
				if (input.val() === placeholderText) {
					input.val('');
				}
			});
		});
	}
});
//採用情報の横部分メニューバー用スクリプト
function accordion(clickid,hideclass){
	$(clickid).on("click",function(){
		$(hideclass).slideToggle();
	});
}
accordion('#showclick1','.show1');
