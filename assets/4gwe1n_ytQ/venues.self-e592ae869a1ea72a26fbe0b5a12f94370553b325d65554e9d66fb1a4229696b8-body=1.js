(function() {
  jQuery(function() {
    $("#venue-list").hide();
    $("#n-map").show();
    $("body").css({
      "padding-top": "0"
    });
    $("#main").css({
      "padding-top": "50px"
    });
    $(".map-button").on("click", function() {
      $("#venue-list").hide();
      $("#map").show();
      $("body").css({
        "padding-top": "0"
      });
      return $("#main").css({
        "padding-top": "50px"
      });
    });
    return $(".list-button").on("click", function() {
      $("#map").hide();
      $("#venue-list").show();
      $("body").css({
        "padding-top": "50px"
      });
      return $("#main").css({
        "padding-top": "0"
      });
    });
  });

}).call(this);
