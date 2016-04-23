myApp.controller('DroneCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform, $http) {


  	$scope.test = "testing $scope, $scope works| MAP EXAMPLE";

  	$scope.long;
  	$scope.lat;


  	// get Information method

  	$scope.getInfo = function() {
  		// Grab Location **********
  		ionic.Platform.ready(function(){
	    // Code goes here
    	$ionicLoading.show({
            template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
        });
         
        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };
 		
 		$cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
             
            var myLatlng = new google.maps.LatLng(lat, long);
             
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };          
             
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
             
            $scope.map = map;   
            $ionicLoading.hide();           

            console.log(lat, long, map);

            $scope.lat = lat;
            $scope.long = long;
            
            $scope.getWunderGround();


	        }, function(err) {
	            $ionicLoading.hide();
	            console.log(err);
	        });
	        
		})  

  		  		// grab JSON api wunderground
  		// http://api.wunderground.com/api/06dfbc32cb33068b/conditions/q/37.8,-122.4.json

  	}


  	$scope.data;

  	
  	// $scope.weather;
  	// $scope.temperature;
  	// $scope.wind_degrees;
  	// $scope.wind_mph;

  	// weather
  	// temperature_string
  	// relative_humidity
  	// wind_string
  	// wind_mph
  	// wind_gust_mph
  	// observation_location.full


  	$scope.getWunderGround = function() {

	   var getString = 'http://api.wunderground.com/api/06dfbc32cb33068b/conditions/q/' + $scope.lat + ',' + $scope.long + '.json';

    	$http({
	        method : "GET",
	        url : getString
	    }).then(function mySucces(response) {
	        // $scope.myWelcome = response.data;
	        console.log(response.data);
	        $scope.data = response.data.current_observation;

	        // 

	    }, function myError(response) {
	        // $scope.myWelcome = response.statusText;
	        console.log(response.statusText);
	    });

	    

    	// $scope.name = newName;
	}




});


// get geolocation going