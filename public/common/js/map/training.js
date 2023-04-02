var map = null;

window.onload = function() {
    var mapCenter = new google.maps.LatLng(35.68665,139.69563);
    var map = new google.maps.Map(document.getElementById("gmap"), {
        zoom: 17,
        center: mapCenter,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scaleControl: true,
    });
    new google.maps.Marker({
        position: mapCenter,
        map: map,
    });
}