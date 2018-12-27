$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        var $navLinks = $(".nav-link");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
$("#fadein").delay(2000).fadeIn(1000)
