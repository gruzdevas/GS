jQuery(function() {
  jQuery('.owl-carousel').owlCarousel({
    nav: true,
    dots: false,
    margin: 28,
    autoWidth: true,
    
    navText: '',
    responsive: {
      0: {
        items: 1,
      },

      992: {
        items: 2,
      },
      
      1330: {
        items: 3,
      }
    }
})
});

$('.navbar-toggler').on('click', function(){
  if ($(this).hasClass('navbar-toggler__close')){
     $(this).removeClass('navbar-toggler__close');
     $('.navbar').css({'position':'relative'});
  } else {
     $(this).addClass('navbar-toggler__close');
     $('.navbar').css({'position':'fixed'});
  }
});