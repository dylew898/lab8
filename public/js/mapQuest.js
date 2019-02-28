function initMap() {
	
	L.mapquest.key = 'z55A4lFjgZ4oti0fuRf5SjD4dtXgn2sG';

	//'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.878802, -117.235910],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	})

	//Add a marker to the map
	L.marker([32.878802, -117.235910]).addTo(map);

}