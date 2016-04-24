myApp.controller('MapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform, $rootScope, $http) {


  	$scope.test = "testing $scope, $scope works| MAP page";

     var local_icons = {
        // default_icon: {},
        pin_icon: {
            iconUrl: "../img/pin.png",
             iconSize:     [30, 28],
        },
    };



    var lat = 34.052235;
    var lng = -118.24368;

    // 34.0522° N, 118.2437° 

    $scope.center = {
        lat: lat,
        lng: lng,
        // lat: $rootScope.latitude,
        // lng: $rootScope.longitude,
        zoom: 11
    }

    $scope.markers = {
      m1: {
          lat: lat,
          lng: lng,
          message: "Your location",
          icon: local_icons.pin_icon
      },
    }

    $rootScope.$on('mapCentered', function() {
      console.log("map Centered");
      setTimeout(function() {
        $scope.$apply(function() {
          $scope.reloadMap();
        })
      }, 500);
      
    })


    $scope.reloadMap = function() {
      console.log("reload", $rootScope.latitude, $rootScope.longitude);
      $scope.center = {
        lat: $rootScope.latitude,
        lng: $rootScope.longitude,
        zoom: 11
      }

      $scope.markers = {
        m1: {
          // lat: 37.78,
          // lng: -122.399,
          lat: $rootScope.latitude,
          lng: $rootScope.longitude,
          message: "Your location",
          icon: local_icons.pin_icon
        },
      }

    }



    // Get the countries geojson data from a JSON
    $http.get("../geojson/reducedList.geo.json").success(function(data, status) {
        angular.extend($scope, {
            geojson: {
                data: data,
                style: {
                    fillColor: "red",
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                }
            }
        });
    });
});


// get geolocation going