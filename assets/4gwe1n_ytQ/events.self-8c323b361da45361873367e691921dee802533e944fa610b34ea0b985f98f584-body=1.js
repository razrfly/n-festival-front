(function() {
  jQuery(function() {
    var $container;
    $container = $('#events');
    $container.isotope({
      resizable: false,
      masonry: {
        columnWidth: $container.width() / 2
      }
    });
    return $(window).smartresize(function() {
      return $container.isotope({
        masonry: {
          columnWidth: $container.width() / 2
        }
      });
    });
  });

}).call(this);
