myApp.controller('MapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {


  	$scope.test = "testing $scope, $scope works| MAP page";


    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'dtkatz.ponnknpd',
    accessToken: 'pk.eyJ1IjoiZHRrYXR6IiwiYSI6ImNpbmRydHdoOTB4N3N2MGtxbjIwZTF6MmsifQ.4kLOJqUvxo7MRk4C6vCtoA'
}).addTo(mymap);
});


// get geolocation going