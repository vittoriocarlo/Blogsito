$(document).ready(event);
var conta = 1;

function event(){
	$('.menu-burguer').click(function(){
			if (conta == 1) {
				$('nav').animate({
					left: '0'
				});
				conta = 0;
			} else {
				conta = 1;
				$('nav').animate({
					left: '-100%'
				});
			}
	});
};
