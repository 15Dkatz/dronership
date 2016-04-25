myApp.controller('MapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform, $rootScope, $http) {


  	// $scope.test = "testing $scope, $scope works| MAP page";

    // Get the countries geojson data from a JSON
  

    var options = {timeout: 10000, enableHighAccuracy: true};
  
    var loadMap = function(latitude, longitude) {

      console.log("latitude in loadMap", latitude, "longitude", longitude);


      var latLng = new google.maps.LatLng(latitude, longitude);
      var mapOptions = {
        center: latLng,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      $scope.map.data.loadGeoJson('../geojson/reducedlist.geo.json');

      placeMarkerAndPanTo(latitude, longitude, $scope.map);

     
    }

    function placeMarkerAndPanTo(latitude, longitude, map) {
       var latLng = new google.maps.LatLng(latitude, longitude);
      var marker = new google.maps.Marker({
        position: latLng,
        map: $scope.map
      });
      map.panTo(latLng);
    }

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      // reset latLng to rootScope.latitude and rootScope.longitude

      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      loadMap(latitude, longitude);

      }, function(error){
        console.log("Could not get location");
    });



    $rootScope.$on('mapCentered', function() {
      console.log("heard mapCentered");

      // reset the map for drawing
      // google.maps.event.trigger(map, 'resize');

      placeMarkerAndPanTo($rootScope.latitude, $rootScope.longitude, $scope.map);
    })









});


// get geolocation going