(function() {
  window.openNav = function(selector, value) {
    $("#" + selector).find(".mySidenav").width(value);
    $("#" + selector).find(".closebtn").removeClass("hidden");
    $("#main .container").fadeTo("slow", 0.1);
    return $("body.events #main, body.articles #main").css({
      "z-index": -1,
      "position": "relative"
    });
  };

  window.closeNav = function(selector) {
    $("#" + selector).find(".mySidenav").width("0px");
    $("#" + selector).find(".closebtn").addClass("hidden");
    $("#main .container").fadeTo("slow", 1);
    return $("body.events #main, body.articles #main").css({
      "z-index": 0,
      "position": "static"
    });
  };

}).call(this);
