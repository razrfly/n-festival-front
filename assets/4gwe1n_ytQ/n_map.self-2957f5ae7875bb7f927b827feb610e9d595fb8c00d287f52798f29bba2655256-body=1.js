(function() {
  var map, mapLink;

  if ($("#map").length > 0) {
    map = L.map('map').setView([$("#map").data("lat"), $("#map").data("lng")], 13);
    mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png", {
      maxZoom: 17,
      opacity: .1
    }).addTo(map);
    $.each($("#map").data("venues"), function(index, value) {
      var marker, text;
      marker = L.marker([value.lat, value.lng]);
      text = value.name + "<br>" + value.address + "<hr>" + value.content;
      marker.bindPopup(L.popup().setContent(text));
      return marker.addTo(map);
    });
  }

}).call(this);
