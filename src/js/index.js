// import "bootstrap";
// import "popper.js";

jQuery(function () {
  jQuery(".owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    margin: 28,
    autoWidth: true,

    navText: "",
    responsive: {
      0: {
        items: 1,
      },

      992: {
        items: 2,
      },

      1330: {
        items: 3,
      },
    },
  });
});

$(".navbar-toggler").on("click", function () {
  $(".navbar").toggleClass("box-shadow2");
  if ($(this).hasClass("navbar-toggler__close")) {
    $(this).removeClass("navbar-toggler__close");
    $(".navbar").css({ position: "relative" });
    // $('.navbar').removeClass('box-shadow2');
  } else {
    $(this).addClass("navbar-toggler__close");
    $(".navbar").css({ position: "fixed" });

    // $('.navbar').addClass( 'box-shadow2');
  }
});
