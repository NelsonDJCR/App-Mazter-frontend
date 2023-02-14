import $ from "jquery";

$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        $(".header").addClass("fixed-header");
    } else {
        $(".header").removeClass("fixed-header");
    }
});
