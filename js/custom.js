$(window).on("scroll", function () {
if ($(window).scrollTop() > 50) {
  $(".header").addClass("header-bg");
} else {
  $(".header").removeClass("header-bg");
}
});
