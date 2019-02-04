//Drop down nav menu
$('.c-icons-burger').click(function(){
  $('.c-nav-menu-mob').slideToggle(220);
  $(this).toggleClass('c-icons-burger-close');
});


// Hide nav menu on scroll
var prevScroll = window.pageYOffset;
var iconClose = $('.c-icons-burger');
window.onscroll = function() {
  var currScroll = window.pageYOffset;
    if (prevScroll < currScroll) {
      $('.c-nav-menu-mob').slideUp(220);
      iconClose.removeClass('c-icons-burger-close');
    }
    // prevScroll = currScroll
}

// logo animation
$(document).ready(function(){
  $(window).scroll(function(event){
    var y = $(this).scrollTop();
    var logo = $('.c-icons-logo');
    var icon = $('.c-icons-logo-icon');
      if (y >= 60) {
        $('.c-icons-logo-icon').addClass('show');
        $('.c-icons-logo').addClass('hide');
      }
      else if (y < 60 && logo.hasClass('hide') && icon.hasClass('show')) {
        $('.c-icons-logo').removeClass('hide');
        $('.c-icons-logo-icon').removeClass('show');
      }
  });
});
