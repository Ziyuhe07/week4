// load the map
	var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	// load the tiles
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
	}).addTo(mymap);

	//Track location function
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
	document.getElementById('showLocation').innerHTML = "Latitude: " + latitude +
	"<br>Longitude: " + longitude;
	L.marker([latitude, longitude]).addTo(mymap)
			.bindPopup("<b>You are here</b>").openPopup();
	}