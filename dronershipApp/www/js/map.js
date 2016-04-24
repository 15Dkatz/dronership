myApp.controller('MapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform, $rootScope, $http) {


  	$scope.test = "testing $scope, $scope works| MAP page";

    // angular.extend($scope, {
    // $scope.center = {
    //     lat: 40.095,
    //     lng: -3.823,
    //     zoom: 4
    // }
    //     // defaults: {
        //     scrollWheelZoom: false
        // }
    // }); 

    // angular.extend($scope, {
    //     japan: {
    //         // lat: $rootScope.latitude,
    //         // lng: $rootScope.longitude,
    //         lat: 37.26,
    //         lng: 138.86,
    //         zoom: 4
    //     },
    //     defaults: {
    //         scrollWheelZoom: false
    //     }
    // });

    // // Get the countries geojson data from a JSON
    // $http.get("examples/json/JPN.geo.json").success(function(data, status) {
    //     angular.extend($scope, {
    //         geojson: {
    //             data: data,
    //             style: {
    //                 fillColor: "green",
    //                 weight: 2,
    //                 opacity: 1,
    //                 color: 'white',
    //                 dashArray: '3',
    //                 fillOpacity: 0.7
    //             }
    //         }
    //     });
    // });
    // });
     var local_icons = {
        // default_icon: {},
        pin_icon: {
            iconUrl: "../img/pin.png",
             iconSize:     [30, 28],
        },
    };



    // angular.extend($scope, {
    //     center: {
    //         lat: 37.78,
    //         lng: -122.399,
    //         // lat: $rootScope.latitude,
    //         // lng: $rootScope.longitude,
    //         zoom: 11
    //     },
    //      markers: {
    //         m1: {
    //             lat: 37.78,
    //             lng: -122.399,
    //             message: "Your location",
    //             icon: local_icons.pin_icon
    //         },
    //     },
    //     defaults: {
    //         scrollWheelZoom: true
    //     }

    // });
    var lat = 47.78;
    var lng = -122.399;

    $scope.center = {
        lat: lat,
        lng: lng,
        // lat: $rootScope.latitude,
        // lng: $rootScope.longitude,
        zoom: 13
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
        $scope.reloadMap();
      }, 500);
      
    })


    $scope.reloadMap = function() {
      console.log("reload", $rootScope.latitude, $rootScope.longitude);
      $scope.center = {
        lat: $rootScope.latitude,
        lng: $rootScope.longitude,
        zoom: 13
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
    // $http.get("../geojson/5_mile_airport.geo.json").success(function(data, status) {
    //     angular.extend($scope, {
    //         geojson: {
    //             data: data,
    //             style: {
    //                 fillColor: "red",
    //                 weight: 2,
    //                 opacity: 1,
    //                 color: 'white',
    //                 dashArray: '3',
    //                 fillOpacity: 0.7
    //             }
    //         }
    //     });
    // });
});


// get geolocation going