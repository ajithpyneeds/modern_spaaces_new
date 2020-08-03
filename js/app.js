$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop:0
        }, 2000);
    });
});



var totalItems = $('.item').length;
var currentIndex = $('div.item.active').index() + 1;

var down_index;
$('.num').html(''+currentIndex+'/'+totalItems+'');

    $(".next").click(function(){
    currentIndex_active = $('div.item.active').index() + 2;
    if (totalItems >= currentIndex_active)
    {
        down_index= $('div.item.active').index() + 2;
        $('.num').html(''+currentIndex_active+'/'+totalItems+'');
    }
});

    $(".prev").click(function(){
        down_index=down_index-1;
    if (down_index >= 1 )
    {
        $('.num').html(''+down_index+'/'+totalItems+'');
    }
});


// Hidden Button Visibility On Hovering Over Cards
// $(document).ready(function(){
//   $(".about-hover-card, .blog-hover").hover(function(){
//     $(this).css("transform", "translateY(-3.5vw)");
//     });
// });



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

  showSlides(slideIndex += n);
 
  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


