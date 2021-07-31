jQuery(function() {
  // jQuery(".owl-carousel").owlCarousel({
  //   nav: true,
  //   dots: false,
  //   navText: '',
  //   margin: 50,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },

  //     767: {
        
  //       items: 2,
  //     },

  //     992: {
  //       items: 3,
  //     }
  //   }
  // });

  jQuery('.owl-carousel').owlCarousel({
    nav: true,
    dots: false,
    margin: 28,
    // responsiveClass:true,
    autoWidth: true,
    navText: '',
    responsive: {
      0: {
        items: 1,
        // autoWidth: false,
      },

      767: {        
        items: 2,
      },

      992: {
        items: 3,
      }
    }
})
});