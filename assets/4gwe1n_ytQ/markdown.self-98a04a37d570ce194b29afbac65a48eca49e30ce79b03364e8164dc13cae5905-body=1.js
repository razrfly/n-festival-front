(function() {
  jQuery(function() {
    $('.info-content h4').css('cursor', 'pointer');
    $('.info-content h4').next('p').slideToggle();
    return $('.info-content h4').click(function() {
      return $(this).next('p').slideToggle();
    });
  });

}).call(this);
