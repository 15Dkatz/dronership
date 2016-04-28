myApp.controller('MapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform, $rootScope, $http) {


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
    // $scope.map.data.loadGeoJson('../geojson/5_mile_airport.geo.json'); //2 second load
    $scope.map.data.loadGeoJson('/js/geojson/reducedList.geo.json'); //near instantaneous load
    // document.addEventListener("deviceready", onDeviceReady, false);
    // function onDeviceReady() {
    //     console.log(cordova.file);
    // // }
    // $http.get('geojson/reducedList.geo.json')
    //   .success(function (data) {
    //       // The json data will now be in scope.
    //       $scope.myJsonData = data;
    //   });
    // var geoJson = null;

    // $http.get('geojson/reducedList.geo.json').success(function(data) {
    //   console.log("success", data);
    //   geojson = data;
    // });

    // $scope.map.data.addGeoJson(geoJson); //near instantaneous load

    // $scope.map.data.loadGeoJson($scope.myJsonData); //near instantaneous load
    // any other useful geojson data sets we can load on top of this
    // no-fly zones [check]
    // what else...?

    $scope.map.data.setStyle(function(feature) {
      var color = 'red';
      if (feature.getProperty('isColorful')) {
        color = feature.getProperty('color');
      }
      return /** @type {google.maps.Data.StyleOptions} */({
        fillColor: color,
        strokeColor: color,
        strokeWeight: 2
      });
    });

    placeMarkerAndPanTo(latitude, longitude, $scope.map);
   
  }

  function placeMarkerAndPanTo(latitude, longitude, map) {
    var latLng = new google.maps.LatLng(latitude, longitude);
    var marker = new google.maps.Marker({
      position: latLng,
      map: $scope.map,
      animation: google.maps.Animation.DROP
    });
    map.panTo(latLng);
  }

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    loadMap(latitude, longitude);

    }, function(error){
      console.log("Could not get location");
  });



  $rootScope.$on('mapCentered', function() {
    console.log("heard mapCentered");

    placeMarkerAndPanTo($rootScope.latitude, $rootScope.longitude, $scope.map);
  })



});

// 
// get response for "riskiness levels"
// get geolocation going