var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
'Imagery © <a href="http://mapbox.com">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);
L.circle([51.508, -0.11], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
			}).addTo(mymap).bindPopup("I am a circle.");
		
var myPolygon = L.polygon([
						   [51.509, -0.08],
						   [51.503, -0.06],
						   [51.51, -0.047]
			                ],{
								color: 'red',
								fillColor: '#f03',
								fillOpacity: 0.5
								}).addTo(mymap).bindPopup("I am a polygon.");
var geojsonFeature = {
 "type": "Feature",
 "properties": {
 "name": "London",
 "popupContent": "This is where UCL is based"
 },
 "geometry": {
 "type": "Point",
 "coordinates": [-0.118092, 51.509865]
 }
};
L.geoJSON(geojsonFeature).addTo(mymap).bindPopup("<b>"+geojsonFeature.properties.name+" "+geojsonFeature.properties.popupContent+"<b>");
var popup = L.popup();
function onMapClick(e) {
popup
.setLatLng(e.latlng)
.setContent("You clicked the map at " + e.latlng.toString())
.openOn(mymap);
}
mymap.on('click', onMapClick);