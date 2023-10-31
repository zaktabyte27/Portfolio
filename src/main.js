$(".skip1").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});