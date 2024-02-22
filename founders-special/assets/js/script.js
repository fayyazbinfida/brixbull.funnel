$(document).ready(function() {

  $(".features").click(function() {
    $('html,body').animate({
        scrollTop: $(".categories-outer").offset().top},
        'slow');
});
});