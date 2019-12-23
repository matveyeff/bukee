$(document).ready(function(){
  $('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 400,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'ease',
  });
});

$("#nextContent").click(function(e){
	$("#nextContentList").fadeIn();
	$("#nextContent").hide();
});

// Hamburger Menu

var burgerBtn = document.getElementById('burgerBtn');
var open = document.getElementById('nav');
var style = open.style;

burgerBtn.addEventListener('click', function() {
	style.display = 'flex';
	burgerBtn.style.display = 'none';
	close.style.display = 'flex';
});

var close = document.getElementById('close');

close.addEventListener('click', function() {
	close.style.display = 'none';
	style.display = 'none';
	burgerBtn.style.display = 'flex';
});