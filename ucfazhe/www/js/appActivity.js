var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
'Imagery © <a href="http://mapbox.com">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);

function trackLocation() {
if (navigator.geolocation) {
navigator.geolocation.watchPosition(showPosition);
} else {
document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
	var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

	document.getElementById('showLocation').innerHTML = "Latitude: " + position.coords.latitude +
	"<br>Longitude: " + position.coords.longitude;
	
	showMap(latitude, longitude);
	}

	function showMap(latitude, longitude) {
	var mapLatAndLong = new mymap.LatLng(latitude, longitude);

	var mapOptions = {
		zoom: 15,
		center: mapLatAndLong,
		
	};

	var element = document.getElementById("map");
	var map = new mymap.Map(element, mapOptions);

	addMarker(map, mapLatAndLong, "Your Location", "It's here.");
}

function addMarker(map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};

	var marker = new mymap.Marker(markerOptions);

	var infoWindowOptions = {
		content: content,
		position: latlong
	};

	var infoWindow = new mymap.InfoWindow(infoWindowOptions);

	mymap.event.addListener(marker, "click", function() {
		infoWindow.open(map);
	});
}	
