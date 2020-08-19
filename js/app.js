
var btn = $('.btn11');

btn.on('click', function() {
$(this).toggleClass('active');
$(this).toggleClass('not-active');
});

$(document).ready(function() {
$('.box').on('click', function() {
$(this).toggleClass('active');
$('.top-nav').toggleClass('open');
});

$('.top-nav .nav-link').on('click', function() {
$('.btn11').toggleClass('not-active');
$('.top-nav').toggleClass('open');
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

