$(function() {

	$('#my-menu').mmenu({
		extensions:[,'theme-white','effect-menu-slide','pagedim-black',"position-right"],
		navbar:
		{
			title: '<img src="img/logo-1.png"class="image">'
		},
	});
var api= $('#my-menu').data('mmenu');
api.bind('open:finish', function(){
	$('.hamburger').addClass('is-active');
});
api.bind('close:finish',function(){
		$('.hamburger').removeClass('is-active');
});


$('.carousel-services').owlCarousel({
		smartSpeed:700,
	navText: ['<i class="fas fa-angle-double-left" style="font-family:fontawesome"></i>','<i class="fas fa-angle-double-right"style="font-family:fontawesome"></i>'],
	responsiveClass:true,
	dots:false,
	responsive:{
		0:{
			items:1
		},
		800:{
			items:2
		},
		1100:{
			items:3
		}
	}
});
//Resize Window 
$('carousel-services-content').equalHeights();
function onResize()
{
	$('carousel-services-content').equalHeights();
} onResize();
});
	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {	
			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
			alert("Thank you!");
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
$('.review').owlCarousel({
	dots: true,
	loop:true,
	items:1,
	smartSpeed: 700,
	nav:false
});
$('.partners').owlCarousel({
	navText: ['<i class="fa fa-angle-left" style="font-family:fontawesome"></i>','<i class="fa fa-angle-right"style="font-family:fontawesome"></i>'],
	dots: false,
	loop:false,
	smartSpeed: 700,
	nav:true,
	responsiveClass:true,
	responsive:
	{
		0:{
			items:1
		},
		768:{
			items:2
		},
		992:{
			items:3
		},
		1200:{
			items:4
		}

	}

});

Window.onResize= function(){onResize()};