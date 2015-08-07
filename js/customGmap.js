
var map;
var coordData = new google.maps.LatLng(40.69847, -73.95144);
var marker;

function initialize() {
        var mapOptions = {
                zoom: 11,
                center: coordData,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                styles: [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }]
        }



        var map = new google.maps.Map(document.getElementById("map-canvas-55b1b3b15e23a"), mapOptions);
        map.panBy(0, 0);
        var markerIcon = {
                url: "http://livedemo00.template-help.com/woocommerce_54976/wp-content/themes/theme54976/images/gmap_marker.png",
                size: new google.maps.Size(29, 44),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(39, 58)
        };

        marker = new google.maps.Marker({
                map: map,
                draggable: false,
                position: coordData,
                icon: markerIcon

        });

}
google.maps.event.addDomListener(window, "load", initialize);
       