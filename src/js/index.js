jQuery(function() {
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
      },

      // 767: {        
      //   items: 2,
      // },

      992: {
        items: 2,
      },
      
      1330: {
        items: 3,
      }
    }
})
});