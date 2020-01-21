var $item = $(".carousel-item");

$('#carouselOne').carousel({
  interval: 10000
})

$('#carouselTwo').carousel({
  interval: 13000
})

var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$("#carouselOne").children(".carousel-inner").children(".carousel-item").click(function(){
    $("#carouselOne").carousel("next");
});

$("#carouselTwo").children(".carousel-inner").children(".carousel-item").click(function(){
    $("#carouselTwo").carousel("next");
});