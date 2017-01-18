var map;
var markers =[];
var paths=[];
function initMap(){
     map = new google.maps.Map(document.getElementById('map'), {
               center: {lat: -40.397, lng: 70.644},
               zoom: 8
        });
}
//helpers
function addMarker(location) {
     var marker = new google.maps.Marker({
       position: location,
       map: map
     });
     markers.push(marker);
}
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function addPath(path){
  var newPath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
    paths.push(newPath);
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

function removePath(){
  paths[0].setMap(null);
}

function markNY(){
  var latLng={ lat: 40.71, lng: -74}
  map.setCenter(latLng);
    if(markers.length>0){
      clearMarkers();
    }
    if(paths.length>0){
      removePath();
    }
    addMarker(latLng);
  }
//helpers
function markNJ(){
  var latLng={lat: 40.05, lng:-74.40}
  map.setCenter(latLng);
  if(markers.length >0){
    setMapOnAll(null);
  }
  if(paths.length >0){
    removePath();
  }
    markers =[];
   addMarker(latLng);
}





function tracePath(){
  if(markers.length > 0){
    setMapOnAll(null);
  }
  map.setCenter({lat: 40.05, lng:-74.40});
  addMarker({ lat: 40.71, lng: -74});
  addMarker({lat: 40.05, lng:-74.40});
  addPath([{ lat: 40.71, lng: -74},{lat: 40.05, lng:-74.40}]);
  paths[0].setMap(map);
}
