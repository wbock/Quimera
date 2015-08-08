/*
 * Special visual effects file
 */
 
 // Include to collapse drop-down after click
 $(".nav a, .navbar-header a").click(function(event) {
    // check if window is small enough so dropdown is created
    jQuery(".navbar-collapse").removeClass("in").addClass("collapse");
});
 
 // Scrolls smoothly to elements on page
 $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top - 70
            }, 1000);
            return false;
        }
    }
});