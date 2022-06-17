$(function(){
	$('.wrapper .nav_menu .list-inline .home').hover(function(){
		//$('.wrapper .nav_menu .sub_menu').css('display','block');

	},function(){
       // $('.wrapper .nav_menu .sub_menu').css('display', 'none');
	});
});


//when scroll fixed header

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() >= $('.wrapper').height()){

			$('.main_header').addClass('fixed');
		}else{
			$('.main_header').removeClass('fixed');
		}
	});
});

