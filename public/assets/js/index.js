$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
$("#fadein").delay(2000).fadeIn(1000)

$(".revealer").on("click", function () {
    $(".xpDiv").toggleClass("backgroundColor");
    $(".h1Ldr").toggleClass("displaynone");
    $(".h1Sft").toggleClass("displaynone");
    $(".h1Misc").toggleClass("displaynone");
    $(".Xp").toggleClass("reveal");
})