function drawMap(elementId) {
  var lat = 52.18505;
  var lng = 21.589309;
  var mapCanvas = document.getElementById(elementId);
  var location = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    center: location,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      'stylers': [
        { 'saturation': -100 },
        { 'gamma': 1 }]
      },{
        'elementType': 'labels.text.stroke',
        'stylers': [{'visibility': 'off' }]
      },{
        'featureType': 'poi.business',
        'elementType': 'labels.text',
        'stylers': [{'visibility': 'on'}]
      },{
        'featureType': 'poi.business',
        'elementType': 'labels.icon',
        'stylers': [{ 'visibility': 'on' }]
      },{
        'featureType': 'poi.place_of_worship',
        'elementType': 'labels.text',
        'stylers': [{ 'visibility': 'off' }]
      },{
        'featureType': 'poi.place_of_worship',
        'elementType': 'labels.icon',
        'stylers': [
          { 'visibility': 'off' }
        ]
      },{
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'simplified'} ]
      },{
        'featureType': 'water',
        'stylers': [
          {'visibility': 'on'},
          {'saturation': 50 },
          {'gamma': 0 },
          {'hue': '#50a5d1'}]
      },{
        'featureType': 'administrative.neighborhood',
        'elementType': 'labels.text.fill',
        'stylers': [
          {'color': '#333333'} ]
      },{
        'featureType': 'road.local',
        'elementType': 'labels.text',
        'stylers': [
          {'weight': 0.5 },
          {'color': '#333333'}]
      },{
        'featureType': 'transit.station',
        'elementType': 'labels.icon',
        'stylers': [
          {'gamma': 1 },
          {'saturation': 50 }]
      }
    ]};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  new google.maps.Marker({
    position: location,
    map: map,
    title: 'Firma!',
    icon: 'images/marker.png'
  });
};