(function() {
  jQuery(function() {
    var concatValues, filter, toogle_with_arrows;
    concatValues = function(obj) {
      var prop, value;
      value = '';
      for (prop in obj) {
        value += obj[prop];
      }
      return value;
    };
    toogle_with_arrows = function(button, selector) {
      return $(button).on("click", function() {
        var i;
        $(selector).toggle();
        i = $(button).find('i');
        if (i.hasClass("fa-chevron-down")) {
          return i.addClass("fa-chevron-up").removeClass("fa-chevron-down");
        } else {
          return i.addClass("fa-chevron-down").removeClass("fa-chevron-up");
        }
      });
    };
    $('.search-options').hide();
    filter = function(selector, grid) {
      return $(selector).on("change", function() {
        var filterValue, filters;
        filters = {};
        filterValue = "";
        $('input:checkbox:checked').each(function() {
          var filterGroup;
          filterGroup = $(this).parent().data("filter-group");
          filters[filterGroup] = $(this).val();
          return filterValue = concatValues(filters);
        });
        return $(grid).isotope({
          filter: filterValue
        });
      });
    };
    toogle_with_arrows('#locations', '.search-options.locations');
    toogle_with_arrows('#tags', '.search-options.tags');
    filter('.search-options', '#events');
    toogle_with_arrows('#article-tags', '.search-options.article-tags');
    return filter('.search-options', '#articles');
  });

}).call(this);
