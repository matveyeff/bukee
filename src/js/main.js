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